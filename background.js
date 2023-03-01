chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body.innerText,
    }).then((body) => {
      navigator.clipboard.writeText(body[0].result);
    });
  });
  