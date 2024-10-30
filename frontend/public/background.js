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

    case "getResults":
      chrome.storage.local.get(["autoplayCount"], (result) => {
        const storedAutoplayCount = result.autoplayCount || 0;
        sendResponse({ count: storedAutoplayCount });
      });
      break;

    case "startAutoplayDetection":
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "startAutoplayDetection",
          });
        }
      });
      break;

    case "stopAutoplayDetection":
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "stopAutoplayDetection",
          });
        }
      });
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
