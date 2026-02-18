import api from "./api";

export const getSkills = () => api.get("/skill");
export const createSkill = (payload) => api.post("/skill", payload);
export const deleteSkill = (id) => api.delete(`/skill/${id}`);
export const updateSkill = (id, payload) => api.put(`/skill/${id}`, payload);
