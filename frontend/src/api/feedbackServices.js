import { apiRequest, axiosInstance } from "./axios";

export const createFeedbacks = async (data) => {
    return await apiRequest(() => axiosInstance.post("feedbacks", data));
}