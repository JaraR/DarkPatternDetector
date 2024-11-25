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
    engagementNotifCount = count;
    console.log("Engagement notification count updated in background:", engagementNotifCount);
    chrome.storage.local.set({ engagementNotifCount });
  }
  function handleMessage(message, sendResponse) {
    switch (message.type) {
      case "updateBadge":
        updateBadge(message.count);
        break;
  
      case "updateEngagementNotif":
        updateResults(message.count, sendResponse);
        break;
  
      case "getResults":
        chrome.storage.local.get(["engagementNotifCount"], (result) => {
          const storedEngagementNotifCount = result.engagementNotifCount || 0;
          sendResponse({ count: storedEngagementNotifCount });
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