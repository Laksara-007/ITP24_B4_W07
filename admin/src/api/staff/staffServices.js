import { apiRequest, axiosInstance } from "../axios";

export const getAllStaff = async () => {
    const response = await apiRequest(() => axiosInstance.get("staff"))
    return response
}

export const getStaffReleaseStat = async () => {
    const response = await apiRequest(() => axiosInstance.get("staff/stats"))
    return response
}

export const createStaff = async (data) => {
    return await apiRequest(() => axiosInstance.post("staff", data))
}

export const updateStaff = async (data, id) => {
    return await apiRequest(() => axiosInstance.patch("staff/" + id, data))
}

export const getOneStaff = async (id) => {
    return await apiRequest(() => axiosInstance.get("staff/" + id))
}

export const deleteStaffDetails = async (id) => {
    return await apiRequest(() => axiosInstance.delete("staff/" + id))
}
