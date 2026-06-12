import { Itens } from '../itens/Itens'
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
                        <Itens/>

                        </tbody>
                    </thead>
                </table>
            </section>
        </>
    )
}