import { apiRequest, axiosInstance } from "../axios";

export const createPackage = async (packages) => {
  const response = await apiRequest(() => {
    axiosInstance.post("package", packages);
  });
  return response;
};

export const getAllPackages = async () => {
  const response = await apiRequest(() => axiosInstance.get("package"));
  return response;
};

export const updatePackage = async (packages, id) => {
  const response = await apiRequest(() =>
    axiosInstance.patch("package/" + id, packages)
  );
  return response;
};

export const deletePackage = async (id) => {
  const response = await apiRequest(() =>
    axiosInstance.delete("package/" + id)
  );
};

export const getOnePackage = async (id) => {
  const response = await apiRequest(() => axiosInstance.get("package/" + id));
  return response;
};