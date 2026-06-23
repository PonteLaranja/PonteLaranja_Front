// import { Header } from "@/src/components/header/Header"
// import { SubHeader } from "@/src/components/sub-header/subHeader"
import { Header } from '@/components/header/header'
import styles from './historico.module.css'
import { Banner } from '@/components/lista_itens/ListaItens'
// import { Banner } from "@/src/components/lista_itens/ListaItens"
// import SelectDemo from "@/src/components/select/testeSelect"


const Historico = () => {

    return (
        <>
            <Header />
            <main className={styles.main}>
            <Banner />
            

            </main>
        </>
    )
}

export default Historico