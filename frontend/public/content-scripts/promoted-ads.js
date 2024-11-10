function detectPromotedAds() {
  const adText = "Ad";
  let alertedAds = [];

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
      }
    });
  }

  // MutationObserver to detect newly added elements
  const observer = new MutationObserver(() => {
    checkForAds();
  });

  // Start observing the body for any added child elements
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log("Promoted ads detection started");
}

detectPromotedAds();
