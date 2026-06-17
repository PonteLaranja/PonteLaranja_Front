import { useState } from "react"
import styles from "./unidade.module.css"

const Unidade = () => {

    const [situacao, setSituracao] =  useState<string>("Instável")
    return (
        <>
            <tr className={styles.conteudo}>
                <td><div className={`${styles.card} texto_tabela`}><span>144444</span> </div></td>
                <td><div className={`${styles.card} texto_tabela`}><span>Matriz Sao Paulo</span>             </div></td>
                <td><div className={`${styles.card} texto_tabela`}><span>124938493</span>                          </div></td>
                <td><div className={`${styles.card} texto_tabela`}><span>Romario</span>   </div></td>
                <td><div className={`${styles.card} texto_tabela`}><span>Matriz</span>              </div></td>
                <td><div className={`${styles.card} texto_tabela ${styles.estabilidade}`}><span>Crítico</span> 
                    <div className={styles.bola}></div>               
                </div></td>
            </tr>
        </>
    )
}

export default Unidade