import { Header } from "../../components/Header/header";
import { Banner } from "../../components/lista_itens2/ListaItens";
import styles from "./itensUnidade.module.css"

const ItensUnidade = () =>{
    return(
        <>
             <Header />
            <main className={styles.main}>
            <Banner />


            </main>
        </>
    )
}

export default ItensUnidade;