import { api } from "./api";


export async function listar() {
    try
    {
        const response = await api.get("Item")
        return response.data
    }

    catch(erro: any)
    {
        throw new Error(erro.response.data)
    }
}