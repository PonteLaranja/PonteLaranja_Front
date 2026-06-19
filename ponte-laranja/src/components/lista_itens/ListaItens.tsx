import Link from 'next/link'
import styles from './listaItens.module.css'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { listar } from '@/src/pages/api/logHistorico'
import ReactPaginate from 'react-paginate'
import { Item } from '../itens/Itens'
import { ItemV2 } from '../itens/ItensProps'

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
                            <th className={`texto_tabela`}><span>Nome do Item</span></th>
                            <th className={`texto_tabela`}><span>Medida</span></th>
                            <th className={`texto_tabela`}><span>Quantidade</span></th>
                            <th className={`texto_tabela`}><span>Unidade</span></th>
                            <th className={`texto_tabela`}><span>Usuário Doador</span></th>
                            <th className={`texto_tabela`}><span>Data</span></th>
                            <th className={`texto_tabela`}><span>Ações</span></th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpo_f}>
                        {/* <Item /> */}
                        <ItemV2 page="itensDoados" />
                    </tbody>
                    {/* <tfoot className={styles.tFooter}>

                        <tr>
                            <td colSpan={3}>
                            <ul className={styles.paginacao}>
                                <li><ChevronLeft size={20}/></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li><ChevronRight size={20}/></li>
                            </ul>
                            </td>
                        </tr>
                    </tfoot> */}
                </table>
                        <ReactPaginate 
                        breakLabel="..."
                        previousLabel={<ChevronLeft size={40} />}
                        onPageChange={alterarPagina}
                        pageRangeDisplayed={itensAtuais}
                        renderOnZeroPageCount={null}
                        pageClassName={styles.pagina}
                        pageLinkClassName={styles.pagina_link}
                        previousClassName={styles.pagina}
                        nextClassName={styles.pagina}
                        activeClassName={styles.ativo}
                        nextLabel={<ChevronRight size={40} />}
                        pageCount={paginas}
                        
                        />
            </section>
        </>
    )
}