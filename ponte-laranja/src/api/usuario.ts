import { api } from "./api";

export interface usuariosListagem {
    usuarioID: string;     
    nome: string;
    email: string;
    dataCriação: string;     
    tipoUsuarioID: string;    
    nomeTipoUsuario: string
}

export async function ListarResponsaveis() {
    try {
        const response = await api.get("Usuario");

        const responsaveis = response.data.filter((unidade: usuariosListagem) => unidade.nomeTipoUsuario === "Responsavel" || unidade.nomeTipoUsuario === "Administrador");

        return responsaveis
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}