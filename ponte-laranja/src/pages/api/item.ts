import { api } from "./api";

export interface Item {
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

export async function adicionarItem(item: Item) {
    try{

        const formData = new FormData

        formData.append("Nome", item.nomeItem)
        formData.append("Recebimento", item.dataRecebimento.toDateString())
        formData.append("Doacao",item.dataDoacao.toDateString())
        formData.append("Medida", item.medida.toString())
        formData.append("Quantidade", item.quantidade.toString())
        formData. append("TipoItem", item.tipoItemID)
        formData. append("TipoMedida", item.tipoMedidaID)
        formData. append("Usuario", item.usuarioID)
        formData. append("Unidade", item.unidadeID)
        
        await api.post("Item", formData)
    }
    catch(error: any){
        throw new Error(error.response.data)

    }
}

export async function listarItens() {
    try
    {
        const response = await api.get("Item")
        console.log(response.data)
        return response.data
    }

    catch(erro: any)
    {
        throw new Error(erro.response.data)
    }
}

export async function listarTipoMedida() {
    try{
        const response = await api.get("TipoMedida")
        return response.data
    }
    catch(erro: any){
        throw new Error(erro.response.data)
    }
}

export async function listarTipoItem() {
    try{
        const response = await api.get("TipoItem")
        return response.data
    }
    catch(erro: any){
        throw new Error(erro.response.data)
    }
}

export async function getUnidade() {
    try{
        const response = await api.get("Unidade")
        return response.data
    }
    catch(erro: any){
        throw new Error(erro.response.data)
    }
}

export async function getUsuario() {
    try{
        const response = await api.get("Usuario")
        return response.data
    }
    catch(erro: any){
        throw new Error(erro.response.data)
    }
}

