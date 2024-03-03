'use client';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';

import {
  SalesApril,
  SalesFebruary,
  SalesJanuary,
  SalesMarch,
  SalesMay,
} from './SalesChart';
import { useState } from 'react';

export default function SalesComponent() {
  const [selectedTab, setSelectedTab] = useState('1');

  function handleChangeTabs(event: React.SyntheticEvent, newTabs: string) {
    setSelectedTab(newTabs);
  }

  return (
    <>
      <Box>
        <Typography fontWeight="bold" sx={{ textAlign: 'center' }}>
          Sales Database
        </Typography>
        <TabContext value={selectedTab}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabList
              aria-label="Tabs Sales"
              onChange={handleChangeTabs}
              textColor="primary"
              indicatorColor="secondary"
            >
              <Tab label="January" value="1" />
              <Tab label="February" value="2" />
              <Tab label="March" value="3" />
              <Tab label="April" value="4" />
              <Tab label="May" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SalesJanuary />
          </TabPanel>
          <TabPanel value="2">
            <SalesFebruary />
          </TabPanel>
          <TabPanel value="3">
            <SalesMarch />
          </TabPanel>
          <TabPanel value="4">
            <SalesApril />
          </TabPanel>
          <TabPanel value="5">
            <SalesMay />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
