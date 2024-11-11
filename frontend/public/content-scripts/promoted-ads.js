const adText = "Ad";
let alertedAds = [];

function updateStorageAndNotify(type, storageKey, messageType) {
  chrome.storage.local.get([storageKey], function (result) {
    let currentCount = result[storageKey] || 0;
    currentCount += 1;

    chrome.storage.local.set({ [storageKey]: currentCount });

    // Notify the background script to update the count
    chrome.runtime.sendMessage({
      type: messageType,
      count: currentCount,
    });
  });
}

// Function to highlight the ad feed
function highlightAd(adSpan) {
  adSpan.style.borderLeft = "6px dashed #c38ee8";
  adSpan.style.backgroundColor = "#fff4e0";
  adSpan.style.paddingLeft = "4px";
}

// Function to check for ads
function checkForAds() {
  const spans = document.querySelectorAll("span");
  spans.forEach((span) => {
    if (span.textContent.trim() === adText && !alertedAds.includes(span)) {
      alertedAds.push(span);
      alert("Promoted ads detected!");
      console.log("Promoted ad detected:", span);

      highlightAd(span);

      updateStorageAndNotify(
        "promotedAdsCount",
        "promotedAdsCount",
        "updatePromotedAds"
      );
    }
  });
}

function startPromotedAdsDetection() {
  observer = new MutationObserver(() => {
    checkForAds();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log("Promoted ads detection started");
}

function stopPromotedAdsDetection() {
  if (observer) {
    observer.disconnect();
    observer = null;

    alertedAds = [];
    console.log("promoted ads detection stopped");
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startPromotedAds") {
    console.log("Starting promoted ads detection in content script");

    startPromotedAdsDetection();
    sendResponse({ status: "Promoted ads detection started" });
  } else if (message.type === "stopPromotedAds") {
    console.log("Stopping promoted ads detection in content script");
    stopPromotedAdsDetection();
    sendResponse({ status: "promoted ads stopped" });
  }
});
