import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const getDonors = async () => {
    const response = await fetch("http://localhost:1337/api/getdonation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setDonors(data.result);
  };
  useEffect(() => {
    getDonors();
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ mt: 10 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          {" "}
          Our Donors
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ width: "50px" }}>
                    #
                  </TableCell>
                  <TableCell>Donor Name</TableCell>
                  <TableCell align="left">Donation Type</TableCell>
                  <TableCell align="left">amount</TableCell>
                  <TableCell align="left">phone</TableCell>
                  <TableCell align="left">adress</TableCell>
                  <TableCell align="left">Note</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {donors.length &&
                  donors.map((v, i) => {
                    return (
                      <TableRow
                        key={"s"}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">{i + 1}</TableCell>
                        <TableCell component="th" scope="row">
                          {v.donorName}
                        </TableCell>
                        <TableCell align="left">{v.donationType}</TableCell>
                        <TableCell align="left">{v.amount}</TableCell>
                        <TableCell align="left">{v.phone}</TableCell>
                        <TableCell align="left">{v.address}</TableCell>
                        <TableCell align="left" sx={{ width: "200px" }}>
                          {v.donorNotes}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default Donors;
