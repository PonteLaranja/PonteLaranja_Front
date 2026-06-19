import { useEffect, useState } from 'react'
import styles from './itens.module.css'
import { listar } from '@/src/pages/api/logHistorico'
import { SquarePen } from 'lucide-react'
import { listarItens } from '@/src/pages/api/item'
import { usePathname } from 'next/navigation'


type itemMock = {
    logId: string
    itemId: string
    nomeItem: string
    quantidade: number
    unidade: string
    usuarioDoador: string
    data: Date
}


type itemMock2 = {
    itemId: string
    nomeItem: string
    quantidade: number
    unidade: string
    tipoItem: string
    usuarioDoador: string
    nomeUnidade: string
    data: Date
}



export const Item = () => {

    const pathname = usePathname();

    const [log, setLog] = useState<itemMock[]>([])
    const [item, setItem] = useState<itemMock2[]>([])


    async function listagem() {
        const dados = await listar()
        setLog(dados)
    }


    async function listagemItens() {
        const dados = await listarItens()
        setItem(dados)
    }


    useEffect(() => {
        listagem()
        listagemItens()
    }, [])



    return (

        pathname === "/historico_item" ? (

            <tbody className={styles.corpo_f}>

                {log.map((item) => (

                    <tr 
                        key={item.logId} 
                        className={styles.conteudo}
                    >

                        <td>
                            <div className={`${styles.card} texto_tabela`}>
                                {item.logId}
                            </div>
                        </td>


                        <td>
                            <div className={`${styles.card} texto_tabela`}>
                                {item.nomeItem}
                            </div>
                        </td>


                        <td>
                            <div className={`${styles.card} texto_tabela`}>
                                {item.quantidade}
                            </div>
                        </td>


                        <td>
                            <div className={`${styles.card} texto_tabela`}>
                                {item.unidade}
                            </div>
                        </td>


                        <td>
                            <div className={`${styles.card} texto_tabela`}>
                                {item.usuarioDoador}
                            </div>
                        </td>


                        <td>
                            <div className={`${styles.card} texto_tabela`}>
                                {new Date(item.data).toLocaleDateString('pt-BR')}
                            </div>
                        </td>


                        <td>
                            <div 
                                className={`${styles.card} texto_tabela`}
                                id={styles.acoes}
                            >
                                <SquarePen 
                                    className={styles.card2} 
                                    size={32}
                                />
                            </div>
                        </td>


                    </tr>

                ))}

            </tbody>


        ) : pathname === "/itensUnidade" ? (


            <tbody className={styles.corpo_f}>

                {item.map((item) => (

                    <tr 
                        key={item.itemId}
                        className={styles.conteudo}
                    >

                        <td>
                            <div className={styles.card}>
                                {item.itemId}
                            </div>
                        </td>


                        <td>
                            <div className={styles.card}>
                                {item.nomeItem}
                            </div>
                        </td>


                        <td>
                            <div className={styles.card}>
                                {item.quantidade}
                            </div>
                        </td>


                        <td>
                            <div className={styles.card}>
                                {item.tipoItem}
                            </div>
                        </td>


                        <td>
                            <div className={styles.card}>
                                {item.usuarioDoador}
                            </div>
                        </td>


                        <td>
                            <div className={styles.card}>
                                {new Date(item.data).toLocaleDateString('pt-BR')}
                            </div>
                        </td>


                    </tr>

                ))}


            </tbody>


        ) : null

    )

}