//mutation observer

/* eslint-disable no-undef */

let alertedVideos = [];
let observer = null;

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

// Function to check for autoplayed videos
function checkAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    console.log("Videos found:", videos);
    if (!alertedVideos.includes(video)) {
      if (video.autoplay || !video.paused) {
        alertedVideos.push(video);

        alert("Autoplay detected!");
        console.log("Autoplay detected on video", video);

        // Update badge and autoplay count
        updateStorageAndNotify("badgeCount", "badgeCount", "updateBadge");
        updateStorageAndNotify(
          "autoplayCount",
          "autoplayCount",
          "updateAutoplay"
        );
      }
    }
  });
}

// MutationObserver to detect newly added video elements
function startAutoplayDetection() {
  observer = new MutationObserver(() => {
    checkAutoplay();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log("Autoplay detection started");
}

function stopAutoplayDetection() {
  if (observer) {
    observer.disconnect();
    observer = null;

    alertedVideos = [];
    console.log("Autoplay detection stopped");
  }
}

// Message listener for starting and stopping autoplay detection
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startAutoplay") {
    console.log("Starting autoplay detection in content script");

    startAutoplayDetection();
    sendResponse({ status: "Autoplay detection started" });
  } else if (message.type === "stopAutoplay") {
    console.log("Stopping autoplay detection in content script");
    stopAutoplayDetection();
    sendResponse({ status: "Autoplay stopped" });
  }
});
