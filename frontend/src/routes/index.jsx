import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReservationView from "../pages/reservation/reservationView";
import Home from "../pages/Home";
import RoomAndSuits from "../pages/RoomAndSuits";
import Footer from "../components/common/Footer";
import Food from "../pages/Food";
import Navbar from "../components/common/Navbar";
import OrderForm from "../pages/OrderForm";
import Register from "../pages/register";
import Facilities from "../pages/Facilities";
import Offers from "../pages/offers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room&suits" element={<RoomAndSuits />} />
        <Route path="/reservationView" element={<ReservationView />} />
        <Route path="/food" element={<Food />} />
        <Route path="/placeOrder/:id" element={<OrderForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
export default AppRoutes;
