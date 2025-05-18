import React from "react";
import { createRoot } from "react-dom/client";
import "../global.css";
import { ContentApp } from "./ContentApp";

console.log("Chrome extension content script loaded");

// Example of sending a message to the background script
chrome.runtime.sendMessage(
  { type: "CONTENT_LOADED", url: window.location.href },
  (response) => {
    console.log("Response from background:", response);
  }
);

// Example of injecting a React component into the page
// Note: You would typically only want to do this for certain pages
const mountContentApp = () => {
  const container = document.createElement("div");
  container.id = "chrome-extension-content-root";
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ContentApp />
    </React.StrictMode>
  );
};

// Uncomment to inject React component into page
// mountContentApp();
