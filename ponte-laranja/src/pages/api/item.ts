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






export interface Item2 {
  nome: string;
  coleta: Date;
  doacao: Date;
  medida: number;
  quantidade: number;
  tipoItem: string;
  tipoMedida: string;
  listarUsuario: string;
  listarUnidade: string;
}

export async function adicionarItem(item: Item2) {
    try{

        const formData = new FormData

        formData.append("Nome", item.nome)
        formData.append("Recebimento", item.coleta.toDateString())
        formData.append("Doacao",item.doacao.toDateString())
        formData.append("Medida", item.medida.toString())
        formData.append("Quantidade", item.quantidade.toString())
        formData. append("TipoItem", item.tipoItem)
        formData. append("TipoMedida", item.tipoMedida)
        formData. append("Usuario", item.listarUsuario)
        formData. append("Unidade", item.listarUnidade)
        
        await api.post("Item", formData)
    }
    catch(error: any){
        throw new Error(error.response.data)

    }
}

export async function listarItens2() {
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