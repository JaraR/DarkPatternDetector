// Array to track the video elements that have already triggered the alert
let alertedVideos = [];

// Function to check autoplay status of video elements
function checkAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // If the video has already been alerted, skip it
    if (!alertedVideos.includes(video)) {
      // Check if the video is autoplaying or not paused
      if (video.autoplay || !video.paused) {
        alert("Autoplay detected!"); // Show alert for the first autoplaying video
        alertedVideos.push(video); // Mark this video as alerted

        // ---badge count---
        chrome.storage.local.get(["badgeCount"], function (result) {
          let currentCount = result.badgeCount || 0;
          currentCount += 1;
          chrome.runtime.sendMessage({
            type: "updateBadge",
            count: currentCount,
          });
          chrome.storage.local.set({ badgeCount: currentCount });
        });

        //---send message to background then to results popup---
        chrome.storage.local.get(["autoplayCount"], function (result) {
          let currentCount = result.autoplayCount || 0;
          currentCount += 1;

          chrome.runtime.sendMessage({
            type: "updateAutoplay",
            count: currentCount,
          });
          chrome.storage.local.set({ autoplayCount: currentCount });
        });
      }
    }
  });
}

// MutationObserver to detect new video elements being added
const observer = new MutationObserver(() => {
  checkAutoplay(); // Check videos whenever the DOM changes
});

// Start observing the entire document for added nodes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Run the check once initially
checkAutoplay();
