import { api } from "./api";

export interface TipoUsuarioListar{
    id: string,
    nomeTipoUsuario: string
}
export async function listarTipoUsuario() {
    try
    {
        const response = await api.get("TipoUsuario")
        return response.data
    }

    catch(erro: any)
    {
        throw new Error(erro.response.data)
    }
}