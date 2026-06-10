import styles from './login.module.css'


const Login = () => {





    return (
        <main className={styles.main}>
            <div><img src="/img/logo-banner.png" alt="" /></div>
            <form className={styles.login}>
                <h1>LOGIN</h1>
                <div className={styles.inserir}>
                    <div className={styles.inserir_dados}><label htmlFor="">Email</label><input type="text" /></div>
                    <div className={styles.inserir_dados}><label htmlFor="">Senha</label><input type="text" /></div></div>
                <button>Entrar</button>
            </form>
        </main>
    )
}

export default Login