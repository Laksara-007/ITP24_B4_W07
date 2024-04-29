import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import MenuHome from "./MenuHome/MenuHome";
import MenuDetails from "./MenuDetails/MenuDetails";
import Sidebar from "../../components/common/Sidebar";
import { Route, Routes } from "react-router-dom";
import MenuForm from "./MenuForm/MenuForm";
import MenuStats from "./MenuStats/MenuStats";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuOrders from "./Menu-orders/MenuOrders";
import MenuOrderForm from "./Menu-orderForm/MenuOrderForm";

const sideNavData = [
  {
    id: "1",
    title: "Overview",
    icon: <HomeIcon />,
    url: "/menu/overview",
  },
  {
    id: "2",
    title: "Menus",
    icon: <MenuBookIcon />,
    url: "/menu/view",
  },
  {
    id: "3",
    title: "Stats",
    icon: <QueryStatsIcon />,
    url: "/menu/stats",
  },
  {
    id: "4",
    title: "Orders",
    icon: <AssignmentIcon />,
    url: "/menu/orders",
  },
];

const index = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div>

      <div className="flex-[7]">
        <Routes>
          <Route path="overview" element={<MenuHome />} />
          <Route path="view" element={<MenuDetails />} />
          <Route path="add" element={<MenuForm />} />
          <Route path="edit/:id" element={<MenuForm />} />
          <Route path="stats" element={<MenuStats />} />
          <Route path="orders" element={<MenuOrders />} />
          <Route path="addOrder" element={<MenuOrderForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default index;
