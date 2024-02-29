'use client';

import { Datum } from '@/dao/classic-art';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Paper,
  Snackbar,
  SnackbarOrigin,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClassicArts() {
  const [dataArt, setDataArt] = useState<Datum[]>([]);
  const [detailId, setDetailId] = useState(0);
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  function closeDetail() {
    setIsOpenDetail(false);
  }

  //FETCH API
  async function getClassicArt() {
    setDataArt([]);

    await axios
      .get('https://api.artic.edu/api/v1/artworks')
      .then((result) => {
        if (result.status === 200) {
          setDataArt(result.data.data);
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

  let artDetail = dataArt.find((obj) => Number(obj.id) === Number(detailId));

  useEffect(() => {
    getClassicArt();
  }, []);

  return (
    <>
      <ToastContainer />
      <Typography>Classic Art Database</Typography>
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
              <TableCell>Title</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArt.map((data) => {
              return (
                <TableRow
                  key={data.id}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="data">
                    {data.title === undefined || null ? (
                      <Typography>No Title Name</Typography>
                    ) : (
                      data.title
                    )}
                  </TableCell>
                  <TableCell align="left">
                    {data.artist_title === undefined || null ? (
                      <Typography>No Artist Name</Typography>
                    ) : (
                      data.artist_title
                    )}
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
                          Detail Art For ID:
                          <Box component="span" fontWeight="bold">
                            {detailId}
                          </Box>
                        </Typography>
                        <Divider />
                        <Typography>
                          Title:{' '}
                          <Box component="span" fontWeight="bold">
                            {artDetail?.title}
                          </Box>
                        </Typography>
                        <Divider />
                        <Typography>
                          Artist:{' '}
                          <Box component="span" fontWeight="bold">
                            {artDetail?.artist_title}
                          </Box>
                        </Typography>
                        <Divider />
                        <Typography>
                          Description:{' '}
                          <Box component="span" fontWeight="bold">
                            {/* {artDetail?.description} */}
                            <div
                              dangerouslySetInnerHTML={{
                                __html: artDetail?.description,
                              }}
                            />
                          </Box>
                        </Typography>
                      </Box>
                    </Drawer>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
