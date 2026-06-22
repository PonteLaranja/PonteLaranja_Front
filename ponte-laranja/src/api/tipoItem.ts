import { api } from "./api";

export async function obterTipoItemPeloNome(nome: string) {
    try {
        const response = await api.get(`TipoItem/nome/${nome}`);
        return response
    } 
    catch (error: any) {
        throw new Error(error.response.data);
    }
}

