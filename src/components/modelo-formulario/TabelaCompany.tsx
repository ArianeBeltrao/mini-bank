import CompanyCore from "../../core/CompanyCore"
import { IconeEdicao } from "./Icone"

interface TabelaCompanyProps {
    companys: CompanyCore[]
    companySelected?: (company: CompanyCore) => void
    companyAltered?: CompanyCore[] //teste patch
    

}

export default function TabelaCompany(props: TabelaCompanyProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="table-tr">ID</th>
                <th className="table-tr">Legal Name</th>
                <th className="table-tr">Email Address</th>
                <th className="table-tr">Actions</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.companys?.map((company, i) => {
            return (
                <tr key={company.id}>
                    <td className="table-th">{company.id}</td>
                    <td className="table-th">{company.legalName}</td>
                    <td className="table-th">{company.emailAddress}</td>
                    {renderizarAcoes(company)}
                </tr>
            )
        })
    }

    function renderizarAcoes(company: CompanyCore) {
        return (
            <td>
                <button className="table-icon" onClick={() => props.companySelected?.(company)}>
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