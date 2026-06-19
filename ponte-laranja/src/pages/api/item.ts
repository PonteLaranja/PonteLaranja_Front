import { Item, ItensMock } from "./itemMock";


export async function listarItens(): Promise<Item[]>{
    return new Promise((teste) => {
        teste(ItensMock)
    })
}