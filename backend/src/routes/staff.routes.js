import Express from "express";
import { 
    createStaffmember,
    deletestaff,
    updatestaff,
    getAllStaff,
    getStaffByID,
} from "../controllers/staff.js";
//import { createStaff, getStaffBYID } from "../repositary/staffRepo.js";
const StaffRoute = Express.Router();


StaffRoute.get("/",getAllStaff);
StaffRoute.get("/:id",getStaffByID);
StaffRoute.post("/",createStaffmember);
StaffRoute.patch("/:id",updatestaff);
StaffRoute.delete("/:id",deletestaff);

export default StaffRoute;