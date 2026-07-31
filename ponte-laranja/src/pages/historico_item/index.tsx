import { Header } from "../../components/Header/header"
import { SubHeader } from "../../components/sub-header/subHeader"

import styles from "./historico.module.css"
import { Banner } from "../../components/lista_itens2/ListaItens"


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