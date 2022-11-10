import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import React, { useState } from "react";
import GeneralForm from "./GeneralForm";
import { PersonGeneralData } from "../../../../../types/main";
import Addresses from "./AddressesForm";
import GraphTree from "./GraphTree";

const PersonFromTabs = () => {
  const [value, setValue] = useState<number>(1);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [personGeneralData, setPersonGeneralData] =
    useState<PersonGeneralData>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value.toString()}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <TabList
            onChange={handleChange}
            sx={{ "&>div>div": { justifyContent: "space-around" } }}
          >
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="General"
              value="1"
            />
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="Relations"
              value="2"
            />
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="Addresses"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GeneralForm
            data={personGeneralData}
            setData={setPersonGeneralData}
          />
        </TabPanel>
        <TabPanel value="2">{/* <GraphTree /> */}</TabPanel>
        <TabPanel value="3">
          <Addresses data={addresses} setData={setAddresses} />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default PersonFromTabs;
