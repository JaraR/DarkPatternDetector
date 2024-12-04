
// Function to update the badge text and background color
function updateBadge() {
  const keys = ["autoplayCount", "promotedAdsCount", "infiniteScrollCount"];
  
  chrome.storage.local.get(keys, (data) => {
    // Calculate the total count
    const totalCount = keys.reduce((sum, key) => sum + (data[key] || 0), 0);
    // Update the badge text and background color
    chrome.action.setBadgeText({ text: totalCount.toString() });
    chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
  });
}

// Autoplay update function
function updateAutoplayCount(count) {
  console.log("Autoplay count updated in background:", count);
  // Store the updated autoplay count in local storage
  chrome.storage.local.set({ autoplayCount: count }, () => {
    // After updating the autoplay count, update the badge
    updateBadge();
  });
}

// Promoted ads update function
function updatePromotedAdsCount(count) {
  console.log("Promoted Ads count updated in background:", count);
  // Store the updated promoted ads count in local storage
  chrome.storage.local.set({ promotedAdsCount: count }, () => {
    // After updating the promoted ads count, update the badge
    updateBadge();
  });
}

// Infinite Scroll update function
function updateInfiniteScrollCount(count) {
  console.log("Infinite Scroll count updated in background:", count);
  // Store the updated infinite scroll count in local storage
  chrome.storage.local.set({ infiniteScrollCount: count }, () => {
    // After updating the infinite scroll count, update the badge
    updateBadge();
  });
}

// Function to handle messages from content scripts or other parts of the extension
function handleMessage(message, sender, sendResponse) {
  switch (message.type) {
    case "updateBadge":
      updateBadge(message.count);
      sendResponse({ status: "Badge updated successfully" });
      break;

    case "updateAutoplay":
      updateAutoplayCount(message.count);
      chrome.storage.local.get(["autoplayCount"], (result) => {
        const storedAutoplayCount = result.autoplayCount || 0;
        console.log(
          "Retrieved autoplay count in background:",
          storedAutoplayCount
        );
        sendResponse({ count: storedAutoplayCount });
      });
      break;

    case "updatePromotedAds":
      updatePromotedAdsCount(message.count);
      chrome.storage.local.get(["promotedAdsCount"], (result) => {
        const storedPromotedAdsCount = result.promotedAdsCount || 0;
        console.log(
          "Retrieved promoted ads count in background:",
          storedPromotedAdsCount
        );
        sendResponse({ count: storedPromotedAdsCount });
      });
      break;

    case "updateInfiniteScroll":
      updateInfiniteScrollCount(message.count);
      chrome.storage.local.get(["infiniteScrollCount"], (result) => {
        const storedInfiniteScrollCount = result.infiniteScrollCount || 0;
        console.log(
          "Retrieved infinite scroll count in background:",
          storedInfiniteScrollCount
        );
        sendResponse({ count: storedInfiniteScrollCount });
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
  START_PROMOTED_ADS: "startPromotedAds",
  STOP_PROMOTED_ADS: "stopPromotedAds",
  START_INFINITE_SCROLL: "startInfiniteScroll",
  STOP_INFINITE_SCROLL: "stopInfiniteScroll",
};

// Function to send a message to the content script in the active tab
async function sendMessageToContent(tabId, message) {
  try {
    const response = await new Promise((resolve, reject) => {
      chrome.tabs.sendMessage(tabId, message, (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError.message);
        } else {
          resolve(response);
        }
      });
    });
    console.log("Message sent and response received:", response);
  } catch (error) {
    console.error("Error communicating with content script:", error);
  }
}

// Listener for changes in chrome.storage
chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace === "sync") {
    // Check if autoplay setting changed
    if (changes.autoplay) {
      const newAutoplayValue = changes.autoplay.newValue;
      console.log("Autoplay setting changed:", newAutoplayValue);

      const autoplayMessageType = newAutoplayValue
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
            type: autoplayMessageType,
          });
          console.log("Response from content script for autoplay:", response);
        } else {
          console.warn("No relevant tab found or tab ID is undefined.");
        }
      } catch (error) {
        console.error(
          "Failed to send autoplay message to content script:",
          error
        );
      }
    }

    // Check if promotedAds setting changed
    if (changes.promotedAds) {
      const newPromotedAdsValue = changes.promotedAds.newValue;
      console.log("Promoted Ads setting changed:", newPromotedAdsValue);

      const promotedAdsMessageType = newPromotedAdsValue
        ? MESSAGE_TYPE.START_PROMOTED_ADS
        : MESSAGE_TYPE.STOP_PROMOTED_ADS;

      try {
        // Query relevant tabs (e.g., X, Bluesky, Reddit)
        const tabs = await chrome.tabs.query({
          active: true,
          currentWindow: true,
          url: ["*://*.x.com/*", "*://*.bsky.app/*", "*://*.reddit.com/*"],
        });

        if (tabs.length > 0 && tabs[0].id !== undefined) {
          const response = await sendMessageToContent(tabs[0].id, {
            type: promotedAdsMessageType,
          });
          console.log(
            "Response from content script for promoted ads:",
            response
          );
        } else {
          console.warn("No relevant tab found or tab ID is undefined.");
        }
      } catch (error) {
        console.error(
          "Failed to send promoted ads message to content script:",
          error
        );
      }
    }

    //Check if infiniteScroll setting changed
    if (changes.infiniteScroll) {
      const newInfiniteScrollValue = changes.infiniteScroll.newValue;
      console.log("Infinite Scroll setting changed:", newInfiniteScrollValue);
      const infiniteScrollMessageType = newInfiniteScrollValue
        ? MESSAGE_TYPE.START_INFINITE_SCROLL
        : MESSAGE_TYPE.STOP_INFINITE_SCROLL;
      
      console.log("[here1: ]Infinite Scroll message type:", infiniteScrollMessageType);
      
      try {
        // Query relevant tabs (e.g., X, Bluesky, Reddit)
        const tabs = await chrome.tabs.query({
          active: true,
          currentWindow: true,
          url: ["*://*.x.com/*", "*://*.bsky.app/*", "*://*.reddit.com/*"],
        });

        if (tabs.length > 0 && tabs[0].id !== undefined) {
          const response = await sendMessageToContent(tabs[0].id, {
            type: infiniteScrollMessageType,
          });
          console.log(
            "Response from content script for infinite scroll:",
            response
          );
        } else {
          console.warn("No relevant tab found or tab ID is undefined.");
        }
      } catch (error) {
        console.error(
          "Failed to send infinite scroll message to content script:",
          error
        );
      }
    }
  }
});

chrome.runtime.onMessage.addListener(handleMessage);

chrome.storage.local.get(null, (items) => {
  console.log("Local storage content:", items);
});

chrome.storage.sync.get(null, (items) => {
  console.log("Sync storage content:", items);
});

chrome.storage.onChanged.addListener((changes, area) => {
  console.log(`Changes in ${area}:`, changes);
});