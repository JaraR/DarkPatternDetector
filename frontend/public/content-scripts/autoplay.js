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
function checkAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // video.pause();
    if (!alertedVideos.includes(video)) {
      if (video.autoplay || !video.paused) {
        alert("Autoplay detected!");

        alertedVideos.push(video);
        updateBadgeCount();
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
