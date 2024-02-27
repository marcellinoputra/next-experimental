'use client';

import { Datum } from '@/dao/anime';
import {
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  Divider,
  Drawer,
  Box,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AnimeList() {
  const [dataAnime, setDataAnime] = useState<Datum[]>([]);
  // const [detailData, setDetailData] = useState<Datum[]>([]);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [detailId, setDetailId] = useState(0);

  function openDetail(id: number, detail: Datum[]) {
    setDetailId(id);

    setIsOpenDetail(true);
  }

  function closeDetail() {
    setIsOpenDetail(false);
  }

  async function getDataAnime() {
    setDataAnime([]);

    await axios
      .get('https://kitsu.io/api/edge/anime')
      .then((result) => {
        if (result.status === 200) {
          setDataAnime(result.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // async function getDetailAnime(id: Number) {
  //   setDetailData([]);

  //   await axios
  //     .get(`https://kitsu.io/api/edge/anime/${id}`)
  //     .then((result) => {
  //       if (result.status === 200) {
  //         setDetailData(result.data.data);
  //         openDetail();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  let dataDetail = dataAnime.find((obj) => Number(obj.id) === Number(detailId));

  useEffect(() => {
    getDataAnime();
  }, []);

  return (
    <>
      <Typography>ANIME DATABASE</Typography>
      <Divider />
      <TableContainer component={Paper}>
        <Table
          aria-label="simple table"
          style={{
            minWidth: 650,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Title EN</TableCell>
              <TableCell align="left">Title JP</TableCell>
              <TableCell align="left">Rating</TableCell>
              <TableCell align="left">Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataAnime.map((data) => (
              <TableRow
                key={data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="data">
                  {data.attributes.titles.en_jp}
                </TableCell>
                <TableCell align="left">
                  {data.attributes.titles.ja_jp}
                </TableCell>
                <TableCell align="left">
                  {data.attributes.ageRatingGuide}
                </TableCell>
                <TableCell align="left">
                  <Button
                    sx={{
                      height: 45,
                      backgroundColor: 'blue',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'transparent',
                      borderRadius: 20,
                      marginTop: 2,
                      '&:hover': {
                        backgroundColor: 'darkblue',
                      },
                    }}
                    onClick={() => {
                      console.log(dataDetail);
                      setDetailId(Number(data.id));
                      setIsOpenDetail(true);
                    }}
                  >
                    Detail
                  </Button>
                  <Drawer
                    anchor="right"
                    open={isOpenDetail}
                    onClose={closeDetail}
                    PaperProps={{
                      sx: { backgroundColor: 'white', boxShadow: 'none' },
                    }}
                    BackdropProps={{
                      invisible: true,
                    }}
                  >
                    <Box sx={{ width: 'auto', margin: 10 }}>
                      <Typography>
                        Detail for ID:{' '}
                        <Box component="span" fontWeight="bold">
                          {detailId}
                        </Box>
                      </Typography>
                      {/* <Typography>Title: {data.attributes['titles']}</Typography> */}
                      <Divider />
                      <Typography>
                        Title:{' '}
                        <Box component="span" fontWeight="bold">
                          {dataDetail?.attributes.titles.en}
                        </Box>
                      </Typography>

                      <Divider />
                      <Typography>
                        Title Japan:{' '}
                        <Box component="span" fontWeight="bold">
                          {dataDetail?.attributes.titles.ja_jp}
                        </Box>
                      </Typography>
                      <Divider />
                      <Typography>
                        Description:{' '}
                        <Box component="span" fontWeight="bold">
                          {dataDetail?.attributes.description}
                        </Box>
                      </Typography>
                      <Typography>
                        Start Date:{' '}
                        <Box component="span" fontWeight="bold">
                          {dataDetail?.attributes.startDate}
                        </Box>
                      </Typography>
                      <Typography>
                        End Date:{' '}
                        <Box component="span" fontWeight="bold">
                          {dataDetail?.attributes.endDate}
                        </Box>
                      </Typography>
                    </Box>
                  </Drawer>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
