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

export interface logTipoItem {
  tipoItemId: string;
  tipoItemNome: string;
}

export interface logUnidade {
  unidadeId: string;
  unidadeNome: string;
}

export const logsMockTipoItem: logTipoItem[] = [
  {
    tipoItemId: "Teste1",
    tipoItemNome: "Brinquedo",
  },
  {
    tipoItemId: "Teste2",
    tipoItemNome: "Roupa",
  },
  {
    tipoItemId: "Teste3",
    tipoItemNome: "Alimento",
  },
];

export const logsMockUnidade: logUnidade[] = [
  {
    unidadeId: "Teste2",
    unidadeNome: "1.34 - São Caetano do Sul",
  },

  {
    unidadeId: "Teste3",
    unidadeNome: "1.35 - São Caetano do Sul",
  },
  {
    unidadeId: "Teste4",
    unidadeNome: "1.32 - São Bernardo do Campo",
  },
  {
    unidadeId: "Teste5",
    unidadeNome: "1.31 - Santo André",
  },
];



export interface LogDoacao2 {
  logId: string;
  itemId: string;
  nomeItem: string;
  tipoMedida: string;
  quantidade: number;

  unidadeId: string;
  tipoItemId: string;

  usuarioDoador: string;
  data: Date;
}

export const logMocksV3: LogDoacao2[] = [
  {
    logId: "LOG001",
    itemId: "ITEM001",
    nomeItem: "Arroz",
    tipoItemId: "Teste3", // Alimento
    tipoMedida: "KG",
    quantidade: 10,
    unidadeId: "Teste2", // 1.34 - São Caetano do Sul
    usuarioDoador: "João Silva",
    data: new Date("2026-06-15T09:30:00"),
  },
  {
    logId: "LOG002",
    itemId: "ITEM002",
    nomeItem: "Feijão",
    tipoItemId: "Teste3", // Alimento
    tipoMedida: "KG",
    quantidade: 8,
    unidadeId: "Teste3", // 1.35 - São Caetano do Sul
    usuarioDoador: "Maria Oliveira",
    data: new Date("2026-06-16T14:20:00"),
  },
  {
    logId: "LOG003",
    itemId: "ITEM003",
    nomeItem: "Camiseta Branca",
    tipoItemId: "Teste2", // Roupa
    tipoMedida: "G",
    quantidade: 15,
    unidadeId: "Teste4", // 1.32 - São Bernardo do Campo
    usuarioDoador: "Carlos Souza",
    data: new Date("2026-06-17T10:45:00"),
  },
  {
    logId: "LOG004",
    itemId: "ITEM004",
    nomeItem: "Calça Jeans",
    tipoItemId: "Teste2", // Roupa
    tipoMedida: "M",
    quantidade: 7,
    unidadeId: "Teste5", // 1.31 - Santo André
    usuarioDoador: "Ana Pereira",
    data: new Date("2026-06-18T16:10:00"),
  },
  {
    logId: "LOG005",
    itemId: "ITEM005",
    nomeItem: "Boneco Batman",
    tipoItemId: "Teste1", // Brinquedo
    tipoMedida: "UN",
    quantidade: 12,
    unidadeId: "Teste2", // 1.34 - São Caetano do Sul
    usuarioDoador: "Lucas Santos",
    data: new Date("2026-06-19T11:30:00"),
  },
  {
    logId: "LOG006",
    itemId: "ITEM006",
    nomeItem: "Carrinho Hot Wheels",
    tipoItemId: "Teste1", // Brinquedo
    tipoMedida: "UN",
    quantidade: 20,
    unidadeId: "Teste4", // 1.32 - São Bernardo do Campo
    usuarioDoador: "Fernanda Lima",
    data: new Date("2026-06-20T13:15:00"),
  },
];


