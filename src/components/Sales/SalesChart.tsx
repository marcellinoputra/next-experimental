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
import React, { useEffect, useState } from 'react';
import { Divider, Typography } from '@mui/material';

Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function SalesJanuary() {
  const dataDummy = SalesData.data;

  const dataSales2020 = dataDummy.find(
    (obj) => obj.month === 'January' && obj.year === 2020
  );
  const dataSales2021 = dataDummy.find(
    (obj) => obj.month === 'January' && obj.year === 2021
  );

  return (
    <>
      <Bar
        data={{
          labels: [dataSales2020?.year, dataSales2021?.year],
          datasets: [
            {
              label: 'Jakarta',
              backgroundColor: 'orange',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.jakarta, dataSales2021?.jakarta],
              // data: [
              //   Number(dataSales2020?.jakarta) - Number(dataSales2021?.jakarta),
              // ],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.depok, dataSales2021?.depok],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bali, dataSales2021?.bali],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.padang, dataSales2021?.padang],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bandung, dataSales2021?.bandung],
            },
          ],
        }}
      />
      <Divider
        sx={{
          marginTop: 10,
        }}
      />
      <Typography sx={{ textAlign: 'center' }} fontWeight="bold">
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
                Number(dataSales2021?.jakarta) - Number(dataSales2020?.jakarta),
              ],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.depok) - Number(dataSales2020?.depok),
              ],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 1,
              data: [Number(dataSales2021?.bali) - Number(dataSales2020?.bali)],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.padang) - Number(dataSales2020?.padang),
              ],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.bandung) - Number(dataSales2020?.bandung),
              ],
            },
          ],
        }}
      />
    </>
  );
}

export function SalesFebruary() {
  const dataDummy = SalesData.data;

  const dataSales2020 = dataDummy.find(
    (obj) => obj.month === 'February' && obj.year === 2020
  );
  const dataSales2021 = dataDummy.find(
    (obj) => obj.month === 'February' && obj.year === 2021
  );

  return (
    <>
      <Bar
        data={{
          labels: [dataSales2020?.year, dataSales2021?.year],
          datasets: [
            {
              label: 'Jakarta',
              backgroundColor: 'orange',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.jakarta, dataSales2021?.jakarta],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.depok, dataSales2021?.depok],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bali, dataSales2021?.bali],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.padang, dataSales2021?.padang],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bandung, dataSales2021?.bandung],
            },
          ],
        }}
      />
      <Divider
        sx={{
          marginTop: 10,
        }}
      />
      <Typography sx={{ textAlign: 'center' }} fontWeight="bold">
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
                Number(dataSales2021?.jakarta) - Number(dataSales2020?.jakarta),
              ],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.depok) - Number(dataSales2020?.depok),
              ],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 1,
              data: [Number(dataSales2021?.bali) - Number(dataSales2020?.bali)],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.padang) - Number(dataSales2020?.padang),
              ],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.bandung) - Number(dataSales2020?.bandung),
              ],
            },
          ],
        }}
      />
    </>
  );
}

export function SalesMarch() {
  const dataDummy = SalesData.data;

  const dataSales2020 = dataDummy.find(
    (obj) => obj.month === 'March' && obj.year === 2020
  );
  const dataSales2021 = dataDummy.find(
    (obj) => obj.month === 'March' && obj.year === 2021
  );

  return (
    <>
      <Bar
        data={{
          labels: [dataSales2020?.year, dataSales2021?.year],
          datasets: [
            {
              label: 'Jakarta',
              backgroundColor: 'orange',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.jakarta, dataSales2021?.jakarta],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.depok, dataSales2021?.depok],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bali, dataSales2021?.bali],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.padang, dataSales2021?.padang],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bandung, dataSales2021?.bandung],
            },
          ],
        }}
      />
      <Divider
        sx={{
          marginTop: 10,
        }}
      />
      <Typography sx={{ textAlign: 'center' }} fontWeight="bold">
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
                Number(dataSales2021?.jakarta) - Number(dataSales2020?.jakarta),
              ],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.depok) - Number(dataSales2020?.depok),
              ],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 1,
              data: [Number(dataSales2021?.bali) - Number(dataSales2020?.bali)],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.padang) - Number(dataSales2020?.padang),
              ],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.bandung) - Number(dataSales2020?.bandung),
              ],
            },
          ],
        }}
      />
    </>
  );
}

export function SalesApril() {
  const dataDummy = SalesData.data;

  const dataSales2020 = dataDummy.find(
    (obj) => obj.month === 'April' && obj.year === 2020
  );
  const dataSales2021 = dataDummy.find(
    (obj) => obj.month === 'April' && obj.year === 2021
  );

  return (
    <>
      <Bar
        data={{
          labels: [dataSales2020?.year, dataSales2021?.year],
          datasets: [
            {
              label: 'Jakarta',
              backgroundColor: 'orange',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.jakarta, dataSales2021?.jakarta],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.depok, dataSales2021?.depok],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bali, dataSales2021?.bali],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.padang, dataSales2021?.padang],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bandung, dataSales2021?.bandung],
            },
          ],
        }}
      />
      <Divider
        sx={{
          marginTop: 10,
        }}
      />
      <Typography sx={{ textAlign: 'center' }} fontWeight="bold">
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
                Number(dataSales2021?.jakarta) - Number(dataSales2020?.jakarta),
              ],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.depok) - Number(dataSales2020?.depok),
              ],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 1,
              data: [Number(dataSales2021?.bali) - Number(dataSales2020?.bali)],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.padang) - Number(dataSales2020?.padang),
              ],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.bandung) - Number(dataSales2020?.bandung),
              ],
            },
          ],
        }}
      />
    </>
  );
}

export function SalesMay() {
  const dataDummy = SalesData.data;

  const dataSales2020 = dataDummy.find(
    (obj) => obj.month === 'May' && obj.year === 2020
  );
  const dataSales2021 = dataDummy.find(
    (obj) => obj.month === 'May' && obj.year === 2021
  );

  return (
    <>
      <Bar
        data={{
          labels: [dataSales2020?.year, dataSales2021?.year],
          datasets: [
            {
              label: 'Jakarta',
              backgroundColor: 'orange',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.jakarta, dataSales2021?.jakarta],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.depok, dataSales2021?.depok],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bali, dataSales2021?.bali],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.padang, dataSales2021?.padang],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
              data: [dataSales2020?.bandung, dataSales2021?.bandung],
            },
          ],
        }}
      />
      <Divider
        sx={{
          marginTop: 10,
        }}
      />
      <Typography sx={{ textAlign: 'center' }} fontWeight="bold">
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
                Number(dataSales2021?.jakarta) - Number(dataSales2020?.jakarta),
              ],
            },
            {
              label: 'Depok',
              backgroundColor: 'yellow',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.depok) - Number(dataSales2020?.depok),
              ],
            },
            {
              label: `Bali`,
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 1,
              data: [Number(dataSales2021?.bali) - Number(dataSales2020?.bali)],
            },
            {
              label: 'Padang',
              backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.padang) - Number(dataSales2020?.padang),
              ],
            },
            {
              label: 'Bandung',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
              data: [
                Number(dataSales2021?.bandung) - Number(dataSales2020?.bandung),
              ],
            },
          ],
        }}
      />
    </>
  );
}
