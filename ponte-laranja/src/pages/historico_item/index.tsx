import { Header } from "@/src/components/header/Header"
import { SubHeader } from "@/src/components/sub-header/subHeader"
import styles from "./historico.module.css"
import { Banner } from "@/src/components/lista_itens2/ListaItens"


const Historico = () => {

    return(
        <>
            <Header />
            <main className={styles.main}>
            <Banner />


            </main>
        </>
    )
}

export default Historico