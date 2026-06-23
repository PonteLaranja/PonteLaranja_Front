



// // Teste abaixo


// import Link from "next/link";
// import styles from "./listaItens.module.css";
// import { Search, ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { listarDoacao, listarDoacaoV2 } from "@/src/pages/api/logHistorico";
// import ReactPaginate from "react-paginate";
// import { Item } from "../itens/Itens";
// import { ItemV2 } from "../itens/ItensProps";

// import { LogDoacao, LogDoacao2 } from "@/src/pages/api/logHistoricoMock";
// import SelectTipoItem from "../select/selectAnterior";

// // import SelectDemo from "../select/Select";

// import { listarLogs2, listarLogs_por_Unidade, Transferencia } from "@/src/pages/api/logHistoricov2";
// import { listarItens } from "@/src/pages/api/item";
// import SelectDemo from "../select/Select"; // ignora o erro
// import { listar_tipoMedidav2 } from "@/src/pages/api/tipoMedida";
// import { listar_tipoItem2 } from "@/src/pages/api/tipoItem";

// import { listarUnidades, Unidade } from "@/src/pages/api/unidade";


// type itemMock = LogDoacao2;

// type logAPI = Transferencia
// export const Banner = () => {
//   const [log, setLog] = useState<itemMock[]>([]);
//   // const [log, setLog] = useState<logAPI[]>([]);
//   const [pesquisa, setPesquisa] = useState("");

//   const [primeiroItem, setPrimeiroItem] = useState(0);

//   const numItem = 5;

//   async function listagem() {
//     const dados = await listarDoacaoV2();
//     const dados2 = await listarLogs2();
//     console.log(dados2.data)
    
//     setLog(dados);
//   }

//   useEffect(() => {
//     listagem();
//   }, []);

//   useEffect(() => {
//     setPrimeiroItem(0);
//   }, [pesquisa]);

//   const itensFiltrados = log.filter((item) =>
//     item.nomeItem.toLowerCase().includes(
//       pesquisa.toLowerCase().trim()
//     )
//   );

//   const ultimoItem = primeiroItem + numItem;

//   const itensAtuais = itensFiltrados.slice(
//     primeiroItem,
//     ultimoItem
//   );

//   const paginas = Math.ceil(
//     itensFiltrados.length / numItem
//   );

//   const alterarPagina = (event: any) => {
//     setPrimeiroItem(event.selected * numItem);
//   };

//   return (
//     <>
    
//       <Link href={""}></Link>

//       <section className={styles.filtros}>
//         <h1>Histórico de Itens</h1>

//         <div className={styles.pesquisas}>
//           <SelectDemo
//             tipo="tipoItem"
//             placeholder="Escolha o Item"
//           />

//           <SelectDemo
//             tipo="unidade"
//             placeholder="Escolha a Unidade"
//           />

//           <div
//             className={`${styles.inserir_pesq} ${styles.search}`}
//           >
//             <input
//               type="text"
//               placeholder="Pesquisa"
//               className={styles.input}
//               value={pesquisa}
//               onChange={(e) =>
//                 setPesquisa(e.target.value)
//               }
//             />

//             <Search
//               size={30}
//               className={styles.icon}
//             />
//           </div>

//           <input
//             type="date"
//             className={styles.inserir_pesq}
//             id={styles.inserir_data}
//           />
//         </div>
//       </section>

//       <section className={styles.secao_tabelas}>
//         <table className={styles.lista_tabelas}>
//           <thead className={styles.cabecalho_tabelas}>
//             <tr className={styles.cabecalho_linha}>
//               <th>
//                 <span>Nome do Item</span>
//               </th>

//               <th>
//                 <span>Medida</span>
//               </th>

//               <th>
//                 <span>Quantidade</span>
//               </th>

//               <th>
//                 <span>Unidade</span>
//               </th>

//               <th>
//                 <span>Usuário Doador</span>
//               </th>

//               <th>
//                 <span>Data</span>
//               </th>

//               <th>
//                 <span>Ações</span>
//               </th>
//             </tr>
//           </thead>

//           <tbody className={styles.corpo_f}>
//             {itensAtuais.length > 0 ? (
//               itensAtuais.map((item) => (
//                 <ItemV2
//                   page="itensDoados"
//                   key={item.logId}
//                   itemId={item.itemId}
//                   data={item.data}
//                   quantidade={item.quantidade}
//                   nomeItem={item.nomeItem}
//                   unidade={item.unidadeId}
//                   usuarioDoador={item.usuarioDoador}
//                   tipoMedida={item.tipoMedida}
//                   logId={item.logId}
//                 />
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={7}>
//                   Nenhum item encontrado.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         <ReactPaginate
//           breakLabel="..."
//           nextLabel={<ChevronRight size={24} />}
//           previousLabel={<ChevronLeft size={24} />}
//           onPageChange={alterarPagina}
//           pageRangeDisplayed={4}
//           marginPagesDisplayed={1}
//           pageCount={paginas}
//           renderOnZeroPageCount={null}
//           containerClassName={styles.navegacao_lista}
//           pageClassName={styles.navegacao_item}
//           pageLinkClassName={styles.item_link}
//           previousClassName={styles.navegacao_item}
//           previousLinkClassName={styles.item_link}
//           nextClassName={styles.navegacao_item}
//           nextLinkClassName={styles.item_link}
//           breakClassName={styles.navegacao_item}
//           breakLinkClassName={styles.item_link}
//           activeClassName={styles.pagina_ativa}
//           disabledClassName={styles.desabilitado}
//         />
//       </section>
//     </>
//   );
// };