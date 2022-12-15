import Cliente from "../../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icone"


interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="table-th">Código</th>
                <th className="table-th">Nome</th>
                <th className="table-th">E-mail</th>
                <th className="table-th">Ações</th>
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

    function renderizarAcoes(cliente: Cliente) {
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