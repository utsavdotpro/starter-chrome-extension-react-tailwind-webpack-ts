/// <reference types="chrome"/>

import "./global.css";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Chrome Extension popup initialized");

  // Example: Update repo link with your actual username
  const repoLink = document.querySelector(
    'a[href*="github.com"]'
  ) as HTMLAnchorElement;
  if (repoLink) {
    // You can update this dynamically if needed
    // repoLink.href = "https://github.com/your-actual-username/starter-chrome-extension-tailwind-webpack-ts";
  }

  // Example of accessing Chrome APIs
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    console.log("Current tab:", currentTab.url);
  });
});
