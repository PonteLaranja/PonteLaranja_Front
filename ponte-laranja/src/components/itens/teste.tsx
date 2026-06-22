import { SquarePen } from "lucide-react";
import styles from "./itens.module.css";
import { Transferencia } from "@/src/pages/api/logHistoricov2";

type ItensProps = Transferencia & {
  page?: "itensDoados" | "itensRecebidos" | "itensUnidade";
};

export default function ItemV2({
  itemNome,
  itemCategoria,
  unidadeOrigemNome,
  unidadeDestinoNome,
  dataChegada,
  transferenciaID,
  page,
}: ItensProps) {
  return (
    <tr className={styles.conteudo}>
      {/* Nome do item */}
      <td>
        <div className={`${styles.card} texto_tabela`}>
          <span>{itemNome ?? "Sem nome"}</span>
        </div>
      </td>

      {/* Categoria */}
      <td>
        <div className={`${styles.card} texto_tabela`}>
          <span>{itemCategoria}</span>
        </div>
      </td>

      {/* Origem (quando aplicável) */}
      {(page === "itensDoados" || page === "itensUnidade") && (
        <td>
          <div className={`${styles.card} texto_tabela`}>
            <span>{unidadeOrigemNome}</span>
          </div>
        </td>
      )}

      {/* Destino (quando aplicável) */}
      {(page === "itensRecebidos" || page === "itensUnidade") && (
        <td>
          <div className={`${styles.card} texto_tabela`}>
            <span>{unidadeDestinoNome}</span>
          </div>
        </td>
      )}

      {/* Data */}
      <td>
        <div className={`${styles.card} texto_tabela`}>
          <span>
            {new Date(dataChegada).toLocaleDateString("pt-BR")}
          </span>
        </div>
      </td>

      {/* Ações */}
      <td>
        <div className={`${styles.card} texto_tabela`}>
          <SquarePen size={28} />
        </div>
      </td>
    </tr>
  );
}