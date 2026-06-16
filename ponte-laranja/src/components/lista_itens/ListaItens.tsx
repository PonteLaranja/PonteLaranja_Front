import styles from './listaItens.module.css'
import { Search, Calendar} from 'lucide-react'
export const ListaItens = () => {

    return (
        <>
            <section className={styles.filtros}>
                <select name="" id=""></select>
                <select name="" id=""></select>
                <label htmlFor="">
                    <input type="text" placeholder='Pesquisa'/>
                    <Search size={40} />
                </label>

                <label><input type="date" /> <Calendar size={40}/></label>
            </section>

            <section className={styles.lista_tabelas}>
                <table className={styles.tabelas}>
                    <thead className={styles.cabecalho_tabelas}>
                        <tr>
                            <th>ID</th>
                            <th>Nome do Item Doado</th>
                            <th>Quantidade</th>
                            <th>Unidade</th>
                            <th>Usuário Doador</th>
                            <th>Data</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td>144444</td>
                                <td>Pacote de Arroz</td>
                                <td>12</td>
                                <td>1.34 - São Caetano do Sul</td>
                                <td>Caique Zanetti</td>
                                <td>14/05/2026</td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
            </section>
        </>
    )
}