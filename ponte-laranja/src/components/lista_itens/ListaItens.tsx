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

            {/* <section className={styles.lista_tabelas}> */}
            <table className={styles.lista_tabelas}>
                <thead className={styles.cabecalho_tabelas}>
                    <tr className={styles.cabecalho_linha}  >
                        <th>ID</th>
                        <th>Nome do Item Doado</th>
                        <th>Quantidade</th>
                        <th>Unidade</th>
                        <th>Usuário Doador</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody className={styles.corpo_f}>
                    <tr>
                        <td colSpan={6} className={styles.separador}></td>
                    </tr>
                    <tr>
                        <td>144444</td>
                        <td>Pacote de Arroz</td>
                        <td>12</td>
                        <td>1.34 - São Caetano do Sul</td>
                        <td>Caique Zanetti</td>
                        <td>14/05/2026</td>
                    </tr>
                </tbody>
            </table>
            {/* </section> */}
        </>
    )
}