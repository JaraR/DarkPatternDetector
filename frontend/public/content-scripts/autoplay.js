// Function to check autoplay status of video elements
function checkAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // video.autoplay = false;
    // video.pause();
    if (video.autoplay || !video.paused) {
      alert("Autoplay detected!");
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
