import Link from 'next/link'
import styles from './header.module.css'
import { useState } from 'react'

export const Header = () => {

    const [abertofechado, setabertofechado] = useState<boolean>(false)

    const AbrirBarraLateral = () =>
    {
        setabertofechado(!abertofechado)
    }

    return (
        <header className={styles.cabecalho}>
            <img src="imgs/logo_banner.svg" alt="" />
            <nav className={styles.navegacao}>
                <ul>
                    <Link href={""} className={styles.link}><li className={`texto_layout`}>Histórico</li></Link>
                    <Link href={""} className={styles.link}><li className={`texto_layout`}>Contato</li></Link>
                    <Link href={""} className={styles.link}><li className={`texto_layout`}>Sobre nós</li></Link>
                </ul>
            </nav>
            <button className={styles.login} onClick={AbrirBarraLateral}>Login</button>
            <aside className={abertofechado ? styles.barraLateralOpen : styles.barraLateral}>
                <div>
                    <img src="" alt="" />
                    <br />
                    <section>
                        <Link></Link>
                        <Link></Link>
                        <Link></Link>
                    </section>
                </div>
            </aside>
        </header>

    )
}