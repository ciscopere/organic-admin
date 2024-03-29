import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AvailableProducts from "../Products/AvaliableProducts";
import SpecialProducts from "../Products/SpecialProducts";


export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "105%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="FRUTAS Y VERDURAS" value="1" />
            <Tab label="PRODUCTOS ESPECIALES" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AvailableProducts />
        </TabPanel>
        <TabPanel value="2">
          <SpecialProducts />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
