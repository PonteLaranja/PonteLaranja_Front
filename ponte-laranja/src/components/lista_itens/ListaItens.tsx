import Link from "next/link";
import styles from "./listaItens.module.css";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { listarDoacao, listarDoacaoV2 } from "@/src/pages/api/logHistorico";
import ReactPaginate from "react-paginate";
import { Item } from "../itens/Itens";
import { ItemV2 } from "../itens/ItensProps";

import { LogDoacao, LogDoacao2 } from "@/src/pages/api/logHistoricoMock";
import SelectTipoItem from "../select/selectAnterior";

import SelectDemo from "../select/Select";
import { listarLogs, listarLogs_por_Unidade } from "@/src/pages/api/logHistoricov2";
import { listarItens } from "@/src/pages/api/item";

type itemMock = LogDoacao2;

// type itemMock = {
//     logId: string;
//     itemId: string;
//     nomeItem: string;
//     quantidade: number;
//     tipoMedida: string;
//     unidade: string;
//     usuarioDoador: string;
//     data: Date;
// }

export const Banner = () => {

  const [log, setLog] = useState<itemMock[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  const [primeiroItem, setPrimeiroItem] = useState(0);
  const numItem = 1;
  const ultimoItem = primeiroItem + numItem;
  const itensAtuais = log.slice(primeiroItem, ultimoItem);
  const paginas = Math.ceil(log.length / numItem);
  const alterarPagina = (event: any) => {
    const newOffSet = (event.selected * numItem) % log.length;

    setPrimeiroItem(newOffSet);
  };

  // const itensFiltrados = log.filter((logs) => logs.)
  // async function pesquisa()
  // {

  // }
  async function listagem() {
    const teste = await listarItens()
    console.log(teste.data)
    const dados = await listarDoacaoV2();
    console.log(listarLogs())
    setLog(dados);
  }

  useEffect(() => {
    listagem();
  }, []);
  return (
    <>
      <Link href={""}></Link>
      <section className={styles.filtros}>
        <h1>Histórico de Itens</h1>
        <div className={styles.pesquisas}>
          {/*
                     <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Unidades selecionadas</option></select>
                     <select name="" id="" className={`${styles.inserir_pesq} ${styles.select_selecionar}`}><option value="" className={styles.inserir_pesq}>Unidades selecionadas</option></select> 
                    */}
          {/* <SelectTipoItem /> */}

          <SelectDemo tipo="tipoItem" placeholder="Escolha o Item"/>
          <SelectDemo tipo="unidade" placeholder="Escolha a Unidade"/>
          <div className={`${styles.inserir_pesq} ${styles.search}`}>
            <input
              type="text"
              placeholder="Pesquisa"
              className={styles.input}
            />
            <Search size={30} className={styles.icon} />
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
              <th className={`texto_tabela`}>
                <span>Nome do Item</span>
              </th>
              <th className={`texto_tabela`}>
                <span>Medida</span>
              </th>
              <th className={`texto_tabela`}>
                <span>Quantidade</span>
              </th>
              <th className={`texto_tabela`}>
                <span>Unidade</span>
              </th>
              <th className={`texto_tabela`}>
                <span>Usuário Doador</span>
              </th>
              <th className={`texto_tabela`}>
                <span>Data</span>
              </th>
              <th className={`texto_tabela`}>
                <span>Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className={styles.corpo_f}>
            {itensAtuais.length > 0 ? (
              itensAtuais.map((item) => (
                <ItemV2
                  page="itensDoados"
                  key={item.logId}
                  itemId={item.itemId}
                  data={item.data}
                  quantidade={item.quantidade}
                  nomeItem={item.nomeItem}
                  unidade={item.unidadeId}
                  usuarioDoador={item.usuarioDoador}
                  tipoMedida={item.tipoMedida}
                  logId={item.logId}
                />
              ))
            ) : (
              <tr>
                <td>
                  <p>oi</p>
                </td>
              </tr>
            )}

          </tbody>
        </table>
       
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ChevronRight size={24} />}
          previousLabel={<ChevronLeft size={24} />}
          onPageChange={alterarPagina}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          pageCount={paginas}
          renderOnZeroPageCount={null}
          containerClassName={styles.navegacao_lista}
          pageClassName={styles.navegacao_item}
          pageLinkClassName={styles.item_link}
          previousClassName={styles.navegacao_item}
          previousLinkClassName={styles.item_link}
          nextClassName={styles.navegacao_item}
          nextLinkClassName={styles.item_link}
          breakClassName={styles.navegacao_item}
          breakLinkClassName={styles.item_link}
          activeClassName={styles.pagina_ativa}
          disabledClassName={styles.desabilitado}
        />

      </section>
    </>
  );
};


{
  /* <ul>

                    <ReactPaginate
                        breakLabel="..."
                        previousLabel={<ChevronLeft size={40} />}
                        onPageChange={alterarPagina}
                        pageRangeDisplayed={paginas}
                        pageCount={paginas}
                        renderOnZeroPageCount={null}
                        // pageClassName={styles.pagina}
                        // pageLinkClassName={styles.pagina_link}
                        // previousClassName={styles.pagina}
                        // nextClassName={styles.pagina}
                        // activeClassName={styles.ativo}
                        // containerClassName={styles.paginacao}
                        nextLabel={<ChevronRight size={40} />}

                    />
                    </ul> */
}
