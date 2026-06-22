import { api } from "./api";

type formsUsuario = {
    nome: string,
    senha: string,
    email: string;
    tipoUsuarioID: string
}

export async function cadastroUsuario(dados: formsUsuario ) {
    try{
        const formData = new FormData;

        formData.append("nome", dados.nome)
        formData.append("senha", dados.senha)
        formData.append("email", dados.email)
        formData.append("tipoUsuarioID", dados.tipoUsuarioID)
        
        console.log(formData)
        await api.post("Usuario", formData);
    }
    catch(error: any){
        throw new Error("Email ou senha inválidos");
        console.log(error.response.data)
    }
}