import { apiRequest, axiosInstance } from "../axios";

export const createReservation = async (reservation) => {
  const response = await apiRequest(() => {
    axiosInstance.post("reservation", reservation);
  });
  return response;
};
export const getAllReservations = async () => {
  const response = await apiRequest(() => axiosInstance.get("reservation"));
  return response;
};
export const getReservationById = async (id) => {
  const response = await apiRequest(() =>
    axiosInstance.get("reservation/" + id)
  );
  return response;
};
export const updateReservation = async (id, reservation) => {
  const response = await apiRequest(() =>
    axiosInstance.patch("reservation/" + id, reservation)
  );
  return response;
};
export const deleteReservation = async (id) => {
  const response = await apiRequest(() =>
    axiosInstance.delete("reservation/" + id)
  );
  return response;
};
export const getReservationByUserId = async (id) => {
  const response = await apiRequest(() =>
    axiosInstance.get("reservation/user/" + id)
  );
  return response;
};
