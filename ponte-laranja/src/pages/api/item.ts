import { api } from "./api";

export async function listarItens() {
    try
    {
        const response = await api.get("Item")
        console.log(response.data)
        return response
    }

    catch(erro: any)
    {
        throw new Error(erro.response.data)
    }
}

export async function listarItens_Id()
{
    
}