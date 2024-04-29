import { async } from "@firebase/util";
import { apiRequest, axiosInstance } from "../axios";

export const createMenuItem = async (menu, id) => {
  
  try {
    const response = await apiRequest(() => axiosInstance.post("menu", menu));
    return response;
  } catch (error) {}
};
export const getAllMenuItems = async () => {
  const response = await apiRequest(() => axiosInstance.get("menu"));

  return response;
};

export const updateMenuItem = async (menu, id) => {
  const response = await apiRequest(() =>
    axiosInstance.patch("menu/" + id, menu)
  );

  return response;
};
/*export const updateMenuItem = async (menu, id) => {
    const response = await apiRequest(() => axiosInstance.patch("menu/" + id, menu));

    return response;
};*/

export const deleteMenuItem = async (id) => {
  const response = await apiRequest(() => axiosInstance.delete("menu/" + id));
  return response;
};

export const getOneMenu = async (id) => {
  const response = await apiRequest(() => axiosInstance.get("menu/" + id));
  return response;
};

export const getAllOrders = async () => {
  return await apiRequest(() => axiosInstance.get("menu/order"))
}

export const updateOrderService = async (id, obj) => {
  const response = await apiRequest(() => axiosInstance.patch("menu/order/" + id, obj))
  return response
}

export const createOrder= async (order) => {
    const response = await apiRequest(() => axiosInstance.post("menu/order/", order));
    return response;
};