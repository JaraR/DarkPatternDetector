// // // Track the initial document height

// let observer = null; this line is a bug..
let originBodyScrollHeight = document.body.scrollHeight;

function updateStorageAndNotify(type, storageKey, messageType) {
  chrome.storage.local.get([storageKey], function (result) {
    let currentCount = result[storageKey] || 0;
    currentCount += 1;
    console.log("Current count:", currentCount);

    chrome.storage.local.set({ [storageKey]: currentCount });

    // Notify the background script to update the count
    chrome.runtime.sendMessage({
      type: messageType,
      count: currentCount,
    });
  });
}

// Function to observe scrolling behavior
function startInfiniteScrolling() {
  const bodyScrollHeight = document.body.scrollHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  // Log the current body scroll height and scroll position for debugging
  console.log("Current bodyScrollHeight:", bodyScrollHeight);
  console.log("Current scrollPosition:", scrollPosition);

  // Check if the user is near the bottom of the page
  if (scrollPosition >= bodyScrollHeight - 50) {
    console.log("You have reached the bottom of the page");

    // Check if new content is loaded (page height increases)
    if (bodyScrollHeight > originBodyScrollHeight) {
      console.log("New content detected: page height increased");
      originBodyScrollHeight = bodyScrollHeight;
      console.log("Updated originBodyScrollHeight:", originBodyScrollHeight);
      alert("Infinite Scrolling detected - new content loaded automatically");
    }
    // Update badge and autoplay count
    updateStorageAndNotify("badgeCount", "badgeCount", "updateBadge");
    updateStorageAndNotify(
      "infiniteScrollingCount",
      "infiniteScrollingCount",
      "updateInfiniteScrolling"
    );
  }
}

// MutationObserver to detect newly added video elements
function startInfiniteScrollingDetection() {
  observer = new MutationObserver(() => {
    console.log("Infinite Scrolling detected!!!");
    startInfiniteScrolling();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function stopInfiniteScrollingDetection() {
  if (observer) {
    observer.disconnect();
    observer = null;

    console.log("Infinite Scrolling detection stopped");
  }
}
// Message listener for starting and stopping autoplay detection
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startInfiniteScrolling") {
    console.log("Starting InfiniteScrolling detection in content script");

    startInfiniteScrollingDetection();
    sendResponse({ status: " InfiniteScrolling detection started" });
  } else if (message.type === "stopInfiniteScrolling") {
    console.log("Stopping  InfiniteScrolling detection in content script");
    stopInfiniteScrollingDetection();
    sendResponse({ status: " InfiniteScrolling stopped" });
  }
});
