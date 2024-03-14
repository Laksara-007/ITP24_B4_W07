import Mongoose from "mongoose";
import { badRequest } from "../errors/badRequest.js";
import { notFound } from "../errors/notFound.js";
import staffModel from "../models/staff";

export const createStaff = async (body) => {
  try {
    const response = await staffModel.create(body);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getAllStaff = async (queries) => {
  const {staffRanking, staffAddress} = queries
  let queryObj = {}
  try {
    if(staffRanking) queryObj.staffRanking = staffRanking
    if(staffAddress) queryObj.staffAddress = { $regex: staffAddress, $options: "i" };
    const response = await staffModel.find(queryObj)
    return response
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getStaffByID = async (id) => {
  try {
    if (!Mongoose.Types.ObjectId.isValid(id)) throw new notFound("No Staff with given id exists...");
    const response = await staffModel.findById(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
}


export const getStaff = async (filters) => {
  return await staffModel.findOne(filters);
};

export const updateStaff = async (id, body) => {
  try {
    const response = await staffModel.findByIdAndUpdate(
      id, { $set: body }, { new: true }
    );
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deleteStaff = async (id) => {
    return staffModel.findByIdAndDelete(id)
};



//new
// export const StaffManagersList = async (queries) => {
//   try {
//     const response = await staffModel.aggregate([
//       {
//         $group: {
//           _id: "$staffManager", totalSum: { $sum: 'Sum' }
//         }
//       }
//     ]);
//     return response;
//   } catch (error) {}
// };