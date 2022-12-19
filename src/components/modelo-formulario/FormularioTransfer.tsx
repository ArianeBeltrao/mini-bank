import { useState } from "react";
import TransactionCore from "../../core/TransactionCore"
import Entrada from "./Entrada";
import Botao from "./Botao";


interface FormularioProps {
    transaction: TransactionCore
    createTransfer?: (transaction: TransactionCore) => void
    cancel?: () => void
}
export default function Formulario(props:FormularioProps) {
    const userId = props.transaction?.userId
    const bankAccountId = props.transaction?.bankAccountId
    
    const [value, setValue] = useState(props.transaction?.value ?? 0)
    const [date, setDate] = useState(props.transaction?.date ?? '')

    return (
        <div>
            <Entrada 
                somenteLeitura //o usuario nao muda o id
                texto='User Id' 
                valor={userId}
            />

            <Entrada 
                somenteLeitura //o usuario nao muda o id
                texto='Bank Account Id' 
                valor={bankAccountId}
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
            
            <div className="formulario-botao-linha">
                <Botao 
                    onClick={() => props.createTransfer?.(new TransactionCore(userId, bankAccountId, value, date ))}>
                    Create transfer
                </Botao>
                
                <Botao onClick={props.cancel} >
                    Cancel
                </Botao>
            </div>
            
        </div>
    )
}