import { api } from "./api";


export async function listarUsuario() {
    // console.log("vamo la")
    try
    {
        
        const response = await api.get("Usuario")
        // console.log(response)
        return response.data
    }
    
    catch(erro: any)
    {
        // console.log("teste22")
        throw new Error(erro.response.data)
        console.log(erro.response.data)
    }
}

export type listUsuario = {
    usuarioID: string,
    nome: string
}

type formsUsuario = {
    nome: string,
    senha: string,
    email: string;
    tipoUsuarioID: string
}

export async function cadastroUsuario(dados: formsUsuario ) {
    try{
        const response = await api.post("Usuario", dados)
        return response.data
    }
    catch(error: any){
        throw new Error("Email ou senha inválidos");
        console.log(error.response.data)
    }
}



export interface usuariosListagem2 {
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

        const responsaveis = response.data.filter((unidade: usuariosListagem2) => unidade.nomeTipoUsuario === "Responsavel" || unidade.nomeTipoUsuario === "Administrador");

        return responsaveis
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}