import styles from "./login.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <img src="/img/logo-banner.png" alt="" />
      </div>
      <form className={styles.login}>
        <h1>LOGIN</h1>
        <div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="email@gmail.com"></input>
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input type="password"></input>
          </div>
        </div>  
        <button>Entrar</button>
      </form>
    </main>
  );
};

export default Login;
