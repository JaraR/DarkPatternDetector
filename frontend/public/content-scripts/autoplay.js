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
//this could be simipfied later with a single function in update badge
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
function checkAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // video.pause();
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

const observer = new MutationObserver(checkAutoplay);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

checkAutoplay();
