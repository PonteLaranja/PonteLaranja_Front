import { api } from "./api";
import { listar_tipoItem } from "./tipoItem";
import { listar_tipoMedida } from "./tipoMedida";

export async function listarLogs() {
  try {
    const response = await api.get("Transferencia");
    console.log(response.data)

    
    return response;
  } catch (erro: any) {
    throw new Error(erro.response.data);
  }
}

export async function listarLogs_por_Unidade(
  unidadeId?: string,
  tipoItemId?: string,
  faseDoacao?: string,
  dataFiltro?: string,
) {
  try {
    const response = await api.get(
      "Transferencia/log-doacoes" +
        (unidadeId || tipoItemId || faseDoacao || dataFiltro),
    );
    return response;
  } catch (erro: any) {
    throw new Error(erro.response.data);
  }
}
