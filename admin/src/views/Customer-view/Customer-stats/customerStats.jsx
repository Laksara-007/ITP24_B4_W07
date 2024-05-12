import React, { useEffect, useState, useRef } from "react";
import {
  getAllCustomers,
} from "../../../api/user/userServices";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const CustomerStats = () => {
  const [customers, setCustomers] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    getAllCustomers().then((res) => {
      if (res.success) {
        setCustomers(res.data);
      }
    });
  }, []);

  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Customer Stats', 10, 10);

    // Table Header
    const headers = ['Customer ID', 'Customer Name', 'Customer Ranking'];

    // Table Data
    const data = customers.map(customer => [customer._id, customer.customertName, customer.customerRanking]);

    // Generate the table
    doc.autoTable({
      head: [headers],
      body: data,
      startY: 20,
      theme: 'grid',
      styles: { font: 'Arial', fontStyle: 'bold', fontSize: 10 },
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 60 }, 2: { cellWidth: 40 } }
    });

    // Save the PDF
    doc.save('Customer Stats.pdf');
  };

  return (
    <div className="flex flex-col p-4" ref={componentRef}>
      <div className="flex justify-between mb-4">
      <Button
        variant="contained"
        onClick={handleExportPDF}
        className="py-2 px-4 text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
      >
        Export PDF
      </Button>
      </div>
      
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 p-4">
          <span>Customer Names with Ranking</span>
          <div className="mt-10 p-10">
            <TableContainer component={Paper} className="table relative">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Customer ID</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Customer Ranking</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map(customer => (
                    <TableRow key={customer._id}>
                      <TableCell>{customer._id}</TableCell>
                      <TableCell>{customer.customertName}</TableCell>
                      <TableCell>{customer.customerRanking}</TableCell>
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

export default CustomerStats;
