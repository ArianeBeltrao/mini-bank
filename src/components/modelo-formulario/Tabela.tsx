import User from "../../core/User"
import { IconeEdicao, IconeLixo } from "./Icone"

interface TabelaProps {
    clientes: User[]
    clienteSelecionado?: (cliente: User) => void
    clienteExcluido?: (cliente: User) => void
}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="table-th">ID</th>
                <th className="table-th">Legal Name</th>
                <th className="table-th">Email Address</th>
                <th className="table-th">Actions</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td className="table-th">{cliente.id}</td>
                    <td className="table-th">{cliente.nome}</td>
                    <td className="table-th">{cliente.email}</td>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: User) {
        return (
            <td>
                <button className="table-icon" onClick={() => props.clienteSelecionado?.(cliente)}>
                    {IconeEdicao}
                </button>
                <button className="table-icon" onClick={() => props.clienteExcluido?.(cliente)}>
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