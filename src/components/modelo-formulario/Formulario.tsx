import { useState } from "react";
import User from "../../core/User"
import Entrada from "./Entrada";
import Botao from "./Botao";


interface FormularioProps {
    cliente: User
    clienteMudou?: (cliente: User) => void //OU ALTERA OU CRIA UM NOVO 
    cancelado?: () => void
}
export default function Formulario(props:FormularioProps) {
    const id = props.cliente?.id
    const [name, setName] = useState(props.cliente?.name ?? '')
    const [email, setEmail] = useState(props.cliente?.email ?? '')

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
                texto="Name"
                valor={name}
                valorMudou={setName}
            />

            <Entrada 
                texto="Email" 
                valor={email}
                valorMudou={setEmail}
            />
            
            <div className="formulario-botao-linha">
                <Botao 
                    onClick={() => props.clienteMudou?.(new User(id, name, email))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                
                <Botao onClick={props.cancelado} >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}