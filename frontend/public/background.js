let autoplayTabId = null;
let isAutoplayDetectionActive = false;

// Listen for tab updates to detect the "x.com" URL
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("x.com")) {
    autoplayTabId = tabId; // Store tabId for the autoplay content script
    console.log("Autoplay tab detected:", autoplayTabId);
  }
});

// Update badge count and color
function updateBadge(count) {
  chrome.action.setBadgeText({ text: count.toString() });
  chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
}

// Update the autoplay count in storage and log it
function updateResults(count) {
  console.log("Autoplay count updated in background:", count);
  chrome.storage.local.set({ autoplayCount: count });
}

// Handle incoming messages based on type
function handleMessage(message, sendResponse) {
  switch (message.type) {
    case "updateBadge":
      updateBadge(message.count);
      break;

    case "updateAutoplay":
      updateResults(message.count);
      chrome.storage.local.get(["autoplayCount"], (result) => {
        const storedAutoplayCount = result.autoplayCount || 0;
        sendResponse({ count: storedAutoplayCount });
      });
      break;

    case "startAutoplay":
      console.log("Starting autoplay detection");
      isAutoplayDetectionActive = true;
      sendResponse({ status: "Autoplay detection started" });
      if (autoplayTabId !== null) {
        chrome.tabs.sendMessage(autoplayTabId, { type: "startAutoplay" });
      }

      break;

    case "stopAutoplay":
      console.log("Stopping autoplay detection");
      isAutoplayDetectionActive = false;
      sendResponse({ status: "Autoplay detection stopped" });
      if (autoplayTabId !== null) {
        chrome.tabs.sendMessage(autoplayTabId, { type: "stopAutoplay" });
      }
      break;

    default:
      console.warn("Unknown message type:", message.type);
      break;
  }
}

// Unified message listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleMessage(message, sendResponse);
  return true; // Keeps the message channel open for async responses if needed
});
