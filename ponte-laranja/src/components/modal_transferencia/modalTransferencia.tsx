import styles from "./modalTransferencia.module.css"

const ModalTransferencia = () => {
    return(
        <>
            <div className={styles.modalTransferencia} >
                <h2 className={styles.nomeDoItem}>Nome do item</h2>
                <h3>Transferência de unidade</h3>

                <div className={styles.campoUnidade}>
                    <label className={styles.label} htmlFor="">Unidade:</label>
                    <select className={styles.select} name="" id="">
                        <option value="" className={styles.option}>São Paulo</option>
                        <option value="" className={styles.option}>São Paulo</option>
                        <option value="" className={styles.option}>São Paulo</option>
                    </select>
                </div>

                <div className={styles.campoMotivo}>
                    <label htmlFor="" className={styles.label}>Motivo da transferência:</label>
                    <textarea className={styles.textArea} name="" id="">

                    </textarea>
                </div>

                <button className={styles.btn_transferir}>Transferir</button>
            </div>
        </>
    )
}

export default ModalTransferencia;