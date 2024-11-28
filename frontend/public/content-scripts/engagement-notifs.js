let alertedNotifs = [];

function updateStorageAndNotify(type, storageKey, messageType) {
  chrome.storage.local.get([storageKey], function (result) {
    let currentCount = result[storageKey] || 0;
    currentCount += 1;

    chrome.storage.local.set({ [storageKey]: currentCount });

    // Notify the background script to update the count
    chrome.runtime.sendMessage({
      type: messageType,
      count: currentCount,
    });
  });
}

function highlightNotif(notif) {
    notif.parentElement.style.position = "relative";
    notif.style.border = "6px dashed #ffa600";
    notif.style.outlineOffset = "6px";
}

// Checks for engagement notifications
function checkEngagementNotif() {
    const notifs = document.querySelectorAll("article[data-testid='notification']");

    notifs.forEach((notif) =>  {
        if(!alertedNotifs.includes(notif)) {
            alertedNotifs.push(notif);
            console.log("Engagement notification detected: ", notif);
            highlightNotif(notif);

            updateStorageAndNotify("badgeCount", "badgeCount", "updateBadge");
            updateStorageAndNotify("engagementNotifCount", "engagementNotifCount", "updateEngagementNotif");
        }
    });
}

function startEngagementNotifDetection() {
    observer = new MutationObserver(() => {
        checkEngagementNotif();
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    console.log("Engagement Notification detection started.");
}

function stopEngagementNotifDetection(){
    if (observer) {
        observer.disconnect();
        observer = null;

        alertedNotifs = [];
        console.log("Engagement Notification detection stopped.");
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "startEngagementNotif") {
        console.log("Starting engagement notification detection in content script.");

        startEngagementNotifDetection();
        sendResponse({ status: "Engagment Notification detection started" });
    } else if (message.type === "stopEngagementNotif") {
        console.log("Stopping engagement notification detection in content script.");
        stopEngagementNotifDetection();
        sendResponse({ status: "Engagement Notification detection stopped"});
    }
});
