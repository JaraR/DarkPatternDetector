// function to Sum Up all the counts
function updateBadge() {
  chrome.storage.local.get(
    ["autoplayCount", "promotedAdsCount", "infiniteScrollingCount"],
    (data) => {
      const totalCount =
        (data.autoplayCount || 0) +
        (data.promotedAdsCount || 0) +
        (data.infiniteScrollingCount || 0);
      chrome.action.setBadgeText({ text: totalCount.toString() });
      chrome.action.setBadgeBackgroundColor({ color: "#fcd400" });
    }
  );
}

// Autoplay update function
function updateAutoplayCount(count) {
  console.log("Autoplay count updated in background:", count);
  chrome.storage.local.set({ autoplayCount: count }, () => {
    updateBadge();
  });
}

// Promoted ads update function
function updatePromotedAdsCount(count) {
  console.log("Promoted Ads count updated in background:", count);
  chrome.storage.local.set({ promotedAdsCount: count }, () => {
    updateBadge();
  });
}

// Infinite scrolling update function
function updateInfiniteScrollingCount(count) {
  console.log("infinite scrolling count updated in background:", count);
  chrome.storage.local.set({ infiniteScrollingCount: count }, () => {
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

    case "updateInfiniteScrolling":
      updateInfiniteScrollingCount(message.count);
      chrome.storage.local.get(["infiniteScrollingCount"], (result) => {
        const storedInfiniteScrollingCount = result.infiniteScrollingCount || 0;
        console.log(
          "Retrieved infinite scrolling count in background:",
          storedInfiniteScrollingCount
        );
        sendResponse({ count: storedInfiniteScrollingCount });
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
  START_INFINITE_SCROLLING: "startInfiniteScrolling",
  STOP_INFINITE_SCROLLING: "stopInfiniteScrolling",
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
    // infinite scrolling
    if (changes.infiniteScrolling) {
      const newInfiniteScrollingValue = changes.infiniteScrolling.newValue;
      console.log(
        "Infinite scrolling setting changed:",
        newInfiniteScrollingValue
      );

      const infiniteScrollingMessageType = newInfiniteScrollingValue
        ? MESSAGE_TYPE.START_INFINITE_SCROLLING
        : MESSAGE_TYPE.STOP_INFINITE_SCROLLING;

      try {
        // Query relevant tabs (e.g., X, Bluesky, Reddit)
        const tabs = await chrome.tabs.query({
          active: true,
          currentWindow: true,
          url: ["*://*.x.com/*", "*://*.bsky.app/*", "*://*.reddit.com/*"],
        });

        if (tabs.length > 0 && tabs[0].id !== undefined) {
          const response = await sendMessageToContent(tabs[0].id, {
            type: infiniteScrollingMessageType,
          });
          console.log(
            "Response from content script for infinite scrolling:",
            response
          );
        } else {
          console.warn("No relevant tab found or tab ID is undefined.");
        }
      } catch (error) {
        console.error(
          "Failed to send infinite scrolling message to content script:",
          error
        );
      }
    }
  }
});

chrome.runtime.onMessage.addListener(handleMessage);
