import styles from "./home.module.css"


const Home = () => {
    return (
        <>
            <main className={styles.paginaDoacao}>

                <section id={styles.banner} className={styles.bannerPrincipal}>
                    <div className={styles.texto_banner}>

                        <h2 className={styles.bannerTitulo}>
                            Doe a pessoas necessitadas
                        </h2>

                        <p className={styles.bannerDescricao}>
                            Um pequeno gesto seu pode transformar uma vida.
                        </p>

                        <a className={styles.bannerBotao} href="#escolhaDoar">
                            Doe agora
                        </a>
                    </div>
                </section>


                <section id={styles.conteudo_principal_1} className={styles.secaoSobreDoacao}>

                    <div className={styles.conteudoSuperior}>

                        <div className={styles.imagemSobreDoacao}>
                            <img className={styles.imagemPrincipal} src="../public/banner1.png" alt="" />
                        </div>


                        <div className={styles.textoSobreDoacao}>

                            <h2 className={styles.tituloSobreDoacao}>
                                Você é a esperança de outras vidas.
                            </h2>

                            <p className={styles.descricaoSobreDoacao}>
                                Uma doação vai muito além de um simples gesto de generosidade. Ela
                                pode garantir alimentação para quem passa fome, oferecer materiais
                                escolares para crianças que sonham com um futuro melhor, proporcionar
                                atendimento e acolhimento para famílias em situação de vulnerabilidade
                                e devolver a esperança a quem enfrenta momentos difíceis.
                            </p>

                            <a className={styles.botaoContato} href="">
                                Ligue aqui
                            </a>

                        </div>


                        <div className={styles.estatisticasDoacao}>

                            <div className={styles.estatisticaItem}>
                                <h2>10M</h2>
                                <p>Total arrecadado</p>
                            </div>

                            <div className={styles.estatisticaItem}>
                                <h2>32M</h2>
                                <p>Pessoas alcançadas</p>
                            </div>

                            <div className={styles.estatisticaItem}>
                                <h2>10K</h2>
                                <p>Famílias alcançadas</p>
                            </div>

                            <div className={styles.estatisticaItem}>
                                <h2>10M</h2>
                                <p>Doações totais</p>
                            </div>

                        </div>

                    </div>

                </section>


                <section id={styles.escolha_q_doar} className={styles.secaoEscolhaDoacao}>

                    <h2 className={styles.tituloSecao}>
                        Escolha o que doar
                    </h2>


                    <div className={styles.listaDoacoes}>

                        <div className={styles.cardDoacao}>
                            <img className={styles.imagemDoacao} src="./imgs/roupas.png" alt="" />
                            <h2>Roupa</h2>
                            <a className={styles.linkDoacao} href="">Doar</a>
                        </div>


                        <div className={styles.cardDoacao}>
                            <img className={styles.imagemDoacao} src="./imgs/comidas.png" alt="" />
                            <h2>Alimento</h2>
                            <a className={styles.linkDoacao} href="">Doar</a>
                        </div>


                        <div className={styles.cardDoacao}>
                            <img className={styles.imagemDoacao} src="./imgs/brinquedos.png" alt="" />
                            <h2>Brinquedo</h2>
                            <a className={styles.linkDoacao} href="">Doar</a>
                        </div>

                    </div>

                </section>


                <section id={styles.relatos} className={styles.secaoRelatos}>

                    <div className={styles.galeriaRelatos}>

                        <img className={styles.imagemRelato} src="./imgs/pessoasFelizes.jpg" alt="" />
                        <img className={styles.imagemRelato} src="./imgs/maozinhas.jpg" alt="" />
                        <img className={styles.imagemRelato} src="./imgs/grupinho.avif" alt="" />
                        <img className={styles.imagemRelato} src="./imgs/duplinha.jpg" alt="" />

                    </div>


                    <div className={styles.listaRelatos}>

                        <div className={styles.cardRelato}>
                            <h2>Relato 1</h2>
                            <p>
                               “Eu estava passando por um momento difícil e não sabia como seguir em frente. Quando recebi a doação, senti esperança novamente. Mais do que a ajuda recebida, aquele gesto mostrou que eu não estava sozinho. Sou muito grato por quem estendeu a mão quando eu mais precisei.”
                            </p>
                        </div>


                        <div className={styles.cardRelato}>
                            <h2>Relato 2</h2>
                            <p>
                               "Graças à doação que recebi, consegui enfrentar um momento muito difícil da minha vida. A ajuda chegou na hora certa e trouxe mais tranquilidade para mim e minha família. Saber que existem pessoas dispostas a ajudar fez toda a diferença."
                            </p>
                        </div>


                        <div className={styles.cardRelato}>
                            <h2>Relato 3</h2>
                            <p>
                               "Em um período de muitas dificuldades, a doação que recebi trouxe alívio e esperança. Esse gesto de solidariedade mostrou que ainda existem pessoas dispostas a ajudar o próximo. Sou muito grato por essa ajuda, que fez a diferença no momento em que eu mais precisava."
                            </p>
                        </div>

                    </div>

                </section>


                <section id={styles.doadores} className={styles.secaoDoadores}>

                    <div className={styles.areaSuperiorDoadores}>

                        <h2 className={styles.tituloDoadores}>
                            Conheça alguns de nossos doadores
                        </h2>


                        <div className={styles.categoriasDoacao}>

                            <div className={styles.categoriaDoacaoAlimento}>
                                <h3 className={styles.tituloCategoriaDoacao}>Alimentos doados</h3>
                            </div>

                            <div className={styles.categoriaDoacaoRoupa}>
                                 <h3 className={styles.tituloCategoriaDoacao}>Roupas doadas</h3>
                            </div>

                            <div className={styles.categoriaDoacaoBrinquedo}>
                                 <h3 className={styles.tituloCategoriaDoacao}>Brinquedos doados</h3>
                            </div>

                        </div>

                    </div>


                    <div className={styles.listaDoadores}>

                        <h2>Doadores</h2>


                        <div className={styles.cardsDoadores}>

                            <div className={styles.cardDoador}>
                                <img src="./imgs/diego.png" alt="" />
                                <h3>Diego Castro da Rocha</h3>
                            </div>

                            <div className={styles.cardDoador}>
                                <img src="./imgs/luigi.png" alt="" />
                                <h3>Luigi Santi Luberlato</h3>
                            </div>

                            <div className={styles.cardDoador}>
                                <img src="./imgs/nicollas.png" alt="" />
                                <h3>Nicollas Oliveira Rufino</h3>
                            </div>

                            <div className={styles.cardDoador}>
                                <img src="./imgs/guinas.png" alt="" />
                                <h3>Guilherme Ribeiro dos Santos</h3>
                            </div>

                        </div>

                    </div>

                </section>


                <section id={styles.banner_motivador} className={styles.bannerMotivacional}>

                    <div className={styles.conteudoBannerMotivacional}>
                        <h2>
                            Sua doação muda vidas e juntos por um mundo melhor
                        </h2>
                    </div>

                </section>


                <section id={styles.causas} className={styles.secaoCausas}>

                    <h1 className={styles.tituloCausas}>
                        Causas que lutamos
                    </h1>


                    <div className={styles.listaCausas}>


                        <div className={styles.cardCausa}>

                            <img className={styles.imagemCausa} src="./imgs/fome.png" alt="" />
                            <div className={styles.textoCausa}>
                            <h2>
                                Contra à fome
                            </h2>

                            <p>
                                Combater a fome é alimentar a esperança de um futuro melhor.
                            </p>
                            </div>

                        </div>


                        <div className={styles.cardCausa}>

                            <img className={styles.imagemCausa} src="./imgs/pobreza2.png" alt="" />

                            <div className={styles.textoCausa}>
                            <h2>
                                Contra a pobreza têxtil
                            </h2>

                            <p>
                                Porque ter acesso a roupas adequadas é um direito de todos.
                            </p>

                            </div>

                        </div>


                        <div className={styles.cardCausa}>

                            <img className={styles.imagemCausa} src="./imgs/huah.png" alt="" />
                            
                            <div className={styles.textoCausa}>

                            <h2>
                                À favor do sorriso
                            </h2>

                            <p>
                                Toda criança merece a chance de sorrir, brincar e sonhar.
                            </p>
                            </div>

                        </div>


                    </div>

                </section>

            </main>


        </>
    )
}

export default Home;