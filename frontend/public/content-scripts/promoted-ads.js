const adText = "Ad";
let alertedAds = [];
//this is for future work
let tweetCounter = 0;
let adDetectionStarted = false;
const visibleTweets = new Set();
const allVisibleTweets = new Set();

const tweetVisibilityTracker = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const tweet = entry.target;

      if (entry.isIntersecting) {
        visibleTweets.add(tweet);
        allVisibleTweets.add(tweet);
      } else {
        visibleTweets.delete(tweet);
      }

      if (adDetectionStarted) {
        tweetCounter = allVisibleTweets.size;
        console.log("Total visible tweets (ever visible): ", tweetCounter);
      }
    });
  },
  { threshold: 0.5 }
);
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

function addAdOverlay(article) {
  const contentWrapper = document.createElement("div");
  while (article.firstChild) {
    contentWrapper.appendChild(article.firstChild);
  }
  contentWrapper.style.filter = "blur(5px)";
  contentWrapper.style.position = "relative";
  article.appendChild(contentWrapper);
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";
  const icon = document.createElement("img");
  icon.src = "https://i.postimg.cc/dtYtfDGx/ads-action.png";

  icon.style.width = "80px";
  icon.style.height = "80px";
  icon.alt = "Promoted Ads";
  icon.style.zIndex = "9999";
  overlay.appendChild(icon);
  article.appendChild(overlay);

  //span overlay
  const text = document.createElement("span");
  text.textContent = "Promoted Ads Detected";
  text.style.marginTop = "10px";
  text.style.fontSize = "16px";
  text.style.fontWeight = "bold";
  text.style.color = "#c38ee8";

  overlay.appendChild(text);

  article.appendChild(overlay);
  //hover effect
  article.addEventListener("mouseenter", () => {
    contentWrapper.style.filter = "none";
    overlay.style.display = "none";
  });

  article.addEventListener("mouseleave", () => {
    contentWrapper.style.filter = "blur(5px)";
    overlay.style.display = "flex";
  });
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
        addAdOverlay(article);

        const articleLinks = article.querySelectorAll("a");
        articleLinks.forEach((link) => {
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
      if (!adDetectionStarted) {
        adDetectionStarted = true;
        tweetCounter = 0;
      }

      // Call the updateStorageAndNotify function
      updateStorageAndNotify(
        "promotedAdsCount",
        "promotedAdsCount",
        "updatePromotedAds"
      );
    }
    const article = span.closest("article");
    if (article && !article.hasAttribute("data-observed")) {
      article.setAttribute("data-observed", true);
      tweetVisibilityTracker.observe(article);
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
