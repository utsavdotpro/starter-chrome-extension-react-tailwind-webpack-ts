import React from "react";

export const ContentApp: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">Chrome Extension</h2>
      <p className="text-sm text-gray-600">
        This component is injected by the content script
      </p>
    </div>
  );
};
