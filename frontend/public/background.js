chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: () => {
            alert(getSelection().toString());
        }
    });
    chrome.runtime.sendMessage({message: "Click event finished"})
        .then((response) => {
            console.info("Background received response", response)
        })
        .catch((error) => {
            console.warn("Background could not send message", error)
        })
});