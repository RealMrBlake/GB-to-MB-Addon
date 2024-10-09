// Create a context menu item
browser.contextMenus.create({
    id: "convert-gb-mb",
    title: "Convert GB to MB",
    contexts: ["selection"]
  });
  
  // Listener for when the context menu is clicked
  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "convert-gb-mb") {
      let selectedText = info.selectionText;
      
      // Parse the selected text and extract the number
      let regex = /(\d+(?:\.\d+)?)\s*(GB|gb)/i;
      let match = regex.exec(selectedText);
      
      if (match) {
        let gbValue = parseFloat(match[1]);
        let mbValue = gbValue * 1024; // 1 GB = 1024 MB
  
        // Send the result to the content script
        browser.tabs.sendMessage(tab.id, { mbValue: mbValue.toFixed(2) });
      } else {
        alert("Please select a valid GB value.");
      }
    }
  });
  