import { apiRequest, axiosInstance } from "../axios";

export const getAllRooms = async () => {
  const response = await apiRequest(() =>
    axiosInstance.get("http://localhost:5000/api/v1/room")
  );
  return response;
};

export const createRoom = async (data) => {
  return await apiRequest(() =>
    axiosInstance.post("http://localhost:5000/api/v1/room", data)
  );
};

export const updateRoom = async (data, id) => {
  return await apiRequest(() =>
    axiosInstance.patch("http://localhost:5000/api/v1/room/" + id, data)
  );
};

export const deleteRoom = async (id) => {
  return await apiRequest(() =>
    axiosInstance.delete("http://localhost:5000/api/v1/room/" + id)
  );
};
