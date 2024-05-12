import { getAllMenuItems } from '../../../api/menu/menuServices';
import React, { useEffect, useState, useRef } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


const MenuStats = () => {
  const [rows, setRows] = useState([]);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Menu Items Report',
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
    doc.setFontSize(16);
    doc.text('Menu Items Report', 10, 10);
  
    // Table Header
    const headers = [['Item ID', 'Food Item Name', 'Description', 'Price', 'Availability', 'Cuisine Type']];
  
    // Table Data
    const data = rows.map(row => [row._id, row.foodItemName, row.foodItemDescription, row.price, row.available, row.cuisineType]);
  
    // Generate the table
    doc.autoTable({
      head: headers,
      body: data,
      startY: 20,
      theme: 'grid', // Optional - add grid theme to the table
      styles: { font: 'Arial', fontStyle: 'bold', fontSize: 10 },
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 30 }, 2: { cellWidth: 30 }, 3: { cellWidth: 20 }, 4: { cellWidth: 30 }, 5: { cellWidth: 40 } } // Optional - set column width
    });
  
    // Save the PDF
    doc.save('Menu Items Report.pdf');
  };

  return (
    <div className="flex flex-col " ref={componentRef}>
      <div className="flex justify-between ">
        <Button onClick={handleExportPDF} color="primary">Export PDF</Button>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 p-4">
          <h1 className=" flex justify-center font-bold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Menu Items Report</h1>
          <div className="mt-1 p-1">
            <TableContainer component={Paper} className="table relative">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Item ID</TableCell>
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
