import * as React from "react";
import * as Select from "@radix-ui/react-select";
import classNames from "classnames";
import { CheckIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./select.module.css";

// 1. Importe seus mocks e interfaces do arquivo onde eles estão
import { 
  logTipoItem, 
  logUnidade 
} from "@/src/pages/api/logHistoricoMock"; // Ajuste o caminho se necessário

import {  listar_tipoItem, 
  listarUnidade, } from "@/src/pages/api/logHistorico"
// 2. Criamos um tipo unificado para o estado interno do Select, facilitando o .map
interface SelectOptionFormatted {
  id: string;
  label: string;
}

interface SelectDemoProps {
  tipo: "tipoItem" | "unidade"; // Define qual mock usar
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

const SelectDemo: React.FC<SelectDemoProps> = ({
  tipo,
  placeholder = "Escolha uma opção...",
  value,
  onValueChange,
}) => {
  const [options, setOptions] = useState<SelectOptionFormatted[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (tipo === "tipoItem") {
          const dados: logTipoItem[] = await listar_tipoItem();
          // Padroniza o formato para { id, label }
          const formatado = dados.map(item => ({
            id: item.tipoItemId,
            label: item.tipoItemNome
          }));
          setOptions(formatado);
        } else if (tipo === "unidade") {
          const dados: logUnidade[] = await listarUnidade();
          // Padroniza o formato para { id, label }
          const formatado = dados.map(item => ({
            id: item.unidadeId,
            label: item.unidadeNome
          }));
          setOptions(formatado);
        }
      } catch (error) {
        console.error("Erro ao carregar dados mockados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tipo]);

  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className={styles.Trigger}>
        <Select.Value placeholder={loading ? "Carregando..." : placeholder} />
        <Select.Icon className={styles.Icon}>
          <ChevronDown size={35} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.Content}>
          <Select.ScrollUpButton className={styles.ScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className={styles.Viewport}>
            <Select.Group>
              {options.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
              
              {options.length === 0 && !loading && (
                <div style={{ padding: '8px', fontSize: '14px', color: '#888' }}>
                  Nenhum item encontrado
                </div>
              )}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

// --- Componente auxiliar SelectItem ---
type SelectItemProps = React.ComponentPropsWithoutRef<typeof Select.Item>;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      ref={forwardedRef}
      className={classNames(styles.Item, className)}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={styles.ItemIndicator}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});
SelectItem.displayName = "SelectItem";

export default SelectDemo;