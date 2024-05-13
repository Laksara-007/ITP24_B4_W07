import { getAllBilling } from '../../../api/billing/billingServices';
import React, { useEffect, useState, useRef } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// Import your image file
import logoImage from '../../../data/itp logo2.png';

const BillingReports = () => {
  const [rows, setRows] = useState([]);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Internal Expenses Report',
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

    // Load the image
    const imgData = logoImage;

    doc.setFontSize(16);
    doc.text('Internal Expenses', 50, 15);

    // Add the image to the PDF
    doc.addImage(imgData, 'PNG', 100, 0, 40, 20); // Adjust the position and size as needed

    // Table Header
    const headers = [['Billing ID', 'Billing Name', 'Billing Date', 'Billing Total']];

    // Table Data
    const data = rows.map(row => [row._id, row.billingName, row.date, row.total]);

    // Generate the table
    doc.autoTable({
        head: headers,
        body: data,
        startY: 30, // Adjust the startY position to make space for the image
        theme: 'grid',
        styles: { font: 'Arial', fontStyle: 'bold', fontSize: 10 },
        columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 60 }, 2: { cellWidth: 40 }, 3: { cellWidth: 30 } }
    });

    // Save the PDF
    doc.save('Expenses Details.pdf');
};


  return (
    <div className="flex flex-col " ref={componentRef}>
      <div className="flex justify-between ">
        <Button onClick={handleExportPDF} color="error">Export PDF</Button>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 p-4 justify-center">
          {/* Image as the heading */}
          
          <img src={logoImage} alt="Logo" className="flex h-auto w-52 mb-4 justify-center" />
          <h1 className="flex justify-center font-bold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Internal Expenses Report</h1>
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
