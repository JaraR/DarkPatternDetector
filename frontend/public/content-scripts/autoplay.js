/* eslint-disable no-undef */

let alertedVideos = new Set();
let observer = null;

function updateStorageAndNotify(type, storageKey, messageType) {
  chrome.storage.local.get([storageKey], function (result) {
    let currentCount = result[storageKey] || 0;
    currentCount += 1;

    chrome.storage.local.set({ [storageKey]: currentCount });

    // Notify the background script to update the count
    chrome.runtime.sendMessage({
      type: messageType,
      count: currentCount,
    });
  });
}
function highlightVideo(video) {
  video.parentElement.style.position = "relative";
  video.style.borderLeft = "6px dashed #ff8453";
  video.style.outlineOffset = "6px";

  // Add popup label
  const label = document.createElement("div");
  label.innerText = "Autoplay detected and paused";
  label.style.position = "absolute";
  label.style.top = "10px";
  label.style.left = "10px";
  label.style.padding = "5px 10px";
  label.style.backgroundColor = "#ff8453";
  label.style.color = "#fff";
  label.style.fontSize = "14px";
  label.style.borderRadius = "4px";
  label.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  label.style.zIndex = "1000";
  label.style.pointerEvents = "none";

  video.parentElement.appendChild(label);
  setTimeout(() => {
    label.remove();
  }, 5000);
}

// Function to check for autoplayed videos
function startAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    console.log("Videos found:", videos);
    if (!alertedVideos.has(video)) {
      if (video.autoplay || !video.paused) {
        alertedVideos.add(video);
        // alert("Autoplay detected!");
        console.log("Autoplay detected on video", video.src);
        highlightVideo(video);

        setTimeout(() => {
          video.pause();
          console.log("Video paused:", video);
        }, 100);

        console.log("highlighted video", video);

        // Update badge and autoplay count
        updateStorageAndNotify("badgeCount", "badgeCount", "updateBadge");
        updateStorageAndNotify(
          "autoplayCount",
          "autoplayCount",
          "updateAutoplay"
        );
      }
    }
  });
}

// MutationObserver to detect newly added video elements
function startAutoplayDetection() {
  observer = new MutationObserver(() => {
    startAutoplay();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log("Autoplay detection started");
}

function stopAutoplayDetection() {
  if (observer) {
    observer.disconnect();
    observer = null;

    alertedVideos = [];
    console.log("Autoplay detection stopped");
  }
}

// Message listener for starting and stopping autoplay detection
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startAutoplay") {
    console.log("Starting autoplay detection in content script");

    startAutoplayDetection();
    sendResponse({ status: "Autoplay detection started" });
  } else if (message.type === "stopAutoplay") {
    console.log("Stopping autoplay detection in content script");
    stopAutoplayDetection();
    sendResponse({ status: "Autoplay stopped" });
  }
});
