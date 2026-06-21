import styles from "./footer.module.css"


const Footer = () =>{
    return(
        <>
            <footer className={styles.rodape}>
                <img className={styles.logo_rodape} src="/imgs/logo_banner.svg" alt="" />
                <p>Copyright © 2026  Ponte Laranja | Todos os direitos reservados</p>

                <div className={styles.imgs_rodape}>
                    <img className={styles.imgRedes} src="/imgs/whats.png" alt="" />
                    <img className={styles.imgRedes} src="/imgs/tiktok.png" alt="" />
                    <img className={styles.imgRedes} src="/imgs/insta.png" alt="" />
                </div>
            </footer>
        </>
    )
}


export default Footer;