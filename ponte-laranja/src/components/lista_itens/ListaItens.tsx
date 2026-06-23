import Link from "next/link";
import styles from "./listaItens.module.css";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";

import {
  listarLogs,
  listarLogs_por_Unidade,
  Transferencia,
} from "@/src/pages/api/logHistoricov2";
import { listarItens } from "@/src/pages/api/item";

import { listar_tipoMedida } from "@/src/pages/api/tipoMedida";
import { listar_tipoItem } from "@/src/pages/api/tipoItem";

import { listarUsuario, listUsuario } from "@/src/pages/api/usuarioService";
import { ItemZero } from "../itens/Itens";
import SelectDemo from "../select/SelectFunciona";

export interface TransferenciaTabela {
  transferenciaID: string;

  itemID: string;
  itemNome: string;

  quantidade: number;

  tipoItemID: string;

  medida: string;

  usuarioNome: string;

  unidadeID: string;
  unidadeDestinoID: string;

  unidadeDestinoNome: string;

  dataChegada: string | null;
}

export const Banner = () => {
  // const [log, setLog] = useState<TransferenciaTabela[]>([]);
  const [logV2, setLogV2] = useState<TransferenciaTabela[]>([]);

  const [filtroTipoItem, setFiltroTipoItem] = useState("");
  const [filtroUnidade, setFiltroUnidade] = useState("");
  const [filtroData, setFiltroData] = useState("");

  const [pesquisa, setPesquisa] = useState("");

  const [primeiroItem, setPrimeiroItem] = useState(0);

  const numItem = 2;

  async function listagem() {
    const dados = await listarLogs();
    setLogV2(dados);
  }

  async function listarItensDeLogs() {
    try {
      const transferencias = await listarLogs();

      const itensResponse = await listarItens();
      const itens = itensResponse.data;

      const tiposMedida = await listar_tipoMedida();
      const tiposMedidas = tiposMedida.data;

      const usuario = await listarUsuario();

      const listaCompleta: TransferenciaTabela[] = transferencias.map(
        (transferencia: Transferencia) => {
          const item = itens.find(
            (i: any) => i.itemID === transferencia.itemID,
          );

          const medida = tiposMedidas.find(
            (m: any) => m.tipoMedidaID === item?.tipoMedidaID,
          );

          const usuarioEncontrado = usuario.find(
            (u: listUsuario) => u.usuarioID === item?.usuarioID,
          );

          // const usuario = listar
  console.log(`teste em pai \n ${JSON.stringify(transferencia, null, 2)}`);
          return {
            transferenciaID: transferencia.transferenciaID,

            itemID: transferencia.itemID,

            itemNome: item?.nomeItem ?? transferencia.itemNome ?? "Sem nome",
            tipoItemID: item?.tipoItemID ?? "",
            quantidade: item?.quantidade ?? 0,

            medida: medida?.nomeTipoMedida ?? "-",
            

            usuarioNome: usuarioEncontrado?.nome ?? "Usuário não encontrado",
            unidadeID: item?.unidadeID ?? "",
            unidadeDestinoID: transferencia.unidadeDestinoID,
            unidadeDestinoNome: transferencia.unidadeDestinoNome,

            dataChegada: transferencia.dataChegada,
          };
        },
      ); // ac_nascimento08

      setLogV2(listaCompleta);
    } catch (erro) {
      console.error(erro);
    }
  }

  const itensFiltrados = logV2.filter((item) => {

      console.log({
    itemNome: item.itemNome,
    tipoItemID: item.tipoItemID,
    unidadeID: item.unidadeDestinoID,
    dataChegada: item.dataChegada,
    filtroTipoItem,
    filtroUnidade,
    filtroData,
  });

    const matchPesquisa =
      item.itemNome?.toLowerCase().includes(pesquisa.toLowerCase().trim()) ??
      false;

    const matchTipo =
      filtroTipoItem === "" || filtroTipoItem === "todos" || item.tipoItemID === filtroTipoItem;

    const matchUnidade =
      filtroUnidade === "" || filtroUnidade === "todos" ||item.unidadeDestinoID === filtroUnidade;

    const matchData =
      filtroData === "" || filtroData === "todos" ||item.dataChegada?.split("T")[0] === filtroData;

    return matchPesquisa && matchTipo && matchUnidade && matchData;
  });
  const ultimoItem = primeiroItem + numItem;

  const itensAtuais = itensFiltrados.slice(primeiroItem, ultimoItem);

  const paginas = Math.ceil(itensFiltrados.length / numItem);

  const alterarPagina = (event: any) => {
    setPrimeiroItem(event.selected * numItem);
  };

  useEffect(() => {
    listarItensDeLogs();
  }, []);

  useEffect(() => {
    setPrimeiroItem(0);
  }, [pesquisa, filtroData, filtroTipoItem, filtroUnidade]);


  useEffect(() => {
  console.log("Tipo selecionado:", filtroTipoItem);
}, [filtroTipoItem]);

useEffect(() => {
  console.log("Unidade selecionada:", filtroUnidade);
}, [filtroUnidade]);

useEffect(() => {
  console.log("Data selecionada:", filtroData);
  
}, [filtroData]);

  return (
    <>
      <Link href={""}></Link>

      <section className={styles.filtros}>
        <h1>Histórico de Itens</h1>

        <div className={styles.pesquisas}>
          <SelectDemo
            tipo="tipoItem"
            placeholder="Escolha o Item"
            value={filtroTipoItem}
            onValueChange={setFiltroTipoItem}
          />

          <SelectDemo
            tipo="unidade"
            placeholder="Escolha a Unidade"
            value={filtroUnidade}
            onValueChange={setFiltroUnidade}
          />

          <div className={`${styles.inserir_pesq} ${styles.search}`}>
            <input
              type="text"
              placeholder="Pesquisa"
              className={styles.input}
              // value={pesquisa}
              // onChange={(e) => setPesquisa(e.target.value)}
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />

            <Search size={30} className={styles.icon} />
          </div>

          <input
            type="date"
            className={styles.inserir_pesq}
            id={styles.inserir_data}
            value={filtroData}
            onChange={(e) => setFiltroData(e.target.value)}
          />
        </div>
      </section>

      <section className={styles.secao_tabelas}>
        <table className={styles.lista_tabelas}>
          <thead className={styles.cabecalho_tabelas}>
            <tr className={styles.cabecalho_linha}>
              <th>
                <span>Nome do Item</span>
              </th>

              <th>
                <span>Medida</span>
              </th>

              <th>
                <span>Quantidade</span>
              </th>

              <th>
                <span>Unidade</span>
              </th>

              <th>
                <span>Usuário Doador</span>
              </th>

              <th>
                <span>Data</span>
              </th>

              {/* <th>
                <span>Ações</span>
              </th> */}
            </tr>
          </thead>

          <tbody className={styles.corpo_f}>
            {itensAtuais.length > 0 ? (
              itensAtuais.map((item) => (
                <ItemZero
                  page="itensDoados"
                  key={item.transferenciaID}
                  {...item}
                  // itemId={item.itemID}
                  // data={item.data}
                  // quantidade={item.quantidade}
                  // nomeItem={item.nomeItem}
                  // unidade={item.unidadeId}
                  // usuarioDoador={item.usuarioDoador}
                  // tipoMedida={item.tipoMedida}
                  // logId={item.logId}
                />
              ))
            ) : (
              <tr>
                <td colSpan={7}>Nenhum item encontrado.</td>
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
