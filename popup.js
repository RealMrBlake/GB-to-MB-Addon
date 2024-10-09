document.getElementById('convertBtn').addEventListener('click', function() {
    let gbValue = parseFloat(document.getElementById('gbInput').value);
    
    if (isNaN(gbValue)) {
      document.getElementById('result').textContent = "Please enter a valid number.";
      return;
    }
    
    let mbValue = gbValue * 1024;
    document.getElementById('result').textContent = `${gbValue} GB = ${mbValue} MB`;
  });
  
  // GitHub Button to link to a specific repository
  document.getElementById('githubBtn').addEventListener('click', function() {
    // Opens the GitHub link in a new tab
    browser.tabs.create({ url: "https://github.com/RealMrBlake/GB-to-MB-Addon" });
  });
  