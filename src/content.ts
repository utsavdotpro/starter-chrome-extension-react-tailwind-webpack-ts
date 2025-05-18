/// <reference types="chrome"/>

console.log("Chrome extension content script loaded");

// Example of sending a message to the background script
chrome.runtime.sendMessage(
  { type: "CONTENT_LOADED", url: window.location.href },
  (response) => {
    console.log("Response from background:", response);
  }
);
