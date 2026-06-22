import { api } from "./api";

export type Unidade = {
  unidadeDto: string;
  nomeUnidadeDto: string
};

export async function listarUnidades() {
  try {
    const response = await api.get("Unidade");

    return response;
  } catch (erro: any) {
    throw new Error(erro.response.data);
  }
}

export async function listarUnidade_ID(id: string) {}
