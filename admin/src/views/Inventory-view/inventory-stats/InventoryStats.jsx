import React, { useEffect } from "react";
import { useState } from "react";
import {
  getAllInventories,
  getInventoryReleaseStat,
  requestPerDay,
} from "../../../api/inventory/inventoryServices";
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

const InventoryStats = () => {

  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'prescription-data',
  })

  const [releaseDetails, setReleaseDetails] = useState([]);
  const [requestPerItem, setRequestPerItem] = useState([]);
  const [rows, setRows] = useState([])

  useEffect(() => {
    const unsub = false;
    if (!unsub) {
      requestPerDay().then((res) => {
        if (!res.success) {
        } else {
          setReleaseDetails(res.data);
        }
      });

      getInventoryReleaseStat().then((res) => {
        if (!res.success) {
        } else {
          setRequestPerItem(res.data);
        }
      });

      getAllInventories().then((res) => {
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
      <button className="bg-primary w-40 h-10 text-white rounded-lg self-end">Print</button>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 p-4">
          <span className="text-lg font-semibold">Releases per day</span>

          <div className="mt-10 p-10">
            <BarChartStat data={releaseDetails} />
          </div>
        </div>

        <div className="flex flex-col flex-1 p-4">
          <span className="text-lg font-semibold">Requests per items</span>
          <div className="mt-10 p-10">
            <BarChartStat data={requestPerItem} />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 p-4">
          <span>Remaining stock count</span>
          <div className="mt-10 p-10">
            <TableContainer component={Paper} className="table relative">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Stock ID</TableCell>
                    <TableCell>Stock name</TableCell>
                    <TableCell>Requested by</TableCell>
                    <TableCell>Remaining Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row) => (
                    <TableRow key={row?._id}>
                      <TableCell>{row?._id}</TableCell>
                      <TableCell>{row?.inventoryName}</TableCell>
                      <TableCell>{row?.supplierName}</TableCell>
                      <TableCell>{row?.quantity}</TableCell>
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

export default InventoryStats;
