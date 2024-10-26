let alertedVideos = [];

function checkAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // video.pause();
    if (!alertedVideos.includes(video)) {
      if (video.autoplay || !video.paused) {
        alert("Autoplay detected!");

        alertedVideos.push(video);
      }
    }
  });
}

const observer = new MutationObserver(() => {
  checkAutoplay();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

checkAutoplay();
