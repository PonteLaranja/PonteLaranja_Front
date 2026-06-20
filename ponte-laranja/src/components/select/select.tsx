import * as React from "react";
import * as Select from "@radix-ui/react-select";
import classNames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from 'react'

import { ChevronDown } from "lucide-react";
import styles from "./select.module.css";
import { listarDoacao, listarUnidade } from "@/src/pages/api/logHistorico";

interface selectPros{
  tipo: "unidade" | "tipoItem"
  placeholder?: string,
  value?: string,
  trocaValor: (value: string) => void
}
type propsSelect = {
    tipo?: string;
}
const SelectTipoItem: React.FC = () => (
  


  <Select.Root>
    <Select.Trigger className={styles.Trigger} aria-label="Food">
      <Select.Value placeholder="Escolha o Tipo item.." />
      <Select.Icon className={styles.Icon}>
        <ChevronDown size={35}/>
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className={styles.Content}>
        <Select.ScrollUpButton className={styles.ScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>

        <Select.Viewport className={styles.Viewport}>
          <Select.Group>
            {/* <Select.Label className={styles.Label}>Tipo de Item</Select.Label> */}
          {/* <Select.Separator className={styles.Separator} /> */}

            <SelectItem value="apple">Brinquedo</SelectItem>
            <SelectItem value="banana">Alimento</SelectItem>
            <SelectItem value="ali">Roupa</SelectItem>
          </Select.Group>

          {/* <Select.Separator className={styles.Separator} /> */}
        </Select.Viewport>

        {/* <Select.ScrollDownButton className={styles.ScrollButton}>
          
        </Select.ScrollDownButton> */}
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectUnidade: React.FC = () => {
  return(
    <Select.Root>


    </Select.Root>
    
  )
}

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

export default SelectTipoItem;