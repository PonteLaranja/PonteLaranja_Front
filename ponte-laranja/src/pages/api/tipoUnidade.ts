import { api } from "./api";

export async function listarTipoUnidade() {
    try {
        const response = await api.get("TipoUnidade");

        return response.data
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}