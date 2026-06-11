import styles from './header.module.css'

export const Header = () => {

    return (
        <header className={styles.cabecalho}>
            <img src="/svg/logo_header.svg" alt="" />
            <nav className={styles.navegacao}>
                <ul>
                    <li className={`${styles.lista} texto_layout`}>Histórico</li>
                    <li className={`${styles.lista} texto_layout`}>Contato</li>
                    <li className={`${styles.lista} texto_layout`}>Sobre nós</li>
                </ul>
            </nav>
            <button className={styles.login}>Login</button>
        </header>

    )
}