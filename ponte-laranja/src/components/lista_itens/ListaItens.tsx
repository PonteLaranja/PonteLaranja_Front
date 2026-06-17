import Link from 'next/link'
import styles from './listaItens.module.css'
import { Search, Calendar, SquarePen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { listar } from '@/src/pages/api/logHistorico'
import ReactPaginate from 'react-paginate'

type itemMock = {
    logId: string
    itemId: string,
    nomeItem: string,
    quantidade: number,
    unidade: string,
    usuarioDoador: string,
    data: Date
}

export const Banner = () => {

        const [log, setLog] = useState<itemMock[]>([])
        const [primeiroItem, setPrimeiroItem] = useState(0)
        const [pesquisa, setPesquisa] = useState("")
        const numItem = 5
        const ultimoItem = primeiroItem + numItem
        const itensAtuais = log.slice(primeiroItem, ultimoItem)
        const paginas = Math.ceil(log.length / numItem)
            const alterarPagina = (event: any) => {
                const newOffSet = (event.selected * numItem) % log.length

                setPrimeiroItem(newOffSet)
            }

        // const itensFiltrados = log.filter((logs) => logs.)
    
        async function listagem() {
            const dados = await listar()
            setLog(dados)
        }
    
        useEffect(() => {
            listagem()
        }, [])
    return (
        <>
            <Link href={""}></Link>
            <section className={styles.filtros}>
                <h1>Histórico de Itens</h1>
                <div className={styles.pesquisas}>
                    <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Unidades selecionadas</option></select>
                    <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Unidades selecionadas</option></select>

                    <div className={`${styles.inserir_pesq} ${styles.search}`}>
                        <input type="text" placeholder='Pesquisa' className={styles.input} />
                        <Search size={30} className={styles.icon} />
                    </div>



                    <input type="date" className={styles.inserir_pesq} id={styles.inserir_data} />

                </div>
            </section>

            <section className={styles.secao_tabelas}>
                <table className={styles.lista_tabelas}>
                    <thead className={styles.cabecalho_tabelas}>
                        <tr className={styles.cabecalho_linha}  >
                            <th className={`texto_tabela`}><span>ID</span></th>
                            <th className={`texto_tabela`}><span>Nome do Item Doado</span></th>
                            <th className={`texto_tabela`}><span>Quantidade</span></th>
                            <th className={`texto_tabela`}><span>Unidade</span></th>
                            <th className={`texto_tabela`}><span>Usuário Doador</span></th>
                            <th className={`texto_tabela`}><span>Data</span></th>
                            <th className={`texto_tabela`}><span>Ações</span></th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpo_f}>
                        {/* <tr>
                            <td colSpan={6} className={styles.separador}></td>
                        </tr> */}
                        <tr className={styles.conteudo}>
                            <td><div className={`${styles.card} texto_tabela`}><span>144444</span> </div></td>
                            <td><div className={`${styles.card} texto_tabela`} id={styles.item}><span>Pacote de Arroz</span>             </div></td>
                            <td><div className={`${styles.card} texto_tabela`} id={styles.idade}><span>12</span>                          </div></td>
                            <td><div className={`${styles.card} texto_tabela`}><span>1.34 - São Caetano do Sul</span>   </div></td>
                            <td><div className={`${styles.card} texto_tabela`}><span>Caique Zanetti</span>              </div></td>
                            <td><div className={`${styles.card} texto_tabela`}><span>14/05/2026 </span>                 </div></td>
                            <td><div className={`${styles.card} texto_tabela`} id={styles.acoes}> <Link href={""} className={`link`}><SquarePen className={styles.card2} size={32} /></Link> </div></td>
                        </tr>
                        {/* Conteudo máximo sem quebrar é 5, faça paginate de 4 ent */}
                        {/* <Link href={""}><SquarePen className={styles.card2} size={32} /><Link /> */}
                    </tbody>
                </table>
            </section>
        </>
    )
}