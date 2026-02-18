import api from "./api";

export const getExperience = () => api.get("/experience");
export const deleteExperience = (id) => api.delete(`/experience/${id}`);
export const createExperience = (payload) => api.post("/experience", payload);
export const updateExperience = (id, data) => api.put(`/experience/${id}`, data);
