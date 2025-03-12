let infiniteScrollEnabled = false;
let infiniteScrollCheckInterval = null; // Timer for periodic checks
const SCROLL_THRESHOLD = 200; // Distance (in px) from the bottom to trigger the event

console.log("[Content Script] Loaded infinite-scroll.js");

// updateStorageAndNotify function for updating the scroll count
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

/**
 * Start monitoring for infinite scroll events.
 */
function startInfiniteScrollFeature() {
    if (infiniteScrollEnabled) {
        console.log("[Content Script] Infinite scroll is already enabled.");
        return;
    }

    infiniteScrollEnabled = true;
    console.log("[Content Script] Infinite scroll enabled.");

    // Periodically check if the user has scrolled near the bottom of the page
    infiniteScrollCheckInterval = setInterval(() => {
        checkForInfiniteScroll();
    }, 200); // Check every 200ms
}

/**
 * Stop monitoring for infinite scroll events.
 */
function stopInfiniteScrollFeature() {
    if (!infiniteScrollEnabled) {
        console.log("[Content Script] Infinite scroll is already disabled.");
        return;
    }

    infiniteScrollEnabled = false;
    console.log("[Content Script] Infinite scroll disabled.");

    // Stop the periodic checks
    clearInterval(infiniteScrollCheckInterval);
    infiniteScrollCheckInterval = null;
}

/**
 * Check if the user has scrolled near the bottom of the page.
 */
function checkForInfiniteScroll() {
    const scrollPosition = window.scrollY + window.innerHeight; // Current visible bottom position
    const pageHeight = document.body.scrollHeight; // Total height of the page

    // Debugging logs
    console.log(
        "[Content Script] Scroll Position:",
        scrollPosition,
        "Page Height:",
        pageHeight
    );

    // Trigger event if the user is within the threshold from the bottom
    if (pageHeight - scrollPosition <= SCROLL_THRESHOLD) {
        console.log("[Content Script] Detected user near the bottom of the page.");
        notifyBackendOfInfiniteScrollEvent();

        // Notify the background script to update the count
        updateStorageAndNotify(
            "infiniteScrollCount",
            "infiniteScrollCount",
            "updateInfiniteScroll"
        );
    }
}

/**
 * Notify the backend script of an infinite scroll event.
 */
function notifyBackendOfInfiniteScrollEvent() {
    console.log(
        "[Content Script] Notifying backend about infinite scroll event."
    );

    chrome.runtime.sendMessage(
        { type: "infiniteScrollEvent", timestamp: Date.now() },
        (response) => {
            if (chrome.runtime.lastError) {
                console.log(
                    "[Content Script] Error sending message to backend:",
                    chrome.runtime.lastError.message
                );
            } else {
                console.log("[Content Script] Response from backend:", response);
            }
        }
    );
}

/**
 * Intercept AJAX requests to detect new content loading
 */
(function (open) {
    XMLHttpRequest.prototype.open = function () {
        if (infiniteScrollEnabled) {
            console.log("[Content Script] Intercepted AJAX request:", arguments);
            open.apply(this, arguments);
        }
    };
})(XMLHttpRequest.prototype.open);

/**
 * Intercept Fetch requests to detect new content loading
 */
(function (fetch) {
    window.fetch = function () {
        if (infiniteScrollEnabled) {
            console.log("[Content Script] Intercepted Fetch request:", arguments);
        }
        return fetch.apply(this, arguments);
    };
})(window.fetch);

/**
 * Message listener to enable/disable infinite scroll dynamically.
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "startInfiniteScroll") {
        console.log("[Content Script] Received startInfiniteScroll command.");
        startInfiniteScrollFeature();
        sendResponse({ status: "[here:content.js] Infinite scroll started." });
    } else if (message.type === "stopInfiniteScroll") {
        console.log("[Content Script] Received stopInfiniteScroll command.");
        stopInfiniteScrollFeature();
        sendResponse({ status: "Infinite scroll stopped." });
    } else {
        console.warn(
            "[Content Script] Unknown message type received:",
            message.type
        );
        sendResponse({ status: "Unknown command." });
    }

    // Ensure async responses work
    return true;
});
