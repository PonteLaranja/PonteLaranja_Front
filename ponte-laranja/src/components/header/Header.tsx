import Link from 'next/link'
import styles from './header.module.css'
import { useState } from 'react'

export const HeaderLateral = () => {

    const [abertofechado, setabertofechado] = useState<boolean>(false)

    const AbrirBarraLateral = () =>
    {
        setabertofechado(!abertofechado)
    }

    return (
        <header className={styles.cabecalho}>
            <img src="imgs/logo_banner.svg" alt="" />
            <button className={styles.login} onClick={AbrirBarraLateral}>Login</button>
            <aside className={abertofechado ? styles.barraLateralOpen : styles.barraLateral} onClick={AbrirBarraLateral}>
                <div className={styles.div}>
                    <img src="imgs/imgUser.svg" alt="usuario" />
                    <h3>Usuario</h3>
                    <hr />
                    <nav className={styles.navegacao}>
                        <Link href={""} id={styles.links}>Home</Link>
                        <Link href={""} id={styles.links}>Cadastro de Item</Link>
                        <Link href={""} id={styles.links}>Cadastro de Unidade</Link>
                        <Link href={""} id={styles.links}>Histórico</Link>
                        <Link href={""} id={styles.links} className={styles.logout}>Logout</Link>
                    </nav>
                </div>
            </aside>
        </header>

    )
}