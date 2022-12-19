import AccountCore from "../../core/AccountCore"
import { IconeEdicao } from "./Icone"


interface TabelaProps {
    clientes: AccountCore[]
    clienteSelecionado?: (cliente: AccountCore) => void
    clienteExcluido?: (cliente: AccountCore) => void
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
                    <td className="table-th">{cliente.companyId}</td>
                    <td className="table-th">{cliente.bassId}</td>
                    <td className="table-th">{cliente.numberAccount}</td>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: AccountCore) {
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