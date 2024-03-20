import PackageIcon from "@mui/icons-material/LocalPostOffice";
import HomeIcon from "@mui/icons-material/LocalPostOffice";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PackageDetails from "./PackageDetails/packageDetails";
import PackageForm from "./PackageForm/packageForm";
import PackageHome from "./PackageHome/packageHome";
import Sidebar from "../../components/common/Sidebar";
import { Route, Routes } from "react-router-dom";

const sideNavData = [
  {
    id: "1",
    title: "Overview",
    icon: <HomeIcon />,
    url: "/package/overview",
  },
  {
    id: "2",
    title: "Packages",
    icon: <PackageIcon />,
    url: "/package/view",
  },
  {
    id: "1",
    title: "Stats",
    icon: <QueryStatsIcon />,
    url: "/stats",
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
          <Route path="overview" element={<PackageHome />} />
          <Route path="view" element={<PackageDetails />} />
          <Route path="add" element={<PackageForm />} />
          <Route path="edit/:id" element={<PackageForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default index;