const copyPageContent = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const body = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => document.body.innerText,
  });
  await navigator.clipboard.writeText(body[0].result);
};

document.getElementById("copyBtn").addEventListener("click", copyPageContent);
