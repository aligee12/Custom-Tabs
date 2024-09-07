import React, { useState } from "react";

const Tabs = ({ tabContent }) => {
  const [currentTab, setCurrentTab] = useState(0);
  function handleOnClick(index) {
    setCurrentTab(index);
    console.log(index);
  }
  return (
    <div className=" wrap mt-4 flex flex-col justify-start items-center gap-4 w-screen">
      <div className="heading cursor-pointer flex flex-row gap-4">
        {tabContent.map((tabItem, index) => (
          <div
            className={` px-4 py-2 text-white hover:bg-green-700 ${
              currentTab === index ? "bg-green-500" : "bg-purple-500"
            }`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content text-orange-600 text-2xl">
        {tabContent[currentTab] && tabContent[currentTab].content}
      </div>
    </div>
  );
};

export default Tabs;
