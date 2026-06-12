import styles from "./login.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <img src="/img/logo-banner.png" alt="" />
      </div>
      <form className={styles.login}>
        <h1>LOGIN</h1>
        <div className={styles.inserir}>
          <div className={styles.inserir_dados}>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className={styles.inserir_dados}>
            <label htmlFor="" id={styles.senha}>Senha</label>
            <div id={styles.inserir_senha}>
              <input type="text" />
              <img src="/svg/olho.svg" alt="" />
            </div>
          </div>
        </div>
        <button>Entrar</button>
      </form>
    </main>
  );
};

export default Login;
