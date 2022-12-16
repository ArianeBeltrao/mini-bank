import TransactionCore from "../../core/TransactionCore"
import { IconeEdicao, IconeLixo } from "./Icone"


interface TabelaProps {
    clientes: TransactionCore[]
    clienteSelecionado?: (cliente: TransactionCore) => void
    clienteExcluido?: (cliente: TransactionCore) => void
}

export default function TabelaTransacao(props: TabelaProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="table-th">ID</th>
                <th className="table-th">User Id</th>
                <th className="table-th">Bank Account Id</th>
                <th className="table-th">Number Account</th>
                <th className="table-th">Type</th>
                <th className="table-th">Value</th>

                <th className="table-th">Date</th>
                

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
                <button onClick={() => props.clienteSelecionado?.(cliente)}>
                    {IconeEdicao}
                </button>
                <button onClick={() => props.clienteExcluido?.(cliente)}>
                    {IconeLixo}
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