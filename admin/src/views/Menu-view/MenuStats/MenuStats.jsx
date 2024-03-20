import React, { useEffect } from "react";
import { useState } from "react";
import { getAllMenuItems } from "../../../api/menu/menuServices";
import BarChartStat from "../../../components/Bar-chart/BarChart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useReactToPrint } from 'react-to-print'
import { useRef } from "react";

const MenuStats = () => {

  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'prescription-data',
  })

  const [rows, setRows] = useState([])

  useEffect(() => {
    const unsub = false;
    if (!unsub) {
      getAllMenuItems().then((res) => {
        if (!res.success) {
        } else {
          console.log(res.data);
          setRows(res.data);
        }
      })
    }

    return () => {
      unsub = true;
    };
  }, []);
  

  return (
    <div className="flex flex-col p-4" ref={componentRef} onClick={handlePrint}>
      <button className="bg-primary w-40 h-10 text-white rounded-lg self-end">
        Print
      </button>

      <div className="flex flex-row">
        <div className="flex flex-col flex-1 p-4">
          <span>Menu Items </span>
          <div className="mt-10 p-10">
            <TableContainer component={Paper} className="table relative">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Menu Item ID</TableCell>
                    <TableCell>Menu Item Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Cuisine Type</TableCell>
                    <TableCell>Meal Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row) => (
                    <TableRow key={row?._id}>
                      <TableCell>{row?._id}</TableCell>
                      <TableCell>{row?.foodItemName}</TableCell>
                      <TableCell>{row?.price}</TableCell>
                      <TableCell>{row?.cuisineType}</TableCell>
                      <TableCell>{row?.mealType}</TableCell>
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
