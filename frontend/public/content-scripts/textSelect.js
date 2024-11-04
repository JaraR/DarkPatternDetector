let selectionText = "";

document.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString().trim();
  if (selection.length > 0) {
    selectionText = selection;

    const button = document.createElement("button");
    button.textContent = "Analyze";
    button.style.position = "absolute";
    button.style.left = `${event.pageX}px`;
    button.style.top = `${event.pageY}px`;
    button.style.zIndex = 1000;
    button.onclick = () => {
      // Send selected text to background script
      chrome.runtime.sendMessage({ action: "saveText", text: selectionText });
      document.body.removeChild(button);
    };

    document.body.appendChild(button);
  }
});
