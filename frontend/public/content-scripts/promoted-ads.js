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
  adSpan.style.borderLeft = "16px dashed #bd60ff";

  adSpan.style.backgroundColor = "#fff4e0";

  adSpan.style.paddingLeft = "8px";
}

// Function to check for ads
function checkForAds() {
  const spans = document.querySelectorAll("span");

  spans.forEach((span) => {
    if (span.textContent.trim() === adText && !alertedAds.includes(span)) {
      alertedAds.push(span);
      // alert("Promoted ads detected!");
      console.log("Promoted ad detected:", span);

      highlightAd(span);

      const article = span.closest("article");
      if (article) {
        const tweetTextDiv = article.querySelector('[data-testid="tweetText"]');

        // Apply the blur effect to the tweetTextDiv
        if (tweetTextDiv) {
          tweetTextDiv.style.filter = "blur(5px)";
          tweetTextDiv.addEventListener("mouseenter", () => {
            tweetTextDiv.style.filter = "none";
          });

          tweetTextDiv.addEventListener("mouseleave", () => {
            tweetTextDiv.style.filter = "blur(5px)";
          });
        }

        // const videoDiv = document.querySelector('[data-testid="videoPlayer"]');
        // if (videoDiv) {
        //   videoDiv.style.filter = "blur(5px)";
        // }

        const articleLinks = article.querySelectorAll("a");

        articleLinks.forEach((link) => {
          link.style.setProperty("filter", "blur(5px)", "important");
          link.addEventListener("mouseenter", () => {
            link.style.setProperty("filter", "none", "important");
          });

          link.addEventListener("mouseleave", () => {
            link.style.setProperty("filter", "blur(5px)", "important");
          });

          if (
            link.hasAttribute("target") &&
            link.getAttribute("target") === "_blank"
          ) {
            link.addEventListener("click", (event) => {
              event.preventDefault();

              const userChoice = confirm(
                "This will redirect you to a third-party website. Do you want to proceed?"
              );
              if (userChoice) {
                window.open(link.href, "_blank");
              }
            });
          }
        });
      }

      // Call the updateStorageAndNotify function
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
