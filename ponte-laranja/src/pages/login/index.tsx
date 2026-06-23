import { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { login } from "../api/autenticacao";
import Link from "next/link";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const router = useRouter();
  const notificacao = (msg: string) => toast.success(msg);
  const erro = (msg: string) => toast.error(msg);

  async function autenticar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(email, senha);
      notificacao("Login bem sucedido!");

      //espera 2 segundos para redirecionar para a login
      setTimeout(() => {
        router.push("/home");
      }, 2000); // 2 segundos
    } catch (error: any) {
      erro(error.message);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <img src="/img/logo-banner.png" alt="" />
      </div>
      <form className={styles.login} onSubmit={autenticar}>
        <h1>LOGIN</h1>
        <div className={styles.LabelInput}>
          <div className={styles.email}>
            <label htmlFor="">Email</label>
            <div>
              <input
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <div className={styles.senha}>
            <label htmlFor="">Senha</label>
            <div>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className={styles.botoes}>
          <button type="submit">Entrar</button>
        </div>
        <Link href={"/cadastrousuario"} className={styles.link}>Não possui cadastro? Clique aqui</Link>
      </form>
    </main>
  );
};

export default Login;
