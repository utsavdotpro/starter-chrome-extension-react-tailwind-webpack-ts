/// <reference types="chrome"/>

chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome Extension installed");
});

// Message listener example
chrome.runtime.onMessage.addListener(
  (
    message: any,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void
  ) => {
    console.log("Received message:", message);

    // Example of responding to a specific message type
    if (message.type === "EXAMPLE_ACTION") {
      sendResponse({ success: true, message: "Action received" });
    } else {
      sendResponse({ success: false, message: "Unknown action" });
    }

    return true; // Required for async response
  }
);
