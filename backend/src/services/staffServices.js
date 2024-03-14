import { badRequest } from '../errors/badRequest.js';
import{
    createsStaff,   
    getStaff,  
    getAllStaff,
    getStaffByID,
    updateStaff,
    deleteStaff,

} from '../repositary/staffRepo.js';
import { makeResponse } from '../utils/response.js';

export const createStaffServices = async (body) => {
    try{
        const response = await createsStaff(body);
        return response;
    }catch(error){
        throw new badRequest(error.message);
    }
};  

export const getAllStaffService = async (queries) => {  
    try{
        const response = await getAllStaff(queries)
        return response
    }catch(error){
        throw new badRequest(error.message);
    }
};

export const getStaffByIDServices = async (id) => {
    try{
        const response = await getStaffByID(id);
        return response;
    }catch(error){
        throw new badRequest(error.message);
    }
}; 

export const updateStaffServices = async (id, body) => {
    const {staffName} = body;
    try{
        // const staff = await updateStaff(id, body);
        // if(!staff) return {status: 400, message: "Staff details updated successfully"};
        const response = await updateStaff(id, body);
        return response;
    }catch(error){
        throw new badRequest(error.message);
    }
}

     export const deleteStaffService = async (id) => {
    try{
        const response = await deleteStaff(id)
        return response
    }catch(error){
        throw new badRequest(error.message);
    }
};


//new

// export const StaffManagersListService = async (req, res) => {
//     try {
//         let response = await StaffManagersList();

//         let itemR;
//         response.map(async (item) => {
//             itemR = await getStaffByID(itemR._id).then((res) => {
//                 item._id = res.staffName;
//                 item.type = res.type;
//                 return Position;
//             });
//             return item;
//         });
//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// };


