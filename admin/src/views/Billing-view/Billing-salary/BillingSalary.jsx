import React, { useEffect, useState, useRef } from "react";
import { getAllStaff } from '../../../api/staff/staffServices';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

function BillingSalary() {

  const [rows, setRows] = useState([]);
  const componentRef = useRef();
  
  useEffect(() => {
    getAllStaff().then((res) => {
        if (res.success) {
            setRows(res.data);
        }
    });
  }, []);
  return (
    <div className="flex flex-col ">
            <div className="flex justify-between ">
                {/* <Button className='bg-blue-black align-top' onClick={handleExportPDF}>Export PDF</Button> */}
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col flex-1 p-4 justify-center">
                    <h1 className="font-bold ">Salaries </h1>
                    <div className="mt-1 p-1">
                        <TableContainer component={Paper} className="table relative">
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Staff ID</TableCell>
                                        <TableCell>Fist Name</TableCell>
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
  )
}

export default BillingSalary