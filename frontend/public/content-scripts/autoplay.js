/* eslint-disable no-undef */

let alertedVideos = [];
let isAutoplayDetectionActive = false;

// Helper function to update storage and send message
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
  if (!isAutoplayDetectionActive) return;

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
const observer = new MutationObserver(() => {
  if (isAutoplayDetectionActive) {
    checkAutoplay();
  }
});

observer.observe(document.body, {
  childList: true, // Only watch for added or removed elements
  subtree: true, // Watch all descendants of the body
});

// Message listener for starting and stopping autoplay detection
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startAutoplay") {
    console.log("Starting autoplay detection in content script");
    isAutoplayDetectionActive = true;
    checkAutoplay();
  } else if (message.type === "stopAutoplay") {
    console.log("Stopping autoplay detection in content script");
    isAutoplayDetectionActive = false;
  }
});
