export interface Item {
    itemId: string;          
    nomeItem: string;        
    quantidade: number;      
    unidade: string;         
    tipoItem: string;   
    nomeUnidade: string;     
    usuarioDoador: string;       
    data: Date;              
}

export const ItensMock: Item[] = [
    {
        itemId: "ITEM001",
        nomeItem: "Arroz",
        quantidade: 10,
        unidade: "São",
        tipoItem: "fsda",
        usuarioDoador: "João Silva",
        nomeUnidade: "São Caetano do Sul",
        data: new Date("2026-06-15T09:30:00")
    },
    {
        itemId: "ITEM001",
        nomeItem: "Arroz",
        quantidade: 10,
        unidade: "São",
        tipoItem: "fsda",
        usuarioDoador: "João Silva",
        nomeUnidade: "São Caetano do Sul",
        data: new Date("2026-06-15T09:30:00")
    },
      {
        itemId: "ITEM001",
        nomeItem: "Arroz",
        quantidade: 10,
        unidade: "São",
        tipoItem: "fsda",
        usuarioDoador: "João Silva",
        nomeUnidade: "São Caetano do Sul",
        data: new Date("2026-06-15T09:30:00")
    },
      {
        itemId: "ITEM001",
        nomeItem: "Arroz",
        quantidade: 10,
        unidade: "São",
        tipoItem: "fsda",
        usuarioDoador: "João Silva",
        nomeUnidade: "São Caetano do Sul",
        data: new Date("2026-06-15T09:30:00")
    },
        {
        itemId: "ITEM001",
        nomeItem: "Arroz",
        quantidade: 10,
        unidade: "São",
        tipoItem: "fsda",
        usuarioDoador: "João Silva",
        nomeUnidade: "São Caetano do Sul",
        data: new Date("2026-06-15T09:30:00")
    }
];