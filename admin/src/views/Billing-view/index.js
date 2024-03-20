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
    title: "Financial Stats",
    icon: <QueryStatsIcon />,
    url: "/billing/financial-stats",
  },
  {
    id: "1",
    title: "Salary info",
    icon: <AttachMoneyIcon />,
    url: "/stats",
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
        </Routes>
      </div>
    </div>
  );
};

export default Index;



