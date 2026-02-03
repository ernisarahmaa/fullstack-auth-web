import api from "./api";

export const login = (data) => api.post("/login", data);
export const signup = (data) => api.post("/signup", data);
export const logout = () => api.post("/logout");
export const checkAuth = () => api.get("/dashboard");
