import { useEffect, useState } from "react";
import styles from "./itens.module.css";
import { listarDoacao } from "@/src/pages/api/logHistorico";
import { Search, Calendar, SquarePen } from "lucide-react";
import { LogDoacao } from "@/src/pages/api/logHistoricoMock";
import {
  listarLogs,
  listarLogs_por_Unidade,
  Transferencia,
} from "@/src/pages/api/logHistorico";
import { Item, listarItens_Id } from "@/src/pages/api/item";
import { TransferenciaTabela } from "../lista_itens/ListaItens";

type propsList = {
  page?: string;
};

interface itemAPI extends Transferencia {
  page?: "itensDoados" | "itensRecebidos" | "itensUnidade";
}

interface itemAPI2 extends TransferenciaTabela {
  page?: "itensDoados" | "itensRecebidos" | "itensUnidade";
}

interface logAPI extends TransferenciaTabela {
  page?: "itensDoados" | "itensRecebidos" | "itensUnidade";
}

interface itemAPIv3 extends TransferenciaTabela {
  page?: "itensDoados" | "itensRecebidos" | "itensUnidade";
}

export const ItemZero = (
  //     {
  //     page, logId,
  //     itemId, nomeItem,
  //     quantidade, tipoMedida,
  //     usuarioDoador, data,
  //     unidade,
  // }: itemMock) =>
  {
    itemID,
    itemNome,
    quantidade,
    usuarioNome,
    medida,
    unidadeDestinoNome,
    dataChegada,
    page,
  }: itemAPI2,
) => {
  return (
    <>
      {page == "itensDoados" && (
        <tr key={itemID} className={styles.conteudo}>
          <td>
            <div className={`${styles.card} texto_tabela`} id={styles.nomeItem}>
              <span id={styles.textoT}>{itemNome}</span>
            </div>
          </td>
          <td>
            <div
              className={`${styles.card} texto_tabela`}
              id={styles.tipoMedida}
            >
              <span>{medida}</span>
            </div>
          </td>

          <td>
            <div
              className={`${styles.card} texto_tabela`}
              id={styles.quantidade}
            >
              <span>{quantidade}</span>
            </div>
          </td>

          <td>
            <div className={`${styles.card} texto_tabela`} id={styles.unidade}>
              <span id={styles.teste}>{unidadeDestinoNome}</span>
            </div>
          </td>

          <td>
            <div
              className={`${styles.card} texto_tabela`}
              id={styles.usuarioDoador}
            >
              <span>{usuarioNome}</span>
            </div>
          </td>

          <td>
            <div className={`${styles.card} texto_tabela`} id={styles.data}>
              <span>
                {dataChegada
                  ? new Date(dataChegada).toLocaleDateString("pt-BR")
                  : "Item não chegou.."}
              </span>
            </div>
          </td>
        </tr>
        // ))
      )}
    </>
  );
};
