export default {
    /**
     * @function getHTTPError
     * @param {Object} response - Objeto de respuesta de Axios.
     * @param {number} [response.status] - Código de estado HTTP de la respuesta.
     * @description
     * Maneja errores HTTP según el código de estado de la respuesta.
     */
    getHttpError(response: any) {
        if (response?.status === 404) {
            alert("Error 404, ruta no existe");
        }
    }
}