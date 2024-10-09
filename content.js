// Listen for messages from the background script
browser.runtime.onMessage.addListener((message) => {
    if (message.mbValue) {
      // Replace the selected text with the converted value
      let selection = window.getSelection().toString();
      let newText = selection.replace(/(\d+(?:\.\d+)?)\s*(GB|gb)/i, message.mbValue + " MB");
      
      // Copy the new text to the clipboard
      navigator.clipboard.writeText(newText).then(() => {
        alert(`Converted: ${newText}`);
      });
    }
  });
  