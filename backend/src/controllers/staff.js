import { badRequest } from "../errors/badRequest.js";
import staffModel from "../models/staff.js"
import { createStaffServices, getAllStaffService, getstaffByIDServices, updateStaffServices, deleteStaffService, getStaffByIDServices, StaffManagersListService } from "../services/staffServices.js";
import { makeResponse } from "../utils/response.js"


export const findOne = async (filters) => {
  const response = await staffModel.findOne(filters)
  return response
}

export const findAll = async (req, res) => {
  const response = await staffModel.find(filters)
  return response
}

export const findById = async (req, res) => {
  const response = await staffModel.findById(id)
  return response
}

// export const getstaffByIDServices = async (req,res) => {
//     const response = await getstaffByIDServices(id)
//     return response
//   }

export const createStaffmember = async (req, res) => {
  const response = await staffModel.create(req.body)
  if (!response) return makeResponse({ res, status: 400, message: "Staff creation failed" })
  return makeResponse({ res, status: 200, data: response, message: "Staff creation completed" })

}

export const getAllStaff = async (req, res) => {
  const response = await staffModel.find()
  if (!response) return makeResponse({ res, status: 400, message: "Staff not found" })
  return makeResponse({ res, status: 200, data: response, message: "Staff found" })
}



export const getStaffByID = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getStaffByIDServices(id);
    if (!response) return makeResponse({ res, status: 500, message: `\Staff does not exists with the id ${id}` });
    makeResponse({ res, status: 200, data: response, message: "Successfully fetched the Customer details...." });
  } catch (error) {
    console.log(error);
    throw new badRequest(error.message);
  }
};

export const updatestaff = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const response = await updateStaffServices(id, body);
    if (!response) return makeResponse({ res, status: 500, message: " update process failed" });
    if (response.status) return makeResponse({ res, ...response });
    makeResponse({ res, status: 200, data: response, message: "Staff details updated successfully..." });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deletestaff = async (req, res) => {
  const { id } = req.params
  try {
    const response = await deleteStaffService(id)
    if (!response) return makeResponse({ res, status: 500, message: 'something went wrong' });
    makeResponse({ res, status: 200, data: response, message: "Successfully deleted Staff details...." });
  } catch (error) {
    throw new badRequest(error.message);
  }
};



//new

// export const StaffManagersList = async (req, res) => {
//   try {
//     const response = await StaffManagersListService();
//     if (!response) return makeResponse({ res, status: 500, message: "Staff Managers list not found" });
//     makeResponse({ res, status: 200, data: response, message: "Staff Managers list found" });
//   } catch (error) {
//     throw new badRequest(error.message);
//   }
// };