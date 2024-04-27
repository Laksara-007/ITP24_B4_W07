import React, { useState } from 'react';
import { getAllBilling } from '../../../api/billing/billingServices';


const BillingReports = () => {
  const [billingData, setBillingData] = useState([]);


  const generateReport = async () => {
    try {
      await getAllBilling(); // Fetch billing data before generating report
      // Use billingData to generate the report
      // For simplicity, let's just log the data for now
      console.log(billingData);
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };

  return (
    <div>
      <h1>Report Generation</h1>
      <button onClick={generateReport}>Generate Report</button>
    </div>
  );
};

export default BillingReports;
