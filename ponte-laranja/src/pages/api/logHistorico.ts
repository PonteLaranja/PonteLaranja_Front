
import { LogDoacao, logTipoItem, logUnidade,
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

