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

interface dadosTipoItem {
    tipoItemID: string,
    nomeTipoItem: string
}


type UnidadeFormulario = {
    nomeUnidadeDto: string;
    cepDto: string;
    usuarioResponsavelID: string;
    tipoUnidadeID: string;
};



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

export async function rankPrioridade(dados: dadosTipoItem) {
    try{
        const formData = new FormData();

        formData.append("tipoItemID", dados.tipoItemID);
        formData.append("nomeTipoItem", dados.nomeTipoItem);

        const response = await api.post("Unidade/rank-prioridade", formData)
        return response;
    }catch(error: any) {
        throw new Error(error.response.data);
    }
}