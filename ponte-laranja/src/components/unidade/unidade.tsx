import { useState } from "react"
import styles from "./unidade.module.css"
import { useRouter } from "next/router";
import { listarUnidade } from "@/pages/api/unidade";

interface unidade {
  unidadeDto: string;
  nomeUnidadeDto: string;
  cepDto: string;
  nomeResponsavelDto: string;
  nomeTipoUnidadeDto: string;
}

const Unidade = ({unidadeDto, nomeUnidadeDto, cepDto, nomeResponsavelDto, nomeTipoUnidadeDto} : unidade) => {
    return (
        <>
            <tr className={styles.conteudo}>
                <td><div className={`${styles.card} texto_tabela`}><span>{unidadeDto}</span> </div></td>
                <td><div className={`${styles.card} texto_tabela`}><span>{nomeUnidadeDto}</span>             </div></td>
                <td><div className={`${styles.card} texto_tabela`}><span>{cepDto}</span>                          </div></td>
                <td><div className={`${styles.card} texto_tabela`}><span>{nomeResponsavelDto}</span>   </div></td>
                <td><div className={`${styles.card} texto_tabela`}><span>{nomeTipoUnidadeDto}</span>              </div></td>
                <td><div className={`${styles.card} texto_tabela ${styles.estabilidade}`}><span>Crítico</span> 
                    <div className={styles.bola}></div>               
                </div></td>
            </tr>
        </>
    )
}

export default Unidade