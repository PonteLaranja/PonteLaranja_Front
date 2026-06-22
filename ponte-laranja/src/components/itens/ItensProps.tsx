import { useEffect, useState } from 'react'
import styles from './itens.module.css'
import { listarDoacao } from '@/src/pages/api/logHistorico'
import { Search, Calendar, SquarePen } from 'lucide-react'
import { LogDoacao } from '@/src/pages/api/logHistoricoMock'
import { listarLogs, listarLogs_por_Unidade, Transferencia } from "@/src/pages/api/logHistoricov2";
import { Item, listarItens_Id } from '@/src/pages/api/item'

type propsList = {
    page?: string
}

interface itemAPI extends Transferencia {
    page?: "itensDoados" | "itensRecebidos" | "itensUnidade";
}

interface logAPI extends Transferencia {
    page?: "itensDoados" | "itensRecebidos" | "itensUnidade"
}




export const ItemV2 =
    (
        //     {
        //     page, logId,
        //     itemId, nomeItem,
        //     quantidade, tipoMedida,
        //     usuarioDoador, data,
        //     unidade,
        // }: itemMock) => 
        {
            itemID, dataChegada,

            itemNome, transferenciaID, unidadeDestinoID,
            itemCategoria, 
            unidadeDestinoNome, page
        }: itemAPI) => {

        const [item, setItem] = useState<Item[]>([])

        // const [log, setLog] = useState<itemMockv2[]>([])
        const [log, setLog] = useState<Transferencia[]>([])



        // function transformar() {
        //     if (itemCategoria === "Roupa")
        //         return "oi"

        //     else if (itemCategoria === "Alimento")
        //         return "oi"
        //     else if (itemCategoria === "Roupa")
        //         return ""
        // }

        async function listagemItem() {
            // const dados = await listarDoacao()
            // const dados = await listarLogs()
            // setLog(dados)

            // const itemEncontrado: Item[] = []
            // for (const transferencia of dados) {
            //     const item = await listarItens_Id(transferencia.itemID);
            //     itemEncontrado.push(item);
            // }

            // setItem(itemEncontrado);

            const dados = await listarItens_Id(itemID)
            setItem(dados)
        }

        useEffect(() => {
            listagemItem()
        }, [itemID])


        return (
            <>
                {page == "itensDoados" && (

                    // log.map((item) => (
                    // log.map((item) => (
                    // <tr key={itemID}className={styles.conteudo}> //curiosamente está faltando key porque nao existe log com primarykey
                    <tr className={styles.conteudo}>



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
                                <span id={styles.teste}>{unidade}</span>
                            </div>
                        </td>

                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.usuarioDoador}>
                                <span>{usuarioDoador}</span>
                            </div>
                        </td>

                        <td>
                            <div className={`${styles.card} texto_tabela`} id={styles.data}>
                                <span>{data.toLocaleDateString('pt-BR')}</span>
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

                {/* Itens da Unidade ! */}
                {page === "itensUnidade" && (
                    log.map((item) => (
                        <tr key={logId} className={styles.conteudo}>


                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.idade}>
                                    <span>{nomeItem}</span>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.tipoMedida}>
                                    <span>{tipoMedida}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.quantidade}>
                                    <span>{quantidade}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.unidade}>
                                    <span>{unidade}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.usuarioDoador}>
                                    <span>{usuarioDoador}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.data}>
                                    <span>{data.toLocaleDateString('pt-BR')}</span>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.acoes}>
                                    <SquarePen className={styles.card2} size={30} />
                                </div>
                            </td>

                        </tr>
                    ))
                )}


                {/* Itens recebidos != Itens doados */}

                {page === "itensRecebidos" && (
                    log.map((item) => (
                        <tr key={logId} className={styles.conteudo}>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.idade}>
                                    <span>{nomeItem}</span>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.tipoMedida}>
                                    <span>{tipoMedida}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.quantidade}>
                                    <span>{quantidade}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.unidade}>
                                    <span>{unidade}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.usuarioDoador}>
                                    <span>{usuarioDoador}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.data}>
                                    <span>{data.toLocaleDateString('pt-BR')}</span>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.acoes}>
                                    <SquarePen className={styles.card2} size={30} />
                                </div>
                            </td>

                        </tr>
                    ))
                )}


            </>

        )
    }