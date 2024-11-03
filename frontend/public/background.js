let autoplayTabId = null;
let autoplayObserver;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("x.com")) {
    autoplayTabId = tabId; // Store tabId for the autoplay content script
    console.log("Autoplay tab detected:", autoplayTabId);
  }
});

//functioning code

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "updateBadge") {
    updateBadge(message.count);
  }
});

function updateBadge(count) {
  chrome.action.setBadgeText({ text: count.toString() });
  chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
}
function updateResults(count) {
  autoplayCount = count;
  console.log("Autoplay count updated in background:", autoplayCount);
  chrome.storage.local.set({ autoplayCount });
}
function handleMessage(message, sendResponse) {
  switch (message.type) {
    case "updateBadge":
      updateBadge(message.count);
      break;

    case "updateAutoplay":
      updateResults(message.count, sendResponse);
      break;

    case "startAutoplay":
      console.log("Starting autoplay detection");

      chrome.storage.local.get(["autoplayCount"], (result) => {
        const storedAutoplayCount = result.autoplayCount || 0;
        sendResponse({ count: storedAutoplayCount });
      });
      return true;

    case "stopAutoplay":
      console.log("Stopping autoplay detection");

      // Disconnect the observer
      if (autoplayObserver) {
        autoplayObserver.disconnect();
        autoplayObserver = null;
      }

      sendResponse({ status: "Stopped autoplay detection" });
      break;

    default:
      console.warn("Unknown message type:", message.type);
      break;
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleMessage(message, sendResponse);
  return true;
});
