import { useEffect, useState } from 'react'
import styles from './itens.module.css'
import { listar } from '@/src/pages/api/logHistorico'
import { Search, Calendar, SquarePen  } from 'lucide-react'

type itemMock = {
    logId: string
    itemId: string,
    nomeItem: string,
    quantidade: number,
    unidade: string,
    usuarioDoador: string,
    data: Date
}


export const Item = () => {
    const [log, setLog] = useState<itemMock[]>([])


    async function listagem() {
        const dados = await listar()
        setLog(dados)
    }

    useEffect(() => {
        listagem()
    }, [])


    return (
        <tbody className={styles.corpo_f}>
            {log.map((item) => (
                <tr key={item.logId} className={styles.conteudo}>
                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.item}>
                            <span>{item.logId}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.idade}>
                            <span>{item.nomeItem}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`}>
                            <span>{item.quantidade}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`}>
                            <span>{item.unidade}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`}>
                            <span>{item.usuarioDoador}</span>
                        </div>
                    </td>

                    <td>
                        <div className={`${styles.card} texto_tabela`}>
                            <span>{item.data.toLocaleDateString('pt-BR')}</span>
                        </div>
                    </td>
                    <td>
                        <div className={`${styles.card} texto_tabela`} id={styles.acoes}>
                            <SquarePen className={styles.card2} size={32}/>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}