import { getAllBilling } from '../../../api/billing/billingServices';
import React, { useEffect, useState, useRef } from "react";
import { getAllStaff } from "../../../api/staff/staffServices";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useReactToPrint } from 'react-to-print';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { jsPDF } from 'jspdf';
import { getAllMenuItems } from '../../../api/menu/menuServices';


const MenuStats = () => {
  const [rows, setRows] = useState([]);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Internal Expences Report',
});
useEffect(() => {
  getAllMenuItems().then((res) => {
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
      // doc.text(`BillingID: ${row._id}`, 10, yPos);
      // yPos += 10; // Increase y-coordinate for the next line

      doc.text(`Food Item Name: ${row.foodItemName}`, 10, yPos);
      yPos += 10;

      doc.text(`Description: ${row.foodItemDescription}`, 10, yPos);
      yPos += 10;
      doc.text(`Price: ${row.price}`, 10, yPos);
      yPos += 10;
      doc.text(`Availability: ${row.available}`, 10, yPos);
      yPos += 10;
      doc.text(`Cuisine Type: ${row.cuisineType}`, 10, yPos);
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
  doc.save('Menu Details.pdf');
};  

  return (
    <div className="flex flex-col p-4" ref={componentRef}>
            <div className="flex justify-between mb-4">
                <Button className='bg-blue-black' onClick={handleExportPDF}>Export PDF</Button>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col flex-1 p-4">
                    <span>External</span>
                    <div className="mt-10 p-10">
                        <TableContainer component={Paper} className="table relative">
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Bill ID</TableCell>
                                        <TableCell>Food Item Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Availability</TableCell>
                                        <TableCell>Cuisine Type</TableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row._id}>
                                            <TableCell>{row._id}</TableCell>
                                            <TableCell>{row.foodItemName}</TableCell>
                                            <TableCell>{row.foodItemDescription}</TableCell>
                                            <TableCell>{row.price}</TableCell>
                                            <TableCell>{row.available}</TableCell>
                                            <TableCell>{row.cuisineType}</TableCell>
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

export default MenuStats;