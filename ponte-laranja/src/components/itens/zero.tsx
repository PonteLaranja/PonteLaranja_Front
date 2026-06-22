import { useEffect, useState } from 'react'
import styles from './itens.module.css'
import { listarDoacao } from '@/src/pages/api/logHistorico'
import { Search, Calendar, SquarePen } from 'lucide-react'
import { LogDoacao } from '@/src/pages/api/logHistoricoMock'
import { listarLogs, listarLogs_por_Unidade, Transferencia } from "@/src/pages/api/logHistoricov2";
import { Item, listarItens_Id } from '@/src/pages/api/item'
import { TransferenciaTabela } from '../lista_itens/ListaItens'

type propsList = {
    page?: string
}

interface itemAPI extends Transferencia {
    page?: "itensDoados" | "itensRecebidos" | "itensUnidade";
}

interface itemAPI2 extends TransferenciaTabela{
    page?: "itensDoados" | "itensRecebidos" | "itensUnidade";

}

interface logAPI extends TransferenciaTabela {
    page?: "itensDoados" | "itensRecebidos" | "itensUnidade"
}




export const ItemZero =
    (
        //     {
        //     page, logId,
        //     itemId, nomeItem,
        //     quantidade, tipoMedida,
        //     usuarioDoador, data,
        //     unidade,
        // }: itemMock) => 
        {
    itemID,
    itemNome,
    itemCategoria,
    quantidade,
    usuarioID,
    unidadeDestinoNome,
    dataEnvio,
    page
        }: itemAPI2) => {

        // const [item, setItem] = useState<Item[]>([])
        // const [log, setLog] = useState<Transferencia[]>([])

        // async function listarLog()
        // {
        //     const dados = await listarLogs()

        // }

        // async function listagemItem() {
        //     const dados = await listarItens_Id(itemID)
        //     setItem(dados)
        // }

        // useEffect(() => {
        //     listagemItem()
        // }, [itemID])
        // log.map((item) => (
        // log.map((item) => (
        // <tr key={itemID}className={styles.conteudo}> //curiosamente está faltando key porque nao existe log com primarykey


        return (
            <>
            
                {page == "itensDoados" && (

                    <tr key={itemID} className={styles.conteudo}>



                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.nomeItem}>
                                <span id={styles.textoT}>{itemNome}</span>
                            </div>
                        </td>
                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.tipoMedida}>
                                <span>{itemCategoria}</span>
                            </div>
                        </td>

                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.quantidade}>
                                <span>{quantidade}</span>
                            </div>
                        </td>

                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.unidade}>
                                <span id={styles.teste}>{unidadeDestinoNome}</span>
                            </div>
                        </td>

                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.usuarioDoador}>
                                
                                <span>{usuarioID}</span>
                            </div>

                        </td>

                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.data}>
                                <span>{dataEnvio ? new Date(dataEnvio).toLocaleDateString('pt-BR') 
                                : '-'}</span>
                            </div>
                        </td>
                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.acoes}>
                                <SquarePen className={styles.card2} size={30} />
                            </div>
                        </td>

                    </tr>
                    // ))
                )}

               

                    


            </>

        )
    }