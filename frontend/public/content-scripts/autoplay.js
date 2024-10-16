// Array to track the video elements that have already triggered the alert
let alertedVideos = [];

// Function to check autoplay status of video elements
function checkAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // If the video has already been alerted, skip it
    if (!alertedVideos.includes(video)) {
      if (video.autoplay || !video.paused) {
        alert("Autoplay detected!"); // Check if the video is autoplaying or not paused, Show alert
        alertedVideos.push(video); // Mark this video as alerted, to avoid constant alerts(bug fixed)
        chrome.runtime.sendMessage({
          type: "updateBadge",
          count: alertedVideos.length,
        }); // Send a message to the background script to update the badge count
      }
    }
  });
}

// MutationObserver to detect new video elements being added, it is for the videos that are loaded after the page is loaded
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
