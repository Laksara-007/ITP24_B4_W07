import React, { useEffect, useState, useRef } from "react";
import { getAllStaff } from "../../../api/staff/staffServices";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const StaffStats = () => {
    const [rows, setRows] = useState([]);
    const componentRef = useRef();

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
        doc.text('Staff Details', 10, 10);
    
        // Table Header
        const headers = [['Staff ID', 'Staff Name', 'Phone Number', 'Position']];
    
        // Table Data
        const data = rows.map(row => [row._id, row.firstName, row.phoneNumber, row.position]);
    
        // Generate the table
        doc.autoTable({
            head: headers,
            body: data,
            startY: 20,
            theme: 'grid',
            styles: { font: 'Arial', fontStyle: 'bold', fontSize: 10 },
            columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 60 }, 2: { cellWidth: 40 }, 3: { cellWidth: 30 } }
        });
    
        // Save the PDF
        doc.save('Staff Details.pdf');
    };
    
    

    return (
        <div className="flex flex-col p-4" ref={componentRef}>
            <div className="flex justify-between mb-4">
                {/* <Button variant="contained" onClick={handlePrint}>Print Staff Details</Button> */}
                <Button variant="contained" onClick={handleExportPDF}>Export PDF</Button>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col flex-1 p-4">
                    <span>Staff Details List</span>
                    <div className="mt-10 p-10">
                        <TableContainer component={Paper} className="table relative">
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Staff ID</TableCell>
                                        <TableCell>Staff Name</TableCell>
                                        <TableCell>Phone Number</TableCell>
                                        <TableCell>Position</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row._id}>
                                            <TableCell>{row._id}</TableCell>
                                            <TableCell>{row.firstName}</TableCell>
                                            <TableCell>{row.phoneNumber}</TableCell>
                                            <TableCell>{row.position}</TableCell>
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

export default StaffStats;