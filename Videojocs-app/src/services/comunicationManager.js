import axios from "axios";

// Instància d'Axios preconfigurada
const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY
  }
});

// 🔎 1) Buscar TOTS els jocs
export async function getAllGames() {
  try {
    const response = await api.get("/games");
    return response.data.results; // només retornem la llista
  } catch (error) {
    console.error("Error obtenint tots els jocs:", error);
    throw error;
  }
}

// 🗂️ 2) Buscar totes les categories (gèneres)
export async function getGenres() {
  try {
    const response = await api.get("/genres");
    return response.data.results;
  } catch (error) {
    console.error("Error obtenint els gèneres:", error);
    throw error;
  }
}