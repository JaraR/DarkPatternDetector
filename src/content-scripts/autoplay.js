let alertedVideos = [];
let isDetectionActive = false; // Initialize detection status

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
  if (!isDetectionActive) return; // Only run if detection is active

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

// MutationObserver to detect added or changed video elements
const observer = new MutationObserver(() => {
  if (isDetectionActive) checkAutoplay();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Initial autoplay check, but only if detection is active
if (isDetectionActive) {
  checkAutoplay();
}

// Listen for messages to start or stop autoplay detection
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startAutoplayDetection") {
    isDetectionActive = true; // Activate detection
    console.log("Starting autoplay detection");
    checkAutoplay(); // Initial check when detection starts
  } else if (message.type === "stopAutoplayDetection") {
    isDetectionActive = false; // Deactivate detection
    console.log("Stopping autoplay detection");
  }
});
