import { api } from "./api";

interface unidadeListagem {
  unidadeDto: string;
  nomeUnidadeDto: string;
  cepDto: string;
  usuarioResponsavelDto: string;
  nomeResponsavelDto: string;
  tipoUnidadeDto: string;
  nomeTipoUnidadeDto: string;
  ativo : boolean
}

export interface unidadeFormulario {
  nomeUnidadeDto: string;
  cepDto: string;
  usuarioResponsavelDto: string; 
  tipoUnidadeDto: string;        
}

export async function listarUnidade() {
    try {
        const response = await api.get("Unidade");

        console.log(response);

        const unidadesAtivas = response.data.filter((unidade: unidadeListagem) => unidade.ativo === true);

        return unidadesAtivas
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function cadastrarUnidade(dados: unidadeFormulario){
    try{
        await api.post("Unidade", dados);

    }catch(error: any){
        throw new Error(error.response.data)
    }
}