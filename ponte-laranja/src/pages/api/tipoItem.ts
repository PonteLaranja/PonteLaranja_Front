import { api } from "./api";

export interface tipoItem {
    tipoItemID: string,
    nomeTipoItem: string
}

export async function listar_tipoItem()
{
    try
    {
        const response = await api.get("TipoItem")
        
        return response
    }

    catch(erro: any)
    {
        throw new Error(erro.response.data)
    }
}