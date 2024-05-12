import React, { useEffect, useState } from "react";
import StatCard from "../../../components/Stats/StatsCard";
import { getAllBilling } from '../../../api/billing/billingServices';
import { getAllStaff } from "../../../api/staff/staffServices";


const BillingHome = () => {
  const [rows, setRows] = useState([]);
  const [numberOfBills, setNumberOfBills] = useState(0);
  const [numberOfStaff, setNumberOfStaff] = useState(0);

  useEffect(() => {
    getAllBilling().then((res) => {
      if (res.success) {
        setRows(res.data);

        // Count the number of bills
        const count = res.data.length;
        setNumberOfBills(count);
      }
    });
    getAllStaff().then((res) => {
      if (res.success) {
        setRows(res.data);

        // Count the number of staff
        const count = res.data.length;
        setNumberOfStaff(count);
      }
    });
  }, []);

  return (
    <div className="justify-center">
      <h1 className="flex justify-center font-bold" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Financial Statistics</h1>
      <div
        style={{ display: "flex", gap: "20px", justifyContent: "space-around" }}
      >
        <StatCard title="Total Internal Bills" value={numberOfBills} />
        <StatCard title="Total Customer Payments" value={100} />
        <StatCard title="Total Staff Members" value={numberOfStaff} />
        <StatCard title="Total Pending Payments" value={100} />
      </div>
    </div>
  );
};

export default BillingHome;
