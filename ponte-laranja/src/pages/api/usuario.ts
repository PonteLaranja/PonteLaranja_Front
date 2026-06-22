import { api } from "./api";

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