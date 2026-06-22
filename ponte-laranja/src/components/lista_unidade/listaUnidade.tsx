import { useEffect, useState } from 'react'
import Unidade from '../unidade/unidade'
import styles from './listaUnidade.module.css'
import { Search, Calendar } from 'lucide-react'
import { listarUnidade } from '@/api/unidade';


interface ListaUnidade {
    unidadeDto: string;
    nomeUnidadeDto: string;
    cepDto: string;
    nomeResponsavelDto: string;
    nomeTipoUnidadeDto: string;
}

export const Listar = () => {

    const [unidades, setUnidades] = useState<ListaUnidade[]>([]);

    const [pesquisa, setPesquisa] = useState("");

    async function listarUnidades() {
        try {
            const lista = await listarUnidade();
            setUnidades(lista)
        } catch (error: any) {
            console.log(error.any)
        }
    }

    const unidadesFiltrados = unidades.filter((uni) => uni.nomeUnidadeDto.toLocaleLowerCase().includes(pesquisa.toLowerCase()));

    useEffect(() => {
        listarUnidades();
    }, [])

    useEffect(() => {

    }, [])

    return (
        <>
            <section className={styles.filtros}>
                <h1>Unidades</h1>
                <div className={styles.pesquisas}>
                    <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Tipo unidade</option></select>
                    <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Item</option></select>
                    {/* <label htmlFor="" className={styles.inserir_pesq}> */}
                    <div className={`${styles.inserir_pesq} ${styles.search}`}>
                        <input type="text" placeholder='Pesquisa' value={pesquisa} className={styles.input} onChange={(e) => setPesquisa(e.target.value)}/>
                        <Search size={30} className={styles.icon} />
                    </div>
                    {/* </label> */}

                </div>
            </section>

            <section className={styles.secao_tabelas}>
                <table className={styles.lista_tabelas}>
                    <thead className={styles.cabecalho_tabelas}>
                        <tr className={styles.cabecalho_linha}  >
                            <th className={`texto_tabela`}><span>ID</span></th>
                            <th className={`texto_tabela`}><span>Nome Unidade</span></th>
                            <th className={`texto_tabela`}><span>CEP</span></th>
                            <th className={`texto_tabela`}><span>Responsavel</span></th>
                            <th className={`texto_tabela`}><span>Tipo Unidade</span></th>
                            <th className={`texto_tabela`}><span>Necessidade</span></th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpo_f}>
                        {unidadesFiltrados.length > 0 ? unidadesFiltrados.map((item) => (
                            <>
                                <tr>
                                    <td colSpan={6} className={styles.separador}></td>
                                </tr>
                                <Unidade nomeResponsavelDto={item.nomeResponsavelDto} 
                                cepDto={item.cepDto} 
                                nomeTipoUnidadeDto={item.nomeTipoUnidadeDto}
                                unidadeDto={item.unidadeDto}
                                nomeUnidadeDto={item.nomeUnidadeDto}
                                />
                            </>

                        )): (
                            <tr>
                                <td>Carregando unidades...</td>
                            </tr>
                        )}
                        {/* Conteudo máximo sem quebrar é 6, faça paginate de 5 ent */}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Listar