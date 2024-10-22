/* eslint-disable no-undef */

let alertedVideos = [];

/**
 * Creates a red overlay on the video element to highlight autoplay
 * @param {HTMLElement} video - The video element to highlight
 */
function highlightVideo(video) {
  const redOverlay = document.createElement("div");
  redOverlay.style.position = "absolute";
  redOverlay.style.top = "0";
  redOverlay.style.left = "0";
  redOverlay.style.width = "100%";
  redOverlay.style.height = "100%";
  redOverlay.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  redOverlay.style.zIndex = "9999";

  // Ensure parent is positioned and insert the overlay
  video.parentNode.style.position = "relative";
  video.parentNode.insertBefore(redOverlay, video);
}

/**
 * Updates the badge count for the Chrome extension
 */
function updateBadgeCount() {
  chrome.storage.local.get(["badgeCount"], function (result) {
    let currentCount = result.badgeCount || 0;
    currentCount += 1;
    chrome.storage.local.set({ badgeCount: currentCount });

    // Notify the background script to update the badge
    chrome.runtime.sendMessage({
      type: "updateBadge",
      count: currentCount,
    });
  });
}

/**
 * Updates the autoplay count and sends it to the background script
 */
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

/**
 * Checks for autoplaying video elements on the page
 */
function checkAutoplay() {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    if (!alertedVideos.includes(video) && (video.autoplay || !video.paused)) {
      alertedVideos.push(video);
      highlightVideo(video);
      updateBadgeCount();
      updateAutoplayCount();
    }
  });
}

// MutationObserver to detect new video elements being added
const observer = new MutationObserver(checkAutoplay);

// Start observing the document for added nodes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Run the check once initially
checkAutoplay();
