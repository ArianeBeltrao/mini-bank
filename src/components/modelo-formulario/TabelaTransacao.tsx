import TransactionCore from "../../core/TransactionCore"
import { IconeEdicao } from "./Icone"


interface TabelaProps {
    clientes: TransactionCore[]
    clienteSelecionado?: (cliente: TransactionCore) => void
    clienteExcluido?: (cliente: TransactionCore) => void
}

export default function TabelaTransacao(props: TabelaProps) {

    function renderizarCabecalho() {
        return (
            <tr> {/*bank account table*/}
                <th className="table-th">Id</th>
                <th className="table-th">User Id</th>
                <th className="table-th">Company Id</th>
                <th className="table-th">baasId</th>
                <th className="table-th">Number Account</th>
                <th className="table-th">Value</th>

                <th className="table-th">Actions</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td className="table-th">{cliente.id}</td>
                    <td className="table-th">{cliente.userId}</td>
                    <td className="table-th">{cliente.bankAccountId}</td>
                    <td className="table-th">{cliente.numberAccount}</td>
                    <td className="table-th">{cliente.type}</td>
                    <td className="table-th">{cliente.value}</td>
                    <td className="table-th">{cliente.date}</td>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: TransactionCore) {
        return (
            <td >
                <button className="table-icon" onClick={() => props.clienteSelecionado?.(cliente)}>
                    {IconeEdicao}
                </button>
            </td>
        )
    }

   return(
        <table className="table">
            <thead className="table-thead">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody> 
        </table>
    )
}