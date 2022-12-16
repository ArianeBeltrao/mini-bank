import { useState } from "react";
import Entrada from "./Entrada";
import Botao from "./Botao";
import User from "../../core/User"

interface FormularioProps {
    cliente: User
    clienteMudou?: (cliente: User) => void
    cancelado?: () => void
}
export default function Formulario(props:FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [email, setEmail] = useState(props.cliente?.email ?? '')

    return (
        <div>
            {id ? (
                <Entrada 
                somenteLeitura //o usuario nao muda o id
                texto='Código' 
                valor={id}
                />
            ) : false}

            <Entrada 
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
            />

            <Entrada 
                texto="Email" 
                valor={email}
                valorMudou={setEmail}
            />
            
            <div className="formulario-botao-linha">
                <Botao 
                    onClick={() => props.clienteMudou?.(new User(nome, email, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                
                <Botao onClick={props.cancelado} >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}