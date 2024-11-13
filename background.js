// 存储每个网页的阅读时间
const map = new Map();

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "updateBadge") {
    updateBadge(message.count);
  }
  if (message.type === "updateReadingTime") {
    const query = await chrome.tabs.query({ active: true, currentWindow: true })
    if (query && Array.isArray(query) && query[0]?.id) {
      const tabsParams = query[0]
      if (!map.has(tabsParams.id)) {
        map.set(tabsParams.id, new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
      }
      sendResponse({ ...tabsParams, startTime: map.get(tabsParams.id) })
    }
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



// .................................... Reading Time .....................................................
function sendMessageToActiveTab(e) {
  let queryOptions = { active: true, currentWindow: true };
  chrome.tabs.query(queryOptions, ([tab]) => {
    if (!map.has(tab.id)) {
      map.set(tab.id, new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
    }
    chrome.tabs.sendMessage(tab?.id, tab ? {
      ...tab,
      type: "readingTimer",
      startTime: map.get(tab.id)
    } : { type: "readingTimer" })
  });
}
chrome.storage.onChanged.addListener((changes) => {
  if (changes.readingTimer?.newValue) sendMessageToActiveTab()
})
chrome.tabs.onActivated.addListener(sendMessageToActiveTab);

