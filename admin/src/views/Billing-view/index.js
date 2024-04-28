//import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SummarizeIcon from '@mui/icons-material/Summarize';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
//import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Sidebar from "../../components/common/Sidebar";
import BillingDetails from "./Billing-details/BillingDetails";
import BillingForm from "./Billing-form/BillingForm";
import { Route, Routes } from "react-router-dom";
import BillingHome from "./Billing-home/BillingHome";
import BillingReports from './Billing-reports/BillingReports';
import BillingSalary from './Billing-salary/BillingSalary';

const sideNavData = [
  {
    id: "1",
    title: "Overview",
    icon: <SummarizeIcon />,
    url: "/billing/overview",
  },
  {
    id: "2",
    title: "Billing",
    icon: <AccountBalanceIcon />,
    url: "/billing/view",
  },
  {
    id: "1",
    title: "Rreports",
    icon: <QueryStatsIcon />,
    url: "/billing/reports",
  },
  {
    id: "1",
    title: "Salary info",
    icon: <AttachMoneyIcon />,
    url: "/billing/salary-info",
  },
];

const Index = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div>

      <div className="flex-[7]">
        <Routes>
          <Route path="overview" element={<BillingHome />} />
          <Route path="view" element={<BillingDetails />} />
          <Route path="add" element={<BillingForm />} />
          <Route path="edit/:id" element={<BillingForm />} />
          <Route path="reports" element={<BillingReports />} />
          <Route path="salary-info" element={<BillingSalary />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;



