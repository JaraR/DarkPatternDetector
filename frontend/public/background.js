// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "updateBadge") {
    updateBadge(message.count);
  }
});

// Function to update the badge number on the extension icon
function updateBadge(count) {
  chrome.action.setBadgeText({ text: count.toString() });
  chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
}
