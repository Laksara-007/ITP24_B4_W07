import React, { useEffect } from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { tabsClasses } from "@mui/material";
// import { getAllReservations } from "../../../api/reservation/reservationService";

const BookingStats = () => {
  const componentRef = useRef();
  const [rows, setRows] = useState([]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "prescription-data",
  });

  //   useEffect(() => {
  //     const unsub = false;
  //     if (!unsub) {
  //       getAllReservations().then((res) => {
  //         if (!res.success) {
  //         } else {
  //           console.log(res.data);
  //           setRows(res.data);
  //         }
  //       })
  //     }

  //     return () => {
  //       unsub = true;
  //     };
  //   }, []);

  const sampleData = [
    {
      _id: 1,
      name: "John Doe",
      price: 100,
      type: "Single Room",
      date: "2022-10-10",
    },
    {
      _id: 2,
      name: "Jane Smith",
      price: 150,
      type: "Double Room",
      date: "2022-10-11",
    },
    {
      _id: 3,
      name: "Alice Johnson",
      price: 200,
      type: "Suite",
      date: "2022-10-12",
    },
    {
      _id: 4,
      name: "Bob Williams",
      price: 120,
      type: "Single Room",
      date: "2022-10-13",
    },
  ];

  useEffect(() => {
    setRows(sampleData);
  }, []);

  return (
    <div
      className="flex flex-col p-4 bg-slate-100"
      ref={componentRef}
      onClick={handlePrint}
    >
      <button className="bg-primary w-40 h-10 text-white rounded-lg self-end">
        Print
      </button>

      <div className="flex flex-row">
        <div id="HistoryTable" className="flex flex-col flex-1 p-4">
          <span>Booking History</span>
          <div className="mt-10 p-10">
            <TableContainer component={Paper} className="table relative">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Room Type</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row) => (
                    <TableRow key={row?._id}>
                      <TableCell>{row?._id}</TableCell>
                      <TableCell>{row?.name}</TableCell>
                      <TableCell>{row?.price}</TableCell>
                      <TableCell>{row?.type}</TableCell>
                      <TableCell>{row?.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStats;
