import Express from "express";
import { 
    createStaffmember,
    deletestaff,
    updatestaff,
    getAllStaff,
    getStaffByID,
} from "../controllers/staff";
import { createStaff, getStaffBYID } from "../repositary/staffRepo.js";
const StaffRoute = Express.Router();


StaffRoute.get("/",getAllStaff);
StaffRoute.get("/:id",getStaffByID);
StaffRoute.post("/",createStaffmember);
StaffRoute.put("/:id",updatestaff);
StaffRoute.delete("/:id",deletestaff);


export default StaffRoute;