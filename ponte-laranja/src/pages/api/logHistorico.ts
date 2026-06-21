
import { LogDoacao, LogDoacao2, logMocksV3, logTipoItem, logUnidade,
        logsMockItem, logsMockTipoItem, logsMockUnidade  } from "./logHistoricoMock";


export async function listarDoacao(): Promise<LogDoacao[]>{
    return new Promise((teste) => {
        teste(logsMockItem)
    })
}

export async function listar_tipoItem(): Promise<logTipoItem[]>
{
    return new Promise((teste) => teste(logsMockTipoItem))
}

export async function listarUnidade(): Promise<logUnidade[]> {
    return new Promise((teste) => teste(logsMockUnidade))
}


export async function listarDoacaoV2(): Promise<LogDoacao2[]>{
    return new Promise((teste) => {
        const resultado = logMocksV3.map(item => {
            const unidade = logsMockUnidade.find(unidade => unidade.unidadeId === item.unidadeId)

            const tipoItem = logsMockTipoItem.find(tipoItem => tipoItem.tipoItemId === item.tipoItemId)
            console.log(unidade)
            return {
                ...item,

                unidade: unidade?.unidadeNome ?? "Unidade not found",

                tipoItem: tipoItem?.tipoItemNome ?? "Tipo não encontrado"
            }
        })

        teste(resultado)
        // teste(logMocksV3)
    })
}

