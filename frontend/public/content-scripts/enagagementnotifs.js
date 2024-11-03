/* eslint-disable no-undef */
let alertedVideos = [];

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

// Function to update autoplay count
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

// Function to check for autoplay videos and update counts
function checkAutoplay() {
  const videos = document.querySelectorAll("article[data-testid='notification']");
  videos.forEach((video) => {
    if (!alertedVideos.includes(video)) {
      if (video.autoplay || !video.paused) {
        alert("Notification detected!");

        alertedVideos.push(video);
        updateBadgeCount();
        updateAutoplayCount();
      }
    }
  });
}

// MutationObserver to detect added or changed video elements
const observer = new MutationObserver(() => {
  checkAutoplay();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});