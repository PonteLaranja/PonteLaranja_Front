import styles from './itens.module.css'
type itensProps = {
    page?: string
}

interface Itens{
    itemID: string,
    nome: string,
    quantidade: number,
    unidade: string,
    usuarioDoador: string,
    data: Date
}

export const Itens = () => {
    return (
        <tr>
            <td>144444</td>
            <td>Pacote de Arroz</td>
            <td>12</td>
            <td>1.34 - São Caetano do Sul</td>
            <td>Caique Zanetti</td>
            <td>14/05/2026</td>
        </tr>
    )
}