import Link from 'next/link'
import styles from './header.module.css'

export const Header = () => {

    return (
        <header className={styles.cabecalho}>
            <img src="/svg/logo_banner.svg" alt="" />
            <nav className={styles.navegacao}>
                <ul>
                    <Link href={""}><li className={`texto_layout`}>Histórico</li></Link>
                    <Link href={""}><li className={`texto_layout`}>Contato</li></Link>
                    <Link href={""}><li className={`texto_layout`}>Sobre nós</li></Link>
                </ul>
            </nav>
            <button className={styles.login}>Login</button>
        </header>

    )
}