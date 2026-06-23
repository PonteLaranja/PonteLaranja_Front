import styles from "./cadastrounidade.module.css";
import { useEffect, useState } from "react";
import { cadastrarUnidade, listarUnidade2 } from "../api/unidade";
import { listarTipoUnidade } from "../api/tipoUnidade";
import { ListarResponsaveis } from "../api/usuario";
import HeaderMinimazado from "@/components/header-minimizado/header-minimizado";
// import { listarTipoUnidade } from "@/api/tipoUnidade";
// import { ListarResponsaveis } from "@/api/usuario";
// import { cadastrarUnidade } from "@/src/api/unidade";




export interface usuariosListagem {
  usuarioID: string;
  nome: string;
  email: string;
  dataCriação: string;
  tipoUsuarioID: string;
  nomeTipoUsuario: string
}

export interface tipoUnidadeListagem {
  tipoUnidadeID: string;
  tipoUnidadeNome: string;
}

const CadastroUnidade = () => {

  const [nome, setNome] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [resposavelSelecionado, setResposavelSelecionado] = useState<string>("");
  const [tipoUnidadeSelecionado, setTipoUnidadeSelecionado] = useState<string>("");

  const [resposavel, setResposavel] = useState<usuariosListagem[]>([]);
  const [tipoUnidade, setTipoUnidade] = useState<tipoUnidadeListagem[]>([]);

  async function listarUsuario() {
    try {
      const listarRespo = await ListarResponsaveis();
      setResposavel(listarRespo ?? [])
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function listarTipos() {
    try {
      const listarTipo = await listarTipoUnidade();
      setTipoUnidade(listarTipo ?? [])
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function CadastroUnidade(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try{
      const dados = {
        nomeUnidadeDto: nome,
        cepDto: cep,
        usuarioResponsavelDto: resposavelSelecionado,
        tipoUnidadeDto: tipoUnidadeSelecionado
      }

      console.log(dados)
      cadastrarUnidade(dados)
    } catch(error: any){
      console.log(error.message)
    }
  }

  useEffect(() => {
    listarTipos();
    listarUsuario();
  }, [])
  return (
    <>
      <HeaderMinimazado />
      <main className={styles.main}>
        <h2>Cadastro de Unidade</h2>
        <form className={styles.form} onSubmit={CadastroUnidade}>
          <div className={styles.primeiraLinha}>
            <div className={styles.nome}>
              <h4>Nome</h4>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className={styles.cep}>
              <h4>CEP</h4>
              <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
            </div>
          </div>
          <div className={styles.segundaLinha}>
            <div className={styles.Selects}>
              <h4>Responsável</h4>
              <select
                value={resposavelSelecionado} onChange={(r) => setResposavelSelecionado(String(r.target.value))}
              >
                <option value="" disabled selected>Selecione o usuário</option>
                {(resposavel ?? []).map(usuario => (
                  <option key={usuario.usuarioID} value={usuario.usuarioID}>{usuario.nome}</option>
                ))}
              </select>
            </div>
            <div className={styles.Selects}>
              <h4>Tipo Unidade</h4>
              <select
                value={tipoUnidadeSelecionado} onChange={(r) => setTipoUnidadeSelecionado(String(r.target.value))}
              >
                <option value="" disabled selected>Selecione o tipo da Unidade</option>
                {(tipoUnidade ?? []).map(tipo => (
                  <option key={tipo.tipoUnidadeID} value={tipo.tipoUnidadeID}>{tipo.tipoUnidadeNome}</option>
                ))}
              </select>
            </div>
          </div>
          <button>Cadastrar</button>
        </form>
      </main>
    </>
  );
};

export default CadastroUnidade;