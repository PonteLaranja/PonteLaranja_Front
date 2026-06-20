import * as React from "react";
import * as Select from "@radix-ui/react-select";
import classNames from "classnames";
import { CheckIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./select.module.css";

import { listarDoacao, listarUnidade } from "@/src/pages/api/logHistorico";

// 1. Definição dos tipos
interface SelectOption {
  id: string | number; // ou value, mude conforme seu back-end
  nome: string;        // ou descricao, mude conforme seu back-end
}

interface SelectDemoProps 
{
  tipo: "doacao" | "unidade"; // Definir quais tipos este select aceita
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
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

//   2. useEffect para buscar os dados com Axios baseado na prop 'tipo'
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (tipo === "doacao") {
          response = await listarDoacao(); // Supondo que retorne { data: [...] } ou direto o array
        } else if (tipo === "unidade") {
          response = await listarUnidade();
        }

        // Ajuste aqui dependendo de como o axios retorna o seu dado (ex: response.data)
        if (response) {
          setOptions(response); 
        }
      } catch (error) {
        console.error("Erro ao buscar dados do select:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tipo]); // Executa novamente se o 'tipo' mudar

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
                <SelectItem key={item.id} value={String(item.id)}>
                  {item.nome}
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

// --- Seu componente SelectItem permanece igual ---
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