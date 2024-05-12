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
import { getAllReservations } from "../../../api/reservation/reservationService";
import {format} from "date-fns/format";

const BookingStats = () => {
  const componentRef = useRef();
  const [rows, setRows] = useState([]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "prescription-data",
  });

  useEffect(() => {
    getAllReservations().then((res) => {
      console.log(res.data);
      const sorted = res.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      const formatted = sorted.map((row) => {
        return {
          _id: row._id,
          name: row.roomType,
          customerName: row.customerName,
          price: row.price,
          name: row.name,
          startDate: format(new Date(row.startDate), "dd/MM/yyyy"),
          endDate: format(new Date(row.endDate), "dd/MM/yyyy"),
        };
      });
      setRows(formatted);
    });
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
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row) => (
                    <TableRow key={row?._id}>
                      <TableCell>{row?._id}</TableCell>
                      <TableCell>{row?.customerName}</TableCell>
                      <TableCell>{row?.price}</TableCell>
                      <TableCell>{row?.name}</TableCell>
                      <TableCell>{row?.startDate }</TableCell>
                      <TableCell>{row?.endDate}</TableCell>
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
