import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

const api = axios.create({
    baseURL: BASE_URL,
});
//Inicio de sesion
export const loginUser = (username, password) => {
    return api.post("/api/auth/login", { username, password });
};

//Verifica si es super-usuario
export const getUserData = async(token) => {
    const response = await fetch(`${BASE_URL}/api/auth/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    if(!response.ok) {
        throw new Error("No se pudo obtener el usuario");
    }
    return await response.json();
};



//CRUD Nevados
export const getAllNevados = () => {
    return api.get("/api/nevado", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
};

export const createNevados = (nevadoData) => {
    return api.post("/api/nevado", nevadoData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
};
//CRUD TACOS
export const getAllTacos = () => {
    return api.get("/api/taco", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
};

export const createTacos = (tacoData) => {
    return api.post("/api/taco", tacoData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
};

export default api;