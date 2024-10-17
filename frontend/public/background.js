let autoplayCount = 0;

// Function to update the badge with the given count
function updateBadge(count) {
  chrome.action.setBadgeText({ text: count.toString() });
  chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
}

// Function to update results in storage and send a response
function updateResults(count, sendResponse) {
  autoplayCount = count;

  // Ensure storage is set before sending the response
  chrome.storage.local.set({ autoplayCount }, () => {
    sendResponse({ count: autoplayCount });
  });
}

// Handle different types of messages
function handleMessage(message, sendResponse) {
  switch (message.type) {
    case "updateBadge":
      updateBadge(message.count);
      break;

    case "updateAutoplay":
      updateResults(message.count, sendResponse);
      break;

    case "getResults":
      chrome.storage.local.get(["autoplayCount"], (result) => {
        const storedAutoplayCount = result.autoplayCount || 0;
        sendResponse({ count: storedAutoplayCount });
      });
      break;

    default:
      console.warn("Unknown message type:", message.type);
      break;
  }
}

// Listener for runtime messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleMessage(message, sendResponse);
  return true; // To keep the message channel open for async responses
});
