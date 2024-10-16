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
        alert("Autoplay detected!"); // Show alert if autoplaying
        alertedVideos.push(video); // Mark this video as alerted, to avoid constant alerts from the same video
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
