import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StaffHome from "./Staff-home/StaffHome";
import StaffDetails from "./Staff-details/StaffDetails";
import Sidebar from "../../components/common/Sidebar";
import { Route, Routes } from "react-router-dom";
import StaffForm from "./Staff-form/StaffForm";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import StaffStats from "./Staff-stats/StaffStats";



const sideNavData = [
    {
        id: "1",
        title: "Overview",
        icon: <HomeIcon />,
        url: "/staff",
    },
    {
        id: "2",
        title: "Staff",
        icon: <GroupsOutlinedIcon />,
        url: "/staff/view",
    },
    {
        id: "1",
        title: "Staff Stats",
        icon: <QueryStatsIcon />,
        url: "/staff/stats",
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
                    <Route path="" element={<StaffHome />} />
                    <Route path="overview" element={<StaffHome />} />
                    <Route path="view" element={<StaffDetails />} />
                    <Route path="add" element={<StaffForm />} />
                    <Route path="edit/:id" element={<StaffForm />} />
                    <Route path="stats" element={<StaffStats />} />
                </Routes>
            </div>
        </div>
    );
};

export default Index;


