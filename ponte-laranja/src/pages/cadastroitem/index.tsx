import styles from "./cadastroitem.module.css";

const cadastroitem = () => {
  return (
    <main className={styles.main}>
      <h2>Cadastro de Itens</h2>
      <form className={styles.form}>
      <div className={styles.primeiraLinha}>
        <div className={styles.nome}>
          <h4>Nome</h4>
          <input type="text" />
        </div>
        <div className={styles.unidade}>
          <h4>UN</h4>
          <input type="text" />
        </div>
      </div>
      <div className={styles.segundaLinha}>
        <div className={styles.medida}>
          <h4>Medida</h4>
          <input type="text" />
        </div>
        <div className={styles.coleta}>
          <h4>Coleta</h4>
          <input type="date" />
        </div>
        <div className={styles.doacao}>
          <h4>Doação</h4>
          <input type="date" />
        </div>
      </div>
      <div className={styles.terceiraLinha}>
        <div className={styles.TipoMedida}>
          <h4>Tipo da Medida</h4>
          <select>
            <option value="kg">kg</option>
          </select>
        </div>
        <div className={styles.TipoItem}>
          <h4>Tipo de Item</h4>
          <select>
            <option value="brinquedo">Brinquedo</option>
          </select>
        </div>
        <div className={styles.Unidade}>
          <h4>Unidade</h4>
          <select>
            <option value="santo andre">Santo André</option>
          </select>
        </div>
      </div>
      <div className={styles.quartaLinha}>
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
  );
};

export default cadastroitem;
