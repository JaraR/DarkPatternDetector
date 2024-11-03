/* eslint-disable no-undef */

let alertedVideos = [];
let isAutoplayDetectionActive = false;

// //functioning code

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

// // Function to update autoplay count
function updateAutoplayCount() {
  chrome.storage.local.get(["autoplayCount"], function (result) {
    let currentCount = result.autoplayCount || 0;
    currentCount += 1;
    chrome.storage.local.set({ autoplayCount: currentCount });

    // Notify the background script to update the autoplay count
    chrome.runtime.sendMessage({
      type: "updateAutoplay",
      count: currentCount,
    });
  });
}

// // Function to check for autoplay videos and update counts
function checkAutoplay() {
  if (!isAutoplayDetectionActive) return; // Exit if detection is not active

  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    if (!alertedVideos.includes(video)) {
      if (video.autoplay || !video.paused) {
        alert("Autoplay detected!");

        alertedVideos.push(video);
        updateBadgeCount();
        updateAutoplayCount();
      }
    }
  });
}

// // MutationObserver to detect added or changed video elements
const observer = new MutationObserver(() => {
  if (isAutoplayDetectionActive) {
    checkAutoplay();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startAutoplay") {
    console.log("Starting autoplay detection in content script");
    isAutoplayDetectionActive = true;

    checkAutoplay();
  } else if (message.type === "stopAutoplay") {
    console.log("Stopping autoplay detection in content script");
    isAutoplayDetectionActive = false;

    return;
  }
});
