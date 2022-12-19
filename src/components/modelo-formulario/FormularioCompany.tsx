import { useState } from "react";
import CompanyCore from "../../core/CompanyCore";

import Entrada from "./Entrada";
import Botao from "./Botao";


interface FormularioCompanyProps {
    company: CompanyCore
    companyAltered?: (company: CompanyCore) => void //OU ALTERA OU CRIA UM NOVO 
    cancel?: () => void
}
export default function FormularioCompany(props:FormularioCompanyProps) {
    const id = props.company?.id
    const [name, setName] = useState(props.company?.legalName ?? '')
    const [email, setEmail] = useState(props.company?.emailAddress ?? '')

    return (
        <div>
            {id ? (
                <Entrada 
                somenteLeitura //o usuario nao muda o id
                texto='Id' 
                valor={id}
                />
            ) : false}

            <Entrada 
                texto="Legal Name"
                valor={name}
                valorMudou={setName}
            />

            <Entrada 
                texto="Email Address" 
                valor={email}
                valorMudou={setEmail}
            />
            
            <div className="formulario-botao-linha">
                <Botao 
                    onClick={() => props.companyAltered?.(new CompanyCore(id, name, email))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                
                <Botao onClick={props.cancel} >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}