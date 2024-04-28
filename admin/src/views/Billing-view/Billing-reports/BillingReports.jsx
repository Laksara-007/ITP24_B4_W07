import { getAllBilling } from '../../../api/billing/billingServices';
import React, { useEffect, useState, useRef } from "react";
import { getAllStaff } from "../../../api/staff/staffServices";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useReactToPrint } from 'react-to-print';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { jsPDF } from 'jspdf';


const BillingReports = () => {
  const [rows, setRows] = useState([]);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Internal Expences Report',
});
useEffect(() => {
  getAllBilling().then((res) => {
      if (res.success) {
          setRows(res.data);
      }
  });
}, []);

const handleExportPDF = () => {
  const doc = new jsPDF();  

  // Define initial y-coordinate
  let yPos = 10;

  // Add content to the PDF document
  rows.forEach(row => {
      doc.text(`BillingID: ${row._id}`, 10, yPos);
      yPos += 10; // Increase y-coordinate for the next line

      doc.text(`Billing Name: ${row.billingName}`, 10, yPos);
      yPos += 10;

      doc.text(`Billing Number: ${row.total}`, 10, yPos);
      yPos += 10;
      doc.text(`Billing Date: ${row.date}`, 10, yPos);
      yPos += 10;

      

      // Add spacing between each group of data
      yPos += 10;

      // Check if there's enough space for the next entry, add a new page if necessary
      if (yPos >= 290) {
          doc.addPage();
          yPos = 10; // Reset y-coordinate for the new page
      }
  });

  // Save the PDF
  doc.save('Expences Details.pdf');
};  

  return (
    <div className="flex flex-col " ref={componentRef}>
            <div className="flex justify-between ">
                <Button className='bg-blue-black align-top' onClick={handleExportPDF}>Export PDF</Button>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col flex-1 p-4">
                    <span>Internal Expences </span>
                    <div className="mt-1 p-1">
                        <TableContainer component={Paper} className="table relative">
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Bill ID</TableCell>
                                        <TableCell>Bill Name</TableCell>
                                        <TableCell>Bill Date</TableCell>
                                        <TableCell>Bill Total</TableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row._id}>
                                            <TableCell>{row._id}</TableCell>
                                            <TableCell>{row.billingName}</TableCell>
                                            <TableCell>{row.paymentDate}</TableCell>
                                            <TableCell>{row.total}</TableCell>
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

export default BillingReports;
