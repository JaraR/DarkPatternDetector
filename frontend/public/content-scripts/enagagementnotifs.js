/* eslint-disable no-undef */
let alertedNotifs = [];

const updateBadgeCount = () => {
  chrome.storage.local.get(["badgeCount"], function (result) {
    let currentCount = result.badgeCount || 0;
    currentCount += 1;

    chrome.storage.local.set({ badgeCount: currentCount }, () => {
      chrome.runtime.sendMessage({
        type: "updateBadge",
        count: currentCount,
      });
    });
  });
};

// Function to update engagement notification count on piechart
function updateEngagementNotifCount() {
  chrome.storage.local.get(["engagementNotifCount"], function (result) {
    let currentCount = result.engagementNotifCount || 0;
    currentCount += 1;
    chrome.storage.local.set({ engagementNotifCount: currentCount });

    // Notify the background script to update the engagement notification count
    chrome.runtime.sendMessage({
      type: "updateEngagementNotif",
      count: currentCount,
    });
  });
}

// Function to check for notifications and update counts
function checkEngagementNotif() {
  const notifs = document.querySelectorAll("article[data-testid='notification']");
  notifs.forEach((notif) => {
    if (!alertedNotifs.includes(notif)) {
        alert("Notification detected!");

        alertedNotifs.push(notif);
        updateBadgeCount();
        updateEngagementNotifCount();

    }
  });
}

// MutationObserver to detect added or changed notification elements
const observer = new MutationObserver(() => {
  checkEngagementNotif();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});