import React from "react";
import ActionCard from "../common/ActionCard";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabResults from "./TabResults";

const tabs = [
  {
    id: "configureData",
    label: "Configure Data",
  },
  {
    id: "results",
    label: "Results",
  },
];
const CurlTabs = ({ curlData }) => {
  const [selectedTab, setSelectedTab] = React.useState("1");
  console.log("got curl data >>>", curlData);
  React.useEffect(() => {
    setSelectedTab("1");
  }, []);
  const handleChange = (event, selection) => {
    setSelectedTab(selection);
  };

  return (
    <div className="parsed-output form-container">
      <TabContext value={selectedTab}>
        <TabList onChange={handleChange} aria-label="parser tab list">
          {tabs.map((tab) => (
            <Tab label={tab.label} value={tab.id} />
          ))}
        </TabList>
        <TabPanel value="configureData"></TabPanel>
        <TabPanel value="results">
          <TabResults curlData={curlData}></TabResults>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default CurlTabs;
