import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReservationView from "../pages/reservation/reservationView";
import Home from "../pages/Home";
import RoomAndSuits from "../pages/RoomAndSuits";
import Footer from "../components/common/Footer";
import Food from "../pages/Food";
import Navbar from "../components/common/Navbar";
import OrderForm from "../pages/OrderForm";


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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
export default AppRoutes;
