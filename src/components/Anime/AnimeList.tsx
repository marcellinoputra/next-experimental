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
  Skeleton,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AnimeList() {
  const [dataAnime, setDataAnime] = useState<Datum[]>([]);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [detailId, setDetailId] = useState(0);

  function closeDetail() {
    setIsOpenDetail(false);
  }

  // FETCH API ETC
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
        toast.error(err, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
        });
      });
  }

  const dataDetail = dataAnime.find(
    (obj) => Number(obj.id) === Number(detailId)
  );

  useEffect(() => {
    getDataAnime();
  }, []);

  return (
    <>
      <ToastContainer />
      <Box>
        <Typography
          sx={{
            marginBottom: '10px',
          }}
        >
          ANIME DATABASE
        </Typography>
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
                <TableCell>Title EN-JP</TableCell>
                <TableCell align="left">Title JP</TableCell>
                <TableCell align="left">Rating</TableCell>
                <TableCell align="left">Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!dataAnime ? (
                <TableRowsLoader rowsNum={10} />
              ) : (
                <>
                  {dataAnime.map((data) => (
                    <TableRow
                      key={data.id}
                      sx={{
                        '&:last-child td, &:last-child th': {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell component="th" scope="data">
                        {data.attributes.titles.en === undefined || null ? (
                          <Typography fontWeight="bold">
                            No English Titles
                          </Typography>
                        ) : (
                          data.attributes.titles.en
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {data.attributes.titles.en_jp === undefined || null ? (
                          <Typography>No English Japan Titles</Typography>
                        ) : (
                          data.attributes.titles.en_jp
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {data.attributes.titles.ja_jp === undefined || null ? (
                          <Typography>No Japan Title</Typography>
                        ) : (
                          data.attributes.titles.ja_jp
                        )}
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
                            sx: {
                              backgroundColor: 'white',
                              boxShadow: 'none',
                            },
                          }}
                          BackdropProps={{
                            invisible: true,
                          }}
                        >
                          <Box sx={{ width: '300px', margin: 10 }}>
                            <Typography>
                              Detail for ID:{' '}
                              <Box component="span" fontWeight="bold">
                                {detailId}
                              </Box>
                            </Typography>
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
                            <Typography>Description: </Typography>
                            <Box component="span" fontWeight="bold">
                              {dataDetail?.attributes.description}
                            </Box>
                            <Divider />
                            <Typography>
                              Start Date:{' '}
                              <Box component="span" fontWeight="bold">
                                {dataDetail?.attributes.startDate}
                              </Box>
                            </Typography>
                            <Divider />
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
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

const TableRowsLoader = ({ rowsNum }: { rowsNum: number }) =>
  [...Array(rowsNum)].map((row, index) => (
    <TableRow key={index}>
      <TableCell component="th" scope="row">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
    </TableRow>
  ));
