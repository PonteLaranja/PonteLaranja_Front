import { api } from "./api";

export interface Item {
  itemID: string;
  nomeItem: string;
  dataRecebimento: Date;
  dataDoacao: Date;
  medida: number;
  quantidade: number;
  tipoItemID: string;
  tipoMedidaID: string;
  usuarioID: string;
  unidadeID: string;
}

export async function listarItens() {
    try
    {
        const response = await api.get("Item")
        console.log(response.data)
        return response
    }

    catch(erro: any)
    {
        throw new Error(erro.response.data)
    }
}

export async function listarItens_Id(id: string)
{

    try{
        const response = await api.get("Item/" + id)
        return response.data
    }

    catch(erro:any)
    {
        throw new Error(erro.response.data)
    }
    
}