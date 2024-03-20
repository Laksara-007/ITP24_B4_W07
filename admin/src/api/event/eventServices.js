import { apiRequest, axiosInstance } from "../axios";

export const createEventItem = async(event, id,file) =>{
    const obj = ({
        ...event,
        image: file
    })
    try {
        const response = await apiRequest(()=>
            axiosInstance.post("event",obj));
        return response;
    } catch (error) {}
};

export const getAllEventItems = async () => {
    const response = await apiRequest(()=> axiosInstance.get("event"));
    return response;
};

export const updateEventItem = async (event, id) => {
    const response = await apiRequest(() => axiosInstance.patch("event/" + id, event));

return response;
};

export const deleteEventItem = async (id) => {
    console.log("Ssss ");
    const response = await apiRequest(()=> axiosInstance.delete("event/" + id));
    return response;
};


export const getOneEvent = async (id) => {
const response = await apiRequest(()=>axiosInstance.get("event/" + id))

return response;
}