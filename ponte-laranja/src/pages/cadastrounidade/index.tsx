import styles from "./cadastrounidade.module.css";
import { Header } from "@/src/components/Header/header";

const CadastroUnidade = () => {
  return (
    <>
    <Header></Header>
    <main className={styles.main}>  
      <h2>Cadastro de Unidade</h2>
      <form className={styles.form}>
      <div className={styles.primeiraLinha}>
        <div className={styles.nome}>
          <h4>Nome</h4>
          <input type="text" />
        </div>
        <div className={styles.cep}>
          <h4>CEP</h4>
          <input type="text" />
        </div>
      </div>
       <div className={styles.segundaLinha}>
        <div className={styles.Responsavel}>
          <h4>Responsável</h4>
          <select>
            <option value="nicollas">Nicollas</option>
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