                {page === "itensUnidade" && (
                    log.map((item) => (
                        <tr key={logId} className={styles.conteudo}>


                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.idade}>
                                    <span>{nomeItem}</span>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.tipoMedida}>
                                    <span>{tipoMedida}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.quantidade}>
                                    <span>{quantidade}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.unidade}>
                                    <span>{unidade}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.usuarioDoador}>
                                    <span>{usuarioDoador}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.data}>
                                    <span>{data.toLocaleDateString('pt-BR')}</span>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.acoes}>
                                    <SquarePen className={styles.card2} size={30} />
                                </div>
                            </td>

                        </tr>
                    ))
                )}


                

                {page === "itensRecebidos" && (
                    log.map((item) => (
                        <tr key={logId} className={styles.conteudo}>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.idade}>
                                    <span>{nomeItem}</span>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.tipoMedida}>
                                    <span>{tipoMedida}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.quantidade}>
                                    <span>{quantidade}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.unidade}>
                                    <span>{unidade}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.usuarioDoador}>
                                    <span>{usuarioDoador}</span>
                                </div>
                            </td>

                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.data}>
                                    <span>{data.toLocaleDateString('pt-BR')}</span>
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.card} texto_tabela`} id={styles.acoes}>
                                    <SquarePen className={styles.card2} size={30} />
                                </div>
                            </td>

                        </tr>
                    ))
                )}