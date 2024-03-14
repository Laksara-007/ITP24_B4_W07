import { apiRequest, axiosInstance } from "./axios";

export const getAllMenuItems = async () => {
  const response = await apiRequest(() => axiosInstance.get("menu"));

  return response;
};

export const createOrder= async (order) => {
    const response = await apiRequest(() => axiosInstance.post("menu/order/", order));
    return response;
};