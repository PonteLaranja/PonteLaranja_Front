import { api } from "./api";

export async function listar_tipoMedida()
{
    try
    {
        const response = await api.get("TipoMedida")
        
        return response
    }

    catch(erro: any)
    {
        throw new Error(erro.response.data)
    }
}