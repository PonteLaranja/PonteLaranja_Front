import { api } from "./api";
import { listar_tipoItem } from "./tipoItem";
import { listar_tipoMedida } from "./tipoMedida";

// export interface Transferencia {
//   transferenciaID: string;
//   dataEnvio: string;  // estava em string
//   dataChegada: string; // estava em string
//   unidadeOrigemID: string;
//   unidadeOrigemNome: string;
//   unidadeDestinoID: string;
//   unidadeDestinoNome: string;
//   estadoTransferenciaID: string;
//   itemID: string;
//   itemNome: string; //corrija para nunca retornar nulo
//   itemCategoria: string;
// }


// export interface Transferencia {
//   transferenciaID: string;

//   itemID: string;
//   itemNome: string;

//   quantidade: number;

//   tipoItemID: string;

//   medida: string;

//   usuarioNome: string;

//   unidadeID: string;
//   unidadeDestinoID: string; // NOVO
//   unidadeDestinoNome: string;

//   dataChegada: string;
// }

export interface Transferencia {
  transferenciaID: string;
  dataEnvio: string;
  dataChegada: string | null;

  unidadeOrigemID: string;
  unidadeOrigemNome: string;

  unidadeDestinoID: string;
  unidadeDestinoNome: string;

  estadoTransferenciaID: string;

  itemID: string;
  itemNome: string | null;

  itemCategoria: string;
}

export async function listarLogs() {
  try {
    const response = await api.get("Transferencia");
    console.log(response.data)

    
    return response.data;
  } catch (erro: any) {
    throw new Error(erro.response.data);
  }
}

export async function listarLogs_por_Unidade(
  unidadeId: string,
  tipoItemId?: string,
  faseDoacao?: string,
  dataFiltro?: string,
) {
  try {
    const response = await api.get(
      "Transferencia/log-doacoes" + unidadeId + 
        (tipoItemId || faseDoacao || dataFiltro)
    );
    return response;
  } catch (erro: any) {
    throw new Error(erro.response.data);
  }
}

export async function listarLog_itemId (id:string)
{
  try
  {
    const response = await api.get("Transferencia")
    return response.data
    
    
  }

  catch(erro: any)
  {
    throw new Error(erro.response.data)
  }
}
