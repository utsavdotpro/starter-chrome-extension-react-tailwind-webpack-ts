import React, { useEffect, useState } from "react";

export const Popup: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    console.log("Chrome Extension popup initialized");

    // Example of accessing Chrome APIs
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      setCurrentUrl(currentTab.url || "");
      console.log("Current tab:", currentTab.url);
    });
  }, []);

  return (
    <div className="p-4 bg-white max-w-sm">
      <h1 className="text-xl font-bold mb-4">Chrome Extension</h1>
      <p className="mb-2">
        Current URL: <span className="font-mono">{currentUrl}</span>
      </p>
      <a
        href="https://github.com/utsavdotpro/starter-chrome-extension-react-tailwind-webpack-ts"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
};
