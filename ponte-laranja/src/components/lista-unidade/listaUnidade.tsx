import styles from "./listaUnidade.module.css"

const ListaUnidade = () => {
    return(
        <>
            <h2>Unidades</h2>
            <section>
                <input type="text" placeholder="Pesquisar..."/>
                <select name="tipoUnidades">
                    <option value="Matrizes">Matrizes</option>
                    <option value="Distribuidoras">Distribuidoras</option>
                </select>
            </section>

            <section>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CEP</th>
                        <th>Responsavel</th>
                        <th>Tipo Unidade</th>
                    </tr>
                </thead>

                <tbody>
                    
                </tbody>
            </section>
        </>
    )
}

export default ListaUnidade