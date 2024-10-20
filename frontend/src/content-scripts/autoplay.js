/* eslint-disable no-undef */
// Array to track the video elements that have already triggered the alert
let alertedVideos = [];

// Function to check autoplay status of video elements
function checkAutoplay() {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    if (!alertedVideos.includes(video)) {
      if (video.autoplay || !video.paused) {
        // alert("Autoplay detected!");

        alertedVideos.push(video); // Mark this video as alerted

        // ---Highlight the video---
        // ---Create a red overlay---
        const redOverlay = document.createElement("div");
        redOverlay.style.position = "absolute";
        redOverlay.style.top = "0";
        redOverlay.style.left = "0";
        redOverlay.style.width = "100%";
        redOverlay.style.height = "100%";
        redOverlay.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; // Semi-transparent red
        redOverlay.style.zIndex = "9999"; // Ensure it appears on top of the video

        // Insert the overlay just before the video
        video.parentNode.style.position = "relative"; // Ensure parent is positioned
        video.parentNode.insertBefore(redOverlay, video);

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
          chrome.storage.local.set({ autoplayCount: currentCount });

          chrome.runtime.sendMessage({
            type: "updateAutoplay",
            count: currentCount,
          });
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
