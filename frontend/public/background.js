chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "updateBadge") {
    updateBadge(message.count);
  }
});

function updateBadge(count) {
  chrome.action.setBadgeText({ text: count.toString() });
  chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
}
