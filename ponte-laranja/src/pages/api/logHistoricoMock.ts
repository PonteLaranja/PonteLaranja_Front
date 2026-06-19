export interface LogDoacao {
    logId: string;
    itemId: string;
    nomeItem: string;
    quantidade: number;
    tipoMedida: string;
    unidade: string;
    usuarioDoador: string;
    data: Date;
}

export const logsMock: LogDoacao[] = [
    {
        logId: "LOG001",
        itemId: "ITEM001",
        nomeItem: "Arroz",
        tipoMedida: "KG",
        quantidade: 10,
        unidade: "1.34 - São Caetano do Sul",
        usuarioDoador: " João Silva ",
        data: new Date("2026-06-15T09:30:00")
    },
    {
        logId: "LOG002",
        itemId: "ITEM002",
        nomeItem: "Feijão",
        tipoMedida: "KG",
        quantidade: 5,
        unidade: "1.34 - São Caetano do Sul",
        usuarioDoador: "Maria Oliveira",
        data: new Date("2026-06-15T11:20:00")
    },
    {
        logId: "LOG003",
        itemId: "ITEM003",
        nomeItem: "Leite",
        tipoMedida: "L",
        quantidade: 20,
        unidade: "1.34 - São Caetano do Sul",
        usuarioDoador: "Carlos Souza",
        data: new Date("2026-06-16T08:15:00")
    },
    {
        logId: "LOG004",
        itemId: "ITEM004",
        nomeItem: "Macarrão",
        tipoMedida: "KG",
        quantidade: 15,
        unidade: "1.34 - São Caetano do Sul",
        usuarioDoador: "Ana Costa",
        data: new Date("2026-06-16T14:45:00")
    },
    {
        logId: "LOG005",
        itemId: "ITEM005",
        nomeItem: "Óleo de Soja",
        tipoMedida: "L",
        quantidade: 8,
        unidade: "1.34 - São Caetano do Sul",
        usuarioDoador: "Pedro Santos",
        data: new Date("2026-06-17T10:00:00")
    }
    ,
    {
        logId: "LOG004",
        itemId: "ITEM004",
        nomeItem: "Macarrão",
        tipoMedida: "KG",
        quantidade: 15,
        unidade: "1.34 - São Caetano do Sul",
        usuarioDoador: "Ana Costa",
        data: new Date("2026-06-16T14:45:00")
    },
    // {
    //     logId: "LOG005",
    //     itemId: "ITEM005",
    //     nomeItem: "Óleo de Soja",
    //     tipoMedida: "L",
    //     quantidade: 8,
    //     unidade: "1.34 - São Caetano do Sul",
    //     usuarioDoador: "Pedro Santos",
    //     data: new Date("2026-06-17T10:00:00")
    // }
    // ,
    // {
    //     logId: "LOG004",
    //     itemId: "ITEM004",
    //     nomeItem: "Macarrão",
    //     tipoMedida: "KG",
    //     quantidade: 15,
    //     unidade: "1.34 - São Caetano do Sul",
    //     usuarioDoador: "Ana Costa",
    //     data: new Date("2026-06-16T14:45:00")
    // },
    // {
    //     logId: "LOG005",
    //     itemId: "ITEM005",
    //     nomeItem: "Óleo de Soja",
    //     tipoMedida: "L",
    //     quantidade: 8,
    //     unidade: "1.34 - São Caetano do Sul",
    //     usuarioDoador: "Pedro Santos",
    //     data: new Date("2026-06-17T10:00:00")
    // }
    // ,
    // {
    //     logId: "LOG004",
    //     itemId: "ITEM004",
    //     nomeItem: "Macarrão",
    //     tipoMedida: "KG",
    //     quantidade: 15,
    //     unidade: "1.34 - São Caetano do Sul",
    //     usuarioDoador: "Ana Costa",
    //     data: new Date("2026-06-16T14:45:00")
    // },
    // {
    //     logId: "LOG005",
    //     itemId: "ITEM005",
    //     nomeItem: "Óleo de Soja",
    //     tipoMedida: "L",
    //     quantidade: 8,
    //     unidade: "1.34 - São Caetano do Sul",
    //     usuarioDoador: "Pedro Santos",
    //     data: new Date("2026-06-17T10:00:00")
    // }
    // ,
    // {
    //     logId: "LOG004",
    //     itemId: "ITEM004",
    //     nomeItem: "Macarrão",
    //     tipoMedida: "KG",
    //     quantidade: 15,
    //     unidade: "1.34 - São Caetano do Sul",
    //     usuarioDoador: "Ana Costa",
    //     data: new Date("2026-06-16T14:45:00")
    // },
    // {
    //     logId: "LOG005",
    //     itemId: "ITEM005",
    //     nomeItem: "Óleo de Soja",
    //     tipoMedida: "L",
    //     quantidade: 8,
    //     unidade: "1.34 - São Caetano do Sul",
    //     usuarioDoador: "Pedro Santos",
    //     data: new Date("2026-06-17T10:00:00")
    // }
    
];