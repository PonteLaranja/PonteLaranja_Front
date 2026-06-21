import { Header } from "@/src/components/header/Header";
import { Banner } from "@/src/components/lista_itens2/ListaItens";
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