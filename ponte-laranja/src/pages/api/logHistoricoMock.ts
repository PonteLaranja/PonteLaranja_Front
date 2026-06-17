export interface LogDoacao {
    logId: string;
    itemId: string;
    nomeItem: string;
    quantidade: number;
    unidade: string;
    usuarioDoador: string;
    data: Date;
}

export const logsMock: LogDoacao[] = [
    {
        logId: "LOG001",
        itemId: "ITEM001",
        nomeItem: "Arroz",
        quantidade: 10,
        unidade: "kg",
        usuarioDoador: "João Silva",
        data: new Date("2026-06-15T09:30:00")
    },
    {
        logId: "LOG002",
        itemId: "ITEM002",
        nomeItem: "Feijão",
        quantidade: 5,
        unidade: "kg",
        usuarioDoador: "Maria Oliveira",
        data: new Date("2026-06-15T11:20:00")
    },
    {
        logId: "LOG003",
        itemId: "ITEM003",
        nomeItem: "Leite",
        quantidade: 20,
        unidade: "L",
        usuarioDoador: "Carlos Souza",
        data: new Date("2026-06-16T08:15:00")
    },
    {
        logId: "LOG004",
        itemId: "ITEM004",
        nomeItem: "Macarrão",
        quantidade: 15,
        unidade: "pacotes",
        usuarioDoador: "Ana Costa",
        data: new Date("2026-06-16T14:45:00")
    },
    {
        logId: "LOG005",
        itemId: "ITEM005",
        nomeItem: "Óleo de Soja",
        quantidade: 8,
        unidade: "un",
        usuarioDoador: "Pedro Santos",
        data: new Date("2026-06-17T10:00:00")
    }
];