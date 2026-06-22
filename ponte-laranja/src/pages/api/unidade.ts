import { api } from "./api";

export type UnidadeList = {
  unidadeDto: string;
  nomeUnidadeDto: string,
  ativo: boolean,
  cepDTO: string,
  usuarioResponsavelDto: string
  nomeResponsavelDto: string,
  tipoUnidadeDto: string,
  nomeTipoUnidadeDto: string  
};


export type UnidadePost = {
  unidadeDto: string;
  nomeUnidadeDto: string,
  ativo: boolean,
  cepDTO: string,
  usuarioResponsavelDto: string
  nomeResponsavelDto: string,
  tipoUnidadeDto: string,
  nomeTipoUnidadeDto: string  
}

export async function listarUnidades() {
  try {
    const response = await api.get("Unidade");

    return response;
  } catch (erro: any) {
    throw new Error(erro.response.data);
  }
}

export async function listarUnidade_ID(id: string) {

  try
  {
    const response = await api.get("Unidade " + id)
    return response.data
  }

  catch(erro: any)
  {
    throw new Error(erro.response.data)
  }

}
