import { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [email, SetEmail] = useState<string>("");
  const [senha, SetSenha] = useState<string>("");

  const router = useRouter();

  const notificacao = (msg: string) => toast.success(msg);
  const erro = (msg: string) => toast.error(msg);


  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <img src="/img/logo-banner.png" alt="" />
      </div>
      <form className={styles.login}>
        <h1>LOGIN</h1>
        <div className={styles.LabelInput}>
          <div className={styles.email}>
            <label htmlFor="">Email</label>
            <div>
            <input type="email" placeholder="email@gmail.com"></input>
            </div>
          </div>
          <div className={styles.senha}>
            <label htmlFor="">Senha</label>
            <div>
            <input type="password"></input>
            </div>
          </div>
        </div> 
        <div className={styles.botoes}>
        <button>Entrar</button>
        </div> 
        <p>Não possui cadastro? <a href="">Click aqui</a></p>
      </form>
    </main>
  );
};

export default Login;
