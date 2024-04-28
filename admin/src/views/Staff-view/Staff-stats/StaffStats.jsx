import React, { useEffect, useState, useRef } from "react";
import { getAllStaff } from "../../../api/staff/staffServices";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useReactToPrint } from 'react-to-print';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { jsPDF } from 'jspdf';

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

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Staff Details Report',
    });

    const handleExportPDF = () => {
        const doc = new jsPDF();
    
        // Define initial y-coordinate
        let yPos = 10;
    
        // Add content to the PDF document
        rows.forEach(row => {
            doc.text(`Staff ID: ${row._id}`, 10, yPos);
            yPos += 10; // Increase y-coordinate for the next line
    
            doc.text(`Staff Name: ${row.firstName}`, 10, yPos);
            yPos += 10;
    
            doc.text(`Phone Number: ${row.phoneNumber}`, 10, yPos);
            yPos += 10;
    
            doc.text(`Position: ${row.position}`, 10, yPos);
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
