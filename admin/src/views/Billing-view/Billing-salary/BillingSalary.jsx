import React, { useEffect, useState } from "react";
import { getAllStaff } from '../../../api/staff/staffServices';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { jsPDF } from 'jspdf';

function BillingSalary() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getAllStaff().then((res) => {
        if (res.success) {
            setRows(res.data);
        }
    });
  }, []);

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Salary Report', 10, 10);
    doc.autoTable({ html: '#staff-table' });
    doc.save('Salary Details.pdf');
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
      <Button onClick={handleExportPDF} color="error">Export PDF</Button>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 p-1 justify-center">
        <h1  className=" flex justify-center font-bold"style={{ fontSize: '2rem', marginBottom: '1rem' }}>Staff Salaries</h1>
          <div className="mt-1 p-1">
            <TableContainer component={Paper} className="table relative">
              <Table id="staff-table" sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Staff ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Total Salary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell>{row._id}</TableCell>
                      <TableCell>{row.firstName}</TableCell>
                      <TableCell>{row.lastname}</TableCell>
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
}

export default BillingSalary;
