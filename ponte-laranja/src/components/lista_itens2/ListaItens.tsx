"use client";

import Link from 'next/link'
import styles from './listaItens.module.css'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { listar } from '@/src/pages/api/logHistorico'
import { listarItens } from '@/src/pages/api/item'
import { usePathname } from 'next/navigation'
import { Item } from '../itens2/Itens';


type itemMock = {
    logId: string
    itemId: string
    nomeItem: string
    quantidade: number
    unidade: string
    usuarioDoador: string
    data: Date
}


type itemMock2 = {
    itemId: string;
    nomeItem: string;
    quantidade: number;
    unidade: string;
    tipoItem: string;
    usuarioDoador: string;
    nomeUnidade: string;
    data: Date;
}



export const Banner = () => {

    const pathname = usePathname();


    const [item, setItem] = useState<itemMock2[]>([]);
    const [log, setLog] = useState<itemMock[]>([]);


    async function listagem() {

        const dados = await listar();

        setLog(dados);

    }



    async function listagemItens() {

        const dados = await listarItens();

        setItem(dados);

    }



    useEffect(() => {

        listagem();
        listagemItens();

    }, []);



    return (

        pathname === "/historico_items" ? (

            <>


                <section className={styles.filtros}>

                    <h1>
                        Histórico de Itens
                    </h1>


                    <div className={styles.pesquisas}>


                        <select
                            className={`${styles.inserir_pesq} ${styles.select_selecionar}`}
                        >

                            <option>
                                Unidades selecionadas
                            </option>

                        </select>



                        <select
                            className={`${styles.inserir_pesq} ${styles.select_selecionar}`}
                        >

                            <option>
                                Itens selecionados
                            </option>

                        </select>



                        <div className={`${styles.inserir_pesq} ${styles.search}`}>

                            <input
                                type="text"
                                placeholder="Pesquisa"
                                className={styles.input}
                            />


                            <Search
                                size={30}
                                className={styles.icon}
                            />

                        </div>



                        <input
                            type="date"
                            className={styles.inserir_pesq}
                            id={styles.inserir_data}
                        />


                    </div>


                </section>



                <section className={styles.secao_tabelas}>


                    <table className={styles.lista_tabelas}>


                        <thead className={styles.cabecalho_tabelas}>


                            <tr className={styles.cabecalho_linha}>

                                <th>ID</th>
                                <th>Nome do Item Doado</th>
                                <th>Quantidade</th>
                                <th>Unidade</th>
                                <th>Usuário Doador</th>
                                <th>Data</th>
                                <th>Ações</th>

                            </tr>


                        </thead>



                        <Item />


                    </table>


                </section>


            </>



        ) : pathname === "/itensUnidade" ? (


            <>


                <section className={styles.filtros}>


                    <h1>
                        Itens da Unidade: {item.length > 0 ? item[0].nomeUnidade : ""}
                    </h1>



                    <div className={styles.pesquisas}>


                        <div className={`${styles.inserir_pesq} ${styles.search}`}>


                            <input
                                type="text"
                                placeholder="Pesquisa"
                                className={styles.input}
                            />


                            <Search
                                size={30}
                                className={styles.icon}
                            />


                        </div>



                        <input
                            type="date"
                            className={styles.inserir_pesq}
                            id={styles.inserir_data}
                        />



                        <select className={styles.opcoes}>

                            <option value="">
                                Todos
                            </option>

                            <option value="">
                                Brinquedo
                            </option>

                            <option value="">
                                Alimento
                            </option>

                            <option value="">
                                Roupa
                            </option>


                        </select>



                    </div>


                </section>




                <section className={styles.secao_tabelas}>


                    <table className={styles.lista_tabelas}>


                        <thead className={styles.cabecalho_tabelas}>


                            <tr className={styles.cabecalho_linha}>


                                <th>ID</th>
                                <th>Nome do Item</th>
                                <th>Quantidade</th>
                                <th>Tipo de item</th>
                                <th>Usuário Doador</th>
                                <th>Data</th>


                            </tr>


                        </thead>



                        <Item />


                    </table>


                </section>


            </>


        ) : null


    )

}