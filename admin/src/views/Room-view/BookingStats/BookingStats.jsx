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
import { getAllReservations } from "../../../api/reservation/reservationService";
import { format } from "date-fns/format";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const BookingStats = () => {
  const componentRef = useRef();
  const [rows, setRows] = useState([]);

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: "reservation-data",
  // });

  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Reservation History", 10, 10);

    // Table Header
    const headers = [
      [
        "Room ID",
        "Customer Name",
        "Rom Type",
        "Starting Date",
        "Ending Date",
        "Price Total",
      ],
    ];

    // Table Data
    const data = rows.map((row) => [
      row._id,
      row.customerName,
      row.name,
      row.startDate,
      row.endDate,
      row.price,
    ]);

    // Generate the table
    doc.autoTable({
      head: headers,
      body: data,
      startY: 20,
      theme: "grid", // Optional - add grid theme to the table
      styles: { font: "Arial", fontStyle: "bold", fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 25 },
        2: { cellWidth: 30 },
        3: { cellWidth: 30 },
        4: { cellWidth: 30 },
        5: { cellWidth: 30 },
      }, // Optional - set column width
    });

    // Save the PDF
    doc.save("ReservationHistory.pdf");
  };

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
      onClick={handleExportPDF}
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
                      <TableCell>{row?.startDate}</TableCell>
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
