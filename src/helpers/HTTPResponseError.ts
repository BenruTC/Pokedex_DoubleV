export default {
    getHttpError(response: any) {
        if (response?.status === 404) {
            alert("Error 404, ruta no existe");
        }
    }
}