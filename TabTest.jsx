import React, { lazy } from "react";
import MyTabs from "./MyTabs";

const TabTest = () => {
  const tabs = [
    {
      label: "tab 1",
      content: <p>This is Content of Tab 1</p>,
    },
    {
      label: "tab 2",
      content: <p>Tab 2 Content is here</p>,
    },
    {
      label: "tab 3",
      content: <p>Random Text of Tab 3</p>,
    },
  ];

  return (
    <div>
      <MyTabs tabContent={tabs} />
    </div>
  );
};

export default TabTest;
