import { api } from "./api";

interface tipoItemListagem {
  tipoItemID: string;
  nomeTipoItem: string;
}

export async function obterTipoItemPeloNome(nome: string) {
  try {
    const response = await api.get(`TipoItem/nome/${nome}`);
    return response;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
}

export interface tipoItem {
  tipoItemID: string;
  nomeTipoItem: string;
}

export async function listar_tipoItem() {
  try {
    const response = await api.get("TipoItem");

    return response;
  } catch (erro: any) {
    throw new Error(erro.response.data);
  }
}
