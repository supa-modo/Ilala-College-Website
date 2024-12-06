import React from "react";

export const TabsNavigation = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className="relative">
      <div className="flex justify-between mb-4 md:max-w-2xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`
              relative px-6 py-2 mx-2 rounded-md font-semibold text-lg transition-all duration-300 
              ${
                selectedTab === tab
                  ? "text-red-600"
                  : "text-gray-600 hover:text-gray-800"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Thick Gray Line with Red Underline */}
      <div className="absolute bottom-0 left-0 right-0 h-1 md:max-w-2xl mx-auto bg-gray-300">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{
            width: `${100 / tabs.length}%`,
            transform: `translateX(${tabs.indexOf(selectedTab) * 100}%)`,
          }}
        />
      </div>
    </div>
  );
};
