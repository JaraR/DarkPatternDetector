// ---function to display the badge count---
function updateBadge(count) {
  chrome.action.setBadgeText({ text: count.toString() });
  chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
}

function updateResults(count) {
  autoplayCount = count; // Update stored count
  console.log("Autoplay count updated in background:", autoplayCount);
  chrome.storage.local.set({ autoplayCount });
}
let autoplayCount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //--- badge count---
  if (message.type === "updateBadge") {
    updateBadge(message.count);
  }

  // ---Results.js---
  if (message.type === "updateAutoplay") {
    updateResults(message.count);
    sendResponse({ count: autoplayCount });
  }

  if (message.type === "getResults") {
    sendResponse({ count: autoplayCount });
  }
});
