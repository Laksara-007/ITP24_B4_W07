import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HomeIcon from "@mui/icons-material/Home";
import Sidebar from "../../components/common/Sidebar";
import RoomDataView from "./roomData-view";
import { Route, Routes } from "react-router-dom";
import BookingStats from "./BookingStats/BookingStats";

const sideNavData = [
  {
    id: "1",
    title: "Overview",
    icon: <HomeIcon />,
    url: "/room",
  },
  {
    id: "2",
    title: "reservations",
    icon: <GroupsOutlinedIcon />,
    url: "/room/view",
  },
];

const index = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div>
      <div className="flex-[7]">
        <div className="flex-[7]">
        <Routes>
          <Route path="/" element={<RoomDataView />} />
          <Route path="view" element={<BookingStats />} />
        </Routes>
      </div>
      </div>
    </div>
  );
};

export default index;
