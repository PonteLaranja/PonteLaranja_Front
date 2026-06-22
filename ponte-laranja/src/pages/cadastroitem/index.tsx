import styles from "./cadastroitem.module.css";
import { getUnidade, getUsuario, Item, listarItens, listarTipoItem, listarTipoMedida } from "../api/item";
import { useEffect, useState } from "react";

export interface TipoItem {
  tipoItemID: string
  nomeTipoItem: string
}

export interface TipoMedida {
  tipoMedidaID: string
  nomeTipoMedida: string
}

export interface listarunidade {
  unidadeDto: string
  nomeUnidadeDto: string
  ativo: boolean
  cepDto: string
  usuarioResponsavelDto: string
  nomeResponsavelDto: string
  tipoUnidadeDto: string
  nomeTipoUnidadeDto: string
}

export interface listarusuario {
  usuarioID: string
  nome: string
  email: string
  dataCriação: string
  tipoUsuarioID: string
}

const CadastroItem = () => {

  const [nome, setNome] = useState<string>("")
  const [quantidade, setQuantidade] = useState<number>()
  const [medida, setMedida] = useState<number>()
  const [coleta, setColeta] = useState<Date>()
  const [doacao, setDoacao] = useState<Date>()
  const [tipoItem, setTipoItem] = useState<TipoItem[]>([])
  const [tipoMedida, setTipoMedida] = useState<TipoMedida[]>([])
  const [listarUnidade, setListarUnidade] = useState<listarunidade[]>([])
  const [listarUsuario, setListarUsuario] = useState<listarusuario[]>([])

  async function salvaritem(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {

          const dados = {
              
          }

        }
        catch{

        }
      }
  async function ListarItens() {
    const itens: TipoItem[] = await listarTipoItem();
    setTipoItem(itens)
  }

  async function ListarMedida() {
    const medidas: TipoMedida[] = await listarTipoMedida();
    setTipoMedida(medidas)
  }

  async function ListarUnidade() {
    const unidades: listarunidade[] = await getUnidade();
    setListarUnidade(unidades.filter(U => U.ativo == true))
  }

  async function ListarUsuario() {
    const usuarios: listarusuario[] = await getUsuario();
    setListarUsuario(usuarios)
  }

  useEffect(() => {
    ListarItens();
    ListarMedida();
    ListarUnidade();
    ListarUsuario();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <h2>Cadastro de Itens</h2>
        <form className={styles.form}>
          <div className={styles.primeiraLinha}>
            <div className={styles.nome}>
              <h4>Nome</h4>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className={styles.unidade}>
              <h4>UN</h4>
              <input type="text" value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} />
            </div>
          </div>
          <div className={styles.segundaLinha}>
            <div className={styles.medida}>
              <h4>Medida</h4>
              <input type="text" value={medida} onChange={(e) => setMedida(Number(e.target.value))} />
            </div>
            <div className={styles.coleta}>
              <h4>Coleta</h4>
              <input type="date" value={coleta?.toLocaleDateString('pt-BR')} onChange={(e) => setColeta(new Date(e.target.value))} />
            </div>
            <div className={styles.doacao}>
              <h4>Doação</h4>
              <input type="date" value={doacao?.toLocaleDateString('pt-BR')} onChange={(e) => setDoacao(new Date(e.target.value))} />
            </div>
          </div>
          <div className={styles.terceiraLinha}>
            <div className={styles.TipoMedida}>
              <h4>Tipo da Medida</h4>
              <select>
                {tipoItem.map((item) => (
                  <option value={item.tipoItemID}>
                    {item.nomeTipoItem}
                  </option>
                )
                )
                }
              </select>
            </div>
            <div className={styles.TipoItem}>
              <h4>Tipo de Item</h4>
              <select>
                {tipoMedida.map((medida) =>
                  <option value={medida.tipoMedidaID}>
                    {medida.nomeTipoMedida}
                  </option>
                )
                }
              </select>
            </div>
            <div className={styles.Unidade}>
              <h4>Unidade</h4>
              <select>
                {listarUnidade.map((unidade) =>
                  <option value={unidade.unidadeDto}>
                    {unidade.nomeUnidadeDto}
                  </option>
                )
                }
              </select>
            </div>
          </div>
          <div className={styles.quartaLinha}>
            <div className={styles.Responsavel}>
              <h4>Responsável</h4>
              <select>
                {listarUsuario.map((usuario) =>
                  <option value={usuario.usuarioID}>
                    {usuario.nome}
                  </option>
                )
                }
              </select>
            </div>
          </div>
          <button>Cadastrar</button>
        </form>
      </main>
    </>
  );
};

export default CadastroItem;