// Antigo abaixo
export const logsMockItem: LogDoacao[] = [
  {
    logId: "LOG001",
    itemId: "ITEM001",
    nomeItem: "Arroz e Feijão com Arroz de integral",
    tipoMedida: "KG",
    quantidade: 10,
    unidade:
      "1.34 - São Caetano do Sul Sufdasfasdfadsfasdfsfdsadddddddddddddddddddddddadfdsafdsl",
    usuarioDoador: "João Silva",
    data: new Date("2026-06-15T09:30:00"),
  },
  {
    logId: "LOG001",
    itemId: "ITEM001",
    nomeItem: "Arroz e Feijão com Arroz de integral",
    tipoMedida: "KG",
    quantidade: 10,
    unidade:
      "1.34 - São Caetano do Sul Sufdasfasdfadsfasdfsfdsadddddddddddddddddddddddadfdsafdsl",
    usuarioDoador: "João Silva",
    data: new Date("2026-06-15T09:30:00"),
  },
  {
    logId: "LOG002",
    itemId: "ITEM002",
    nomeItem: "Feijão",
    tipoMedida: "KG",
    quantidade: 5,
    unidade:
      "1.34 - São Caetano do Sufdasfasdfadsfasdfsfdsadddddddddddddddddddddddadfdsafdsl",
    usuarioDoador: "Maria Oliveira",
    data: new Date("2026-06-15T11:20:00"),
  },
  {
    logId: "LOG003",
    itemId: "ITEM003",
    nomeItem: "Leite",
    tipoMedida: "L",
    quantidade: 20,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Carlos Souza",
    data: new Date("2026-06-16T08:15:00"),
  },
  {
    logId: "LOG004",
    itemId: "ITEM004",
    nomeItem: "Macarrão",
    tipoMedida: "KG",
    quantidade: 15,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Ana Costa",
    data: new Date("2026-06-16T14:45:00"),
  },
  {
    logId: "LOG005",
    itemId: "ITEM005",
    nomeItem: "Óleo de Soja",
    tipoMedida: "L",
    quantidade: 8,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Pedro Santos",
    data: new Date("2026-06-17T10:00:00"),
  },
  {
    logId: "LOG004",
    itemId: "ITEM004",
    nomeItem: "Macarrão",
    tipoMedida: "KG",
    quantidade: 152,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Ana Costa",
    data: new Date("2026-06-16T14:45:00"),
  },
  {
    logId: "LOG005",
    itemId: "ITEM005",
    nomeItem: "Óleo de Soja",
    tipoMedida: "L",
    quantidade: 8,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Pedro Santos",
    data: new Date("2026-06-17T10:00:00"),
  },
  {
    logId: "LOG004",
    itemId: "ITEM004",
    nomeItem: "Macarrão",
    tipoMedida: "KG",
    quantidade: 15,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Ana Costa",
    data: new Date("2026-06-16T14:45:00"),
  },
  {
    logId: "LOG005",
    itemId: "ITEM005",
    nomeItem: "Óleo de Soja",
    tipoMedida: "L",
    quantidade: 8,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Pedro Santos",
    data: new Date("2026-06-17T10:00:00"),
  },
  {
    logId: "LOG004",
    itemId: "ITEM004",
    nomeItem: "Macarrão",
    tipoMedida: "KG",
    quantidade: 15,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Ana Costa",
    data: new Date("2026-06-16T14:45:00"),
  },
  {
    logId: "LOG005",
    itemId: "ITEM005",
    nomeItem: "Óleo de Soja",
    tipoMedida: "L",
    quantidade: 8,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Pedro Santos",
    data: new Date("2026-06-17T10:00:00"),
  },
  {
    logId: "LOG004",
    itemId: "ITEM004",
    nomeItem: "Macarrão",
    tipoMedida: "KG",
    quantidade: 15,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Ana Costa",
    data: new Date("2026-06-16T14:45:00"),
  },
  {
    logId: "LOG005",
    itemId: "ITEM005",
    nomeItem: "Óleo de Soja",
    tipoMedida: "L",
    quantidade: 8,
    unidade: "1.34 - São Caetano do Sul",
    usuarioDoador: "Pedro Santos",
    data: new Date("2026-06-17T10:00:00"),
  },
];
