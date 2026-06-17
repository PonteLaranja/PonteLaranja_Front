import styles from './listaItens.module.css'
import { Search, Calendar } from 'lucide-react'
export const Banner = () => {

    return (
        <>
            <section className={styles.filtros}>
                <h1>Histórico de Itens</h1>
                <div className={styles.pesquisas}>
                    <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Unidades selecionadas</option></select>
                    <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Unidades selecionadas</option></select>
                    {/* <label htmlFor="" className={styles.inserir_pesq}> */}
                    <div className={`${styles.inserir_pesq} ${styles.search}`}>
                        <input type="text" placeholder='Pesquisa' className={styles.input} />
                        <Search size={30} className={styles.icon} />
                    </div>
                    {/* </label> */}

                    {/* <label className={styles.inserir_pesq}> */}
                    <input type="date" className={styles.inserir_pesq} id={styles.inserir_data} />
                    {/* </label> */}
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
                        </tr>
                    </thead>
                    <tbody className={styles.corpo_f}>
                        <tr>
                            <td colSpan={6} className={styles.separador}></td>
                        </tr>
                        <tr className={styles.conteudo}>
                            <td><div className={`${styles.card} texto_tabela`}><span>144444</span> </div></td>
                            <td><div className={`${styles.card} texto_tabela`}><span>Pacote de Arroz</span>             </div></td>
                            <td><div className={`${styles.card} texto_tabela`}><span>12</span>                          </div></td>
                            <td><div className={`${styles.card} texto_tabela`}><span>1.34 - São Caetano do Sul</span>   </div></td>
                            <td><div className={`${styles.card} texto_tabela`}><span>Caique Zanetti</span>              </div></td>
                            <td><div className={`${styles.card} texto_tabela`}><span>14/05/2026 </span>                 </div></td>
                        </tr>
                        {/* Conteudo máximo sem quebrar é 6, faça paginate de 5 ent */}
                    </tbody>
                </table>
            </section>
        </>
    )
}