import Footer from "@/src/components/footer/footer";
import { Header } from "@/src/components/header/Header";
import styles from "./sobreNos.module.css"
import { symlink } from "fs";

const SobreNos = () => {
    return (
        <>
            <Header />
            <main className={styles.conteudoPrincipal}>
                <div className={styles.esquerda}>
                    <h2>Sobre nós:</h2>
                    <p>
                        A Ponte Laranja é uma organização não governamental criada com o propósito de conectar pessoas, transformar vidas e construir novas oportunidades para aqueles que mais precisam.
                        Acreditamos que pequenas ações podem gerar grandes mudanças. Por isso, atuamos como uma ponte entre pessoas, comunidades e recursos, promovendo apoio, inclusão e desenvolvimento social por meio de iniciativas que valorizam a solidariedade e o cuidado com o próximo.
                        Nosso nome representa aquilo que buscamos construir: uma ponte de conexão, capaz de aproximar realidades diferentes e criar caminhos para um futuro mais justo. A cor laranja simboliza energia, esperança e transformação, enquanto o azul representa confiança, união e segurança — valores que fazem parte da nossa identidade.
                        Na Ponte Laranja, trabalhamos para fortalecer comunidades, incentivar a participação voluntária e proporcionar auxílio a pessoas em situação de vulnerabilidade, sempre com respeito, empatia e responsabilidade.
                        Mais do que uma ONG, somos um ponto de encontro entre quem quer ajudar e quem precisa de apoio. Juntos, construímos caminhos, atravessamos desafios e transformamos solidariedade em impacto real.
                        Ponte Laranja — conectando pessoas, transformando vidas. 🧡🌉
                    </p>
                </div>
                <div className={styles.direita}>
                    <img className={styles.logoSobre} src="/imgs/logo_header.svg" alt="" />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default SobreNos;