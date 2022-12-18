import { useState } from "react";
import Entrada from "./Entrada";
import Botao from "./Botao";
import TransactionCore from "../../core/TransactionCore"

interface FormularioProps {
    cliente: TransactionCore
    clienteMudou?: (cliente: TransactionCore) => void
    cancelado?: () => void
}
export default function Formulario(props:FormularioProps) {
    const id = props.cliente?.id
    const userId = props.cliente?.userId
    const bank = props.cliente?.userId
    
    const [type, setType] = useState(props.cliente?.type ?? '')
    const [value, setValue] = useState(props.cliente?.value ?? '')
    const [date, setDate] = useState(props.cliente?.date ?? '')
    const [number, setNumber] = useState(props.cliente?.numberAccount ?? '')
    return (
        <div>
            {id ? (
                <Entrada 
                somenteLeitura //o usuario nao muda o id
                texto='Id' 
                valor={id}
                />
            ) : false}

            {userId ? (
                <Entrada 
                somenteLeitura //o usuario nao muda o id
                texto='User Id' 
                valor={userId}
                />
            ) : false}

            <Entrada 
                texto="Type" 
                valor={type}
                valorMudou={setType}
            />

            <Entrada 
                texto="Value" 
                valor={value}
                valorMudou={setValue}
            />

            <Entrada 
                texto="Date" 
                valor={date}
                valorMudou={setDate}
            />

            <Entrada 
                texto="Number Account" 
                valor={number}
                valorMudou={setNumber}
            />
            
            <div className="formulario-botao-linha">
                <Botao 
                    onClick={() => props.clienteMudou?.(new TransactionCore(id, userId, bankAccountId, type, value, date, numberAccount ))}>
                    {id ? 'Alterar' : 'Create transfer'}
                </Botao>
                
                <Botao onClick={props.cancelado} >
                    Cancel
                </Botao>
            </div>
            
            
            
        </div>
    )
}