import Unidade from '../unidade/unidade'
import styles from './listaUnidade.module.css'
import { Search, Calendar } from 'lucide-react'
export const ListaUnidade = () => {

    

    return (
        <>
            <section className={styles.filtros}>
                <h1>Unidades</h1>
                <div className={styles.pesquisas}>
                    <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Tipo unidade</option></select>
                    <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Item</option></select>
                    {/* <label htmlFor="" className={styles.inserir_pesq}> */}
                    <div className={`${styles.inserir_pesq} ${styles.search}`}>
                        <input type="text" placeholder='Pesquisa' className={styles.input} />
                        <Search size={30} className={styles.icon} />
                    </div>
                    {/* </label> */}

                </div>
            </section>

            <section className={styles.secao_tabelas}>
                <table className={styles.lista_tabelas}>
                    <thead className={styles.cabecalho_tabelas}>
                        <tr className={styles.cabecalho_linha}  >
                            <th className={`texto_tabela`}><span>ID</span></th>
                            <th className={`texto_tabela`}><span>Nome Unidade</span></th>
                            <th className={`texto_tabela`}><span>CEP</span></th>
                            <th className={`texto_tabela`}><span>Responsavel</span></th>
                            <th className={`texto_tabela`}><span>Tipo Unidade</span></th>
                            <th className={`texto_tabela`}><span>Necessidade</span></th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpo_f}>
                        <tr>
                            <td colSpan={6} className={styles.separador}></td>
                        </tr>
                        <Unidade/>
                        {/* Conteudo máximo sem quebrar é 6, faça paginate de 5 ent */}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default ListaUnidade