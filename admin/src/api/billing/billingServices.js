import { apiRequest, axiosInstance } from "../axios";


export const getAllBilling = async () => {
  try {
    return await apiRequest(() => axiosInstance.get("billing"));
  } catch (error) {}
};

export const createBilling = async (data) => {
  //const day = new Date().getTime();
  //const data = { ...req, receivedDate: day };
  try {
    return await apiRequest(() => axiosInstance.post("billing", data));
  } catch (error) {}
};

export const getOneBilling = async (id) => {
  return await apiRequest(() => axiosInstance.get(`billing/` + id));
};

export const editBilling = async (data, id) => {
  return await apiRequest(() => axiosInstance.patch("billing/" + id, data));
};

export const deleteBilling = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`billing/` + id));
};

export const updateBilling = async (billing, id) => {
  const response = await apiRequest(() =>
    axiosInstance.patch("billing/" + id, billing)
  );

  return response;
};
