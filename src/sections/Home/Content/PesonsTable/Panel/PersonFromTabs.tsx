import { Box, styled, Tab, useTheme } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import React, { useState } from "react";
import GeneralForm from "./GeneralForm";
import { PersonGeneralData } from "../../../../../types/main";
import Addresses from "./AddressesForm";
import GraphTree from "./GraphTree";

interface ITabInterface {
  active: boolean;
}

const TabStyled = styled(Tab)<ITabInterface>(({ theme, active }) => ({
  color: active
    ? `${theme.palette.warning.light}!important`
    : `${theme.palette.grey[100]}!important`,
  textTransform: "capitalize",
}));

const PersonFromTabs = () => {
  const theme = useTheme();
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
            sx={{
              "&>div>div": {
                justifyContent: "space-around",
                border: "1px solid black",
                backgroundColor: theme.palette.grey[900],
              },
            }}
            TabIndicatorProps={{
              style: { background: theme.palette.warning.main },
            }}
            variant="fullWidth"
          >
            <TabStyled
              active={value.toString() === "1"}
              label="General"
              value="1"
            />
            <TabStyled
              active={value.toString() === "2"}
              label="Relations"
              value="2"
            />
            <TabStyled
              active={value.toString() === "3"}
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
        <TabPanel value="2">
          <GraphTree />
        </TabPanel>
        <TabPanel value="3">
          <Addresses data={addresses} setData={setAddresses} />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default PersonFromTabs;
