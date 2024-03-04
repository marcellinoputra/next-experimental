'use client';

import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import SalesData from '@/dummy/sales.json';
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { months } from '@/utils/randomDate';
import { LocationModels } from '@/models/location';

Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function SalesChart() {
  const [location, setLocation] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);

  const dataDummy = SalesData.data;
  const dataCabang = SalesData.cabang;

  function handleChangeLocation(e: SelectChangeEvent) {
    setLocation(e.target.value as string);
  }

  function handleChangeMonth(e: SelectChangeEvent) {
    setMonth(e.target.value as string);
  }

  function handleChangeYear(e: SelectChangeEvent) {
    setYear(Number(e.target.value));
  }

  const dataSales2022 = dataDummy.find(
    (obj) => obj.month === String(month) && obj.year === Number(year)
  );
  const dataSales2023 = dataDummy.find(
    (obj) => obj.month === 'January' && obj.year === 2023
  );

  const label = dataCabang.find((obj) => obj);

  return (
    <>
      <button
        onClick={() => {
          console.log(location);
        }}
      >
        Check Data
      </button>

      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant="h5">Sales</Typography>
          <Typography
            sx={{
              color: 'black',
            }}
          >
            Comparison Sales Between January 2022 and January 2023
          </Typography>
          <Box
            sx={{
              width: 100,
              float: 'right',
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                label="Location"
                onChange={handleChangeLocation}
              >
                {LocationModels.map((data) => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          {/* <Box
            sx={{
              width: 100,
              float: 'right',
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Number(year)}
                label="Year"
                onChange={handleChangeLocation}
              >
                {LocationModels.map((data) => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box> */}
          <Box
            sx={{
              width: 100,
              float: 'right',
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                label="Month"
                onChange={handleChangeLocation}
              >
                {LocationModels.map((data) => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Bar
            data={{
              labels: months({ count: 5 }),
              datasets: [
                {
                  label: label?.cabang_1 + ' ' + '2022',
                  backgroundColor: 'orange',
                  borderColor: 'black',
                  borderWidth: 2,
                  data: [dataSales2022?.jakarta],
                },
                {
                  label: label?.cabang_1 + ' ' + '2023',
                  backgroundColor: 'yellow',
                  borderColor: 'black',
                  borderWidth: 2,
                  data: [dataSales2023?.jakarta],
                },
                {
                  label: label?.cabang_2,
                  backgroundColor: 'red',
                  borderColor: 'black',
                  borderWidth: 2,
                  data: [dataSales2022?.depok],
                },
                {
                  label: label?.cabang_2,
                  backgroundColor: 'white',
                  borderColor: 'black',
                  borderWidth: 2,
                  data: [dataSales2023?.depok],
                },
                // {
                //   label: label?.cabang_3,
                //   backgroundColor: 'blue',
                //   borderColor: 'black',
                //   borderWidth: 2,
                //   data: [dataSales2022?.bali, dataSales2023?.bali],
                // },
              ],
            }}
          />
        </CardContent>
      </Card>
      <Divider
        sx={{
          marginTop: 10,
        }}
      />
      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography
            sx={{
              color: 'black',
              textAlign: 'center',
            }}
            variant="h5"
          >
            Accumulation
          </Typography>
          <Bar
            data={{
              labels: ['Accumulation'],
              datasets: [
                {
                  label: 'Jakarta',
                  backgroundColor: 'orange',
                  borderColor: 'black',
                  borderWidth: 1,
                  data: [
                    Number(dataSales2023?.jakarta) -
                      Number(dataSales2022?.jakarta),
                  ],
                },
                {
                  label: 'Depok',
                  backgroundColor: 'yellow',
                  borderColor: 'black',
                  borderWidth: 1,
                  data: [
                    Number(dataSales2023?.depok) - Number(dataSales2022?.depok),
                  ],
                },
                {
                  label: `Bali`,
                  backgroundColor: 'blue',
                  borderColor: 'black',
                  borderWidth: 1,
                  data: [
                    Number(dataSales2023?.bali) - Number(dataSales2022?.bali),
                  ],
                },
                {
                  label: 'Padang',
                  backgroundColor: 'red',
                  borderColor: 'black',
                  borderWidth: 1,
                  data: [
                    Number(dataSales2023?.padang) -
                      Number(dataSales2022?.padang),
                  ],
                },
                {
                  label: 'Bandung',
                  backgroundColor: 'white',
                  borderColor: 'black',
                  borderWidth: 1,
                  data: [
                    Number(dataSales2023?.bandung) -
                      Number(dataSales2022?.bandung),
                  ],
                },
              ],
            }}
          />
        </CardContent>
      </Card>
    </>
  );
}
