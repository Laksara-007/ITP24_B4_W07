import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EventHome from "./EventHome/EventHome";
import EventDetails from "./EventDetails/EventDetails";
import Sidebar from "../../components/common/Sidebar";
import { Route, Routes } from "react-router-dom";
import EventForm from "./EventForm/EventForm";
import EventStats from "./EventStats/EventStats";


const sideNavData = [
  {
    id: "1",
    title: "Overview",
    icon: <HomeIcon />,
    url: "/event/overview",
  },
  {
    id: "2",
    title: "Events",
    icon: <EventIcon />,
    url: "/event/view",
  },
  {
    id: "1",
    title: "Stats",
    icon: <QueryStatsIcon />,
    url: "/event/stats",
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
          <Route path="" element={<EventHome />} />
          <Route path="overview" element={<EventHome />} />
          <Route path="view" element={<EventDetails />} />
          <Route path="add" element={<EventForm />} />
          <Route path="edit/:id" element={<EventForm />} />
          <Route path="stats" element={<EventStats />} />
        </Routes>
      </div>
    </div>
  );
};

export default index;
