import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StaffHeadcountChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const labels = data.map(entry => entry.month);
    const headcounts = data.map(entry => entry.headcount);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Staff Headcount',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: headcounts,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [data]);

  return <canvas ref={chartRef} />;
};

const App = () => {
  const staffHeadcountData = [
    { month: 'January', headcount: 50 },
    { month: 'February', headcount: 55 },
    { month: 'March', headcount: 61 },
    { month: 'April', headcount: 68 },
    { month: 'May', headcount: 76 },
    { month: 'June', headcount: 83 },
    { month: 'July', headcount: 88 },
    { month: 'August', headcount: 84 },
    { month: 'September', headcount: 86 },
    { month: 'October', headcount: 90 },
    { month: 'November', headcount: 98 },
    { month: 'December', headcount: 95 },
    // Add more data for other months
  ];

  return (
    <div>
      <h1>Staff Headcount Month-wise</h1>
      <StaffHeadcountChart data={staffHeadcountData} />
    </div>
  );
};

export default App;