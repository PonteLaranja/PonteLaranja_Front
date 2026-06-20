import { useEffect, useState } from 'react'
import styles from './itens.module.css'
import { listarDoacao } from '@/src/pages/api/logHistorico'
import { Search, Calendar, SquarePen } from 'lucide-react'
import { LogDoacao } from '@/src/pages/api/logHistoricoMock'

type itemMockv2 = LogDoacao


export const Item = () => {
    // const [log, setLog] = useState<itemMock[]>([])
    const [log, setLog] = useState<itemMockv2[]>([])
    


    async function listagem() {
        const dados = await listarDoacao()
        setLog(dados)
    }

    useEffect(() => {
        listagem()
    }, [])


    return (
        // <tbody className={styles.corpo_f}>
        <>
            {log.map((item) => (
                <tr key={item.logId} className={styles.conteudo}>
                    {/* <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.item}>
                            <span>{item.itemId}</span>
                        </div>
                    </td> */}

                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.idade}>
                            <span>{item.nomeItem}</span>
                        </div>
                    </td>
                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.tipoMedida}>
                            <span>{item.tipoMedida}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.quantidade}>
                            <span>{item.quantidade}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.unidade}>
                            <span>{item.unidade}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.usuarioDoador}>
                            <span>{item.usuarioDoador}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.data}>
                            <span>{item.data.toLocaleDateString('pt-BR')}</span>
                        </div>
                    </td>
                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.acoes}>
                            <SquarePen className={styles.card2} size={30} />
                        </div>
                    </td>

                </tr>
            ))}
        </>

    )
}