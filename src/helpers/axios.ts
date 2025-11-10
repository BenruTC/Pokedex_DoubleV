import axios from "axios";
import HTTPResponseError from "@/helpers/HTTPResponseError";

const base_URL = import.meta.env.VITE_URL_BASE;

const pokemonAPI = axios.create({
  baseURL: base_URL,
});

pokemonAPI.interceptors.request.use((config: any) => {
  return config;
});

/**
 * Interceptor de response
 * @description Devuelve la respuesta si es exitosa. En caso de error:
 * - Verifica si hay conexión a Internet.
 * - Llama al helper `HTTPResponseError` para manejo de errores HTTP.
 */
pokemonAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const isOnline = navigator.onLine;
    if (!isOnline) {
      alert("type: error \n Error process! \n No internet connection")
    }
    HTTPResponseError.getHTTPError(error?.response);
    return Promise.reject(error);
  }
);
export default pokemonAPI;
