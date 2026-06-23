import styles from "./cadastrousuario.module.css";
import { useEffect, useState } from "react";
import { cadastroUsuario } from "@/pages/api/usuario";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { emit } from "process";
import { listarTipoUsuario } from "../api/tipoUsuario";

const Cadastro = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarSenha, setConfirmar] = useState<string>("");

  const router = useRouter();

  async function listarTipo() {
    const response = await listarTipoUsuario();
    console.log(response.data);
  }
  async function enviarCadastro(e: React.FormEvent) {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      toast("As senhas não coincidem");
      return;
    }

    try {
      const dados = {
        nome: nome,
        senha: senha,
        email: email,
        tipoUsuarioID: "110ded0b-b763-4ef2-9ec3-a07fe0c062cc", //! Conferir o tipoUsuarioID
      };

      console.log(dados);

      await cadastroUsuario(dados);

      toast("Usuário cadastrado com sucesso");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      toast(error.message);
    }
  }

  useEffect(() => {
    listarTipo();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.img}>
          <img src="/imgs/logo-banner.png" alt="Logo" />
        </div>

        <form className={styles.login} onSubmit={enviarCadastro}>
          <h1>CADASTRA-SE</h1>

          <div className={styles.LabelInput}>
            <div className={styles.email}>
              <label>Nome</label>

              <div>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.email}>
              <label>Email</label>

              <div>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.senha}>
              <label>Senha</label>

              <div>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.senha}>
              <label>Confirmar Senha</label>

              <div>
                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmar(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.botoes}>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Cadastro;
