
import { LogDoacao, logsMock } from "./logHistoricoMock";


export async function listar(): Promise<LogDoacao[]>{
    return new Promise((teste) => {
        teste(logsMock)
    })
}