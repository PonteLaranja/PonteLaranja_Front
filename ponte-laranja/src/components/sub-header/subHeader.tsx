import { Menu } from 'lucide-react'
import styles from './subheader.module.css'


export const SubHeader = () => {

    return (

        <header className={styles.header}>
            <img src="/svg/logo_banner.svg" alt="" />
            <div className={styles.sidebar}>
                <button className={styles.botao_sidebar}> <Menu size={46} /></button>

                <aside className={styles.sidebar_ativada}>
                    <div className={styles.user}>
                        <img src="/svg/imgUser.svg" alt="" />
                        <div className={styles.text_underline}>
                            <span className={`texto_p`}>Usuário</span>
                            <hr className={styles.linha} id={styles.usuario_hr} />
                        </div>
                    </div>
                    <div ></div>
                    <div className={styles.text_underline}>
                        <span className={`texto_p`}>Home</span>
                        <hr />
                    </div>
                    <div className={styles.text_underline}>
                        <span className={`texto_p`}>Cadastro</span>
                        <hr />
                    </div>
                    <div className={styles.text_underline}>
                        <span className={`texto_p`}>Histórico</span>
                        <hr />
                    </div>
                        <div className={styles.text_underline} id={styles.logout}>
                            <span className={`texto_p`}>Logout</span>
                            <hr />
                        </div>



                </aside>
            </div>
        </header>

    )
}

