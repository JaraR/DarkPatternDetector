// Function to update the badge text and background color
function updateBadge(count) {
  chrome.action.setBadgeText({ text: count.toString() });
  chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
}

function updateResults(count) {
  console.log("Autoplay count updated in background:", count);
  chrome.storage.local.set({ autoplayCount: count });
}

// Function to handle messages from content scripts or other parts of the extension
function handleMessage(message, sender, sendResponse) {
  switch (message.type) {
    case "updateBadge":
      updateBadge(message.count); // Update badge with new count
      sendResponse({ status: "Badge updated successfully" });
      break;

    case "updateAutoplay":
      updateResults(message.count);
      chrome.storage.local.get(["autoplayCount"], (result) => {
        const storedAutoplayCount = result.autoplayCount || 0;
        console.log(
          "Retrieved autoplay count in background:",
          storedAutoplayCount
        );
        sendResponse({ count: storedAutoplayCount });
      });
      break;

    default:
      sendResponse({ status: "Unknown message type" });
      break;
  }
  return true;
}

// Listen for incoming messages

const MESSAGE_TYPE = {
  START_AUTOPLAY: "startAutoplay",
  STOP_AUTOPLAY: "stopAutoplay",
};

// Function to send a message to the content script in the active tab
function sendMessageToContent(tabId, message) {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, message, (response) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
}

// Listener for changes in chrome.storage
chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace === "sync" && changes.autoplay) {
    const newAutoplayValue = changes.autoplay.newValue;
    console.log("Autoplay setting changed:", newAutoplayValue);

    const messageType = newAutoplayValue
      ? MESSAGE_TYPE.START_AUTOPLAY
      : MESSAGE_TYPE.STOP_AUTOPLAY;

    try {
      // Query relevant tabs (e.g., X, Bluesky, Reddit)
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
        url: ["*://*.x.com/*", "*://*.bsky.app/*", "*://*.reddit.com/*"],
      });

      if (tabs.length > 0 && tabs[0].id !== undefined) {
        const response = await sendMessageToContent(tabs[0].id, {
          type: messageType,
        });
        console.log("Response from content script:", response);
      } else {
        console.warn("No relevant tab found or tab ID is undefined.");
      }
    } catch (error) {
      console.error("Failed to send message to content script:", error);
    }
  }
});

chrome.runtime.onMessage.addListener(handleMessage);
