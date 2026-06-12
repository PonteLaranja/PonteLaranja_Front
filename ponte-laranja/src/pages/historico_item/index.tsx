import { Header } from "@/src/components/header/Header"
import { Search, Calendar } from "lucide-react"
import styles from './historico.module.css'


const Historico = () => {
//! Pegar e estudar isso daqui https://www.radix-ui.com/primitives/docs/components/select
    return (
        <>
            <section className={styles.banner}>
                <h1>Histórico de Itens</h1>
                <div className={styles.pesquisas}>
                    <select name="" id="" className={`${styles.selecionar_pesquisa} background_dado`}></select>
                    <select name="" id="" className={`${styles.selecionar_pesquisa} background_dado`}></select>
                    <label htmlFor="Pesquisar" className={`${styles.inserir_pesquisas} background_dado`}>Pesquisa
                        <input type="text" aria-label="Pesquisar" />
                        <Search size={40} />
                    </label>
                    <label htmlFor="Calendário" className={`${styles.inserir_pesquisas} background_dado`}>
                        <input type="date" aria-label="Calendário" />
                        <Calendar size={40} />
                    </label>
                </div>
            </section>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Item doado</th>
                        <th>Quantidade</th>
                        <th>Unidade</th>
                        <th>Usuário doador</th>
                        <th>Data</th>

                    </tr>
                </thead>
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
            </table>
        </>
    )
}

export default Historico