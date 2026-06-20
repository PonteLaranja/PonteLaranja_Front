import { useEffect, useState } from 'react'
import styles from './itens.module.css'
import { listarDoacao } from '@/src/pages/api/logHistorico'
import { Search, Calendar, SquarePen } from 'lucide-react'
import { LogDoacao } from '@/src/pages/api/logHistoricoMock'

type propsList = {
    page?: string
}

type itemMock = {
    logId: string;
    itemId: string;
    nomeItem: string;
    quantidade: number;
    tipoMedida: string;
    unidade: string;
    usuarioDoador: string;
    data: Date;
    page?: string
}


type itemMockv2 = LogDoacao



export const ItemV2 =
    ({
        page, logId,
        itemId, nomeItem,
        quantidade, tipoMedida,
        usuarioDoador, data,
        unidade,
    }: itemMock) => {
        
        const [log, setLog] = useState<itemMockv2[]>([])



        async function listagem() {
            const dados = await listarDoacao()
            setLog(dados)
        }

        useEffect(() => {
            listagem()
        }, [])


        return (
            <>
                {page == "itensDoados" && (

                    // log.map((item) => (
                    // log.map((item) => (
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