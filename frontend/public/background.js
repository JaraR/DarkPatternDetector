// This is new feature: to Reset badge count when tabs are closed
chrome.tabs.onRemoved.addListener(async (tabId, removeInfo) => {
  try {
    // Get information about the closed tab
    const tabs = await chrome.tabs.query({
      url: ["*://*.x.com/*", "*://*.bsky.app/*", "*://*.reddit.com/*"],
    });

    // Check if there are no remaining relevant tabs
    if (tabs.length === 0) {
      chrome.storage.sync.set(
        { autoplay: false, promotedAds: false, engagementNotif: false }
        // () => {
        //   console.log("Autoplay setting reset to false after tab closed.");
        // }
      );

      // Reset counts in storage
      chrome.storage.local.set(
        {
          autoplayCount: 0,
          promotedAdsCount: 0,
          engagementNotifCount: 0,
        },
        () => {
          chrome.action.setBadgeText({ text: "" });
          console.log("Badge count reset.");
        }
      );
    }
  } catch (error) {
    console.error("Error while checking tabs or resetting badge:", error);
  }
});

// function to Sum Up all the counts
function updateBadge() {
  // Fetch both counts from storage and update the badge with the sum
  chrome.storage.local.get(
    ["autoplayCount", "promotedAdsCount", "engagementNotifCount"],
    (data) => {
      const totalCount =
        (data.autoplayCount || 0) +
        (data.promotedAdsCount || 0) +
        (data.engagementNotifCount || 0);

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

// Updates engagement notification count
function updateEngagementNotifCount(count) {
  console.log("Engagment notification count updated in background:", count);
  // Store the engagement notification count in local storage
  chrome.storage.local.set({ engagementNotifCount: count }, () => {
    // After updating the engagement notification count, update the badge
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

    case "updateEngagementNotif":
      updateEngagementNotifCount(message.count);
      chrome.storage.local.get(["engagementNotifCount"], (result) => {
        const storedEngagementNotifCount = result.engagementNotifCount || 0;
        console.log(
          "Retrieved engagement notification count in background:",
          storedEngagementNotifCount
        );
        sendResponse({ count: storedEngagementNotifCount });
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
  START_ENGAGEMENT_NOTIF: "startEngagementNotif",
  STOP_ENGAGEMENT_NOTIF: "stopEngagementNotif",
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
          url: ["*://*.x.com/*", "*://*.bsky.app/*"],
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

    // Check if engagement notification setting changed
    if (changes.engagementNotif) {
      const newEngagementNotifValue = changes.engagementNotif.newValue;
      console.log(
        "Engagement Notification setting changed:",
        newEngagementNotifValue
      );

      const engagementNotifMessageType = newEngagementNotifValue
        ? MESSAGE_TYPE.START_ENGAGEMENT_NOTIF
        : MESSAGE_TYPE.STOP_ENGAGEMENT_NOTIF;

      try {
        // Query relevant tabs (e.g.: X, Bluesky, Reddit)
        const tabs = await chrome.tabs.query({
          active: true,
          currentWindow: true,
          url: ["*://*.x.com/*", "*://*.bsky.app/*", "*://*.reddit.com/*"],
        });

        if (tabs.length > 0 && tabs[0].id !== undefined) {
          const response = await sendMessageToContent(tabs[0].id, {
            type: engagementNotifMessageType,
          });
          console.log(
            "Response from content script for engagement notifications:",
            response
          );
        } else {
          console.warn("No relevant tab found or tab ID is undefined.");
        }
      } catch (error) {
        console.error(
          "Failed to send engagement notification message to content script:",
          error
        );
      }
    }
  }
});

chrome.runtime.onMessage.addListener(handleMessage);
