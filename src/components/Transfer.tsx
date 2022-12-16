import Modelo from './modelo-formulario/Modelo'
import FormularioTransfer from "./modelo-formulario/FormularioTransfer"
import TransactionCore from "../core/TransactionCore"
import { useState } from "react"

interface TransferProps {
    titulo: string
    children: any
}
export default function Transfer(props: TransferProps) {

  const [cliente, setCliente] = useState<TransactionCore>(TransactionCore.vazio())//TransactionCore selecionado
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela

  const transacao = [
    new TransactionCore('1', '1.02', '10.000', 123, 223, "03/03/2022", 50256)
  ]

  function TransactionCoreSelecionado(cliente: TransactionCore) {
    setCliente(cliente)
    setVisivel('form')
  }

  function salvarTransactionCore(cliente: TransactionCore) {
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoTransactionCore() {
    setCliente(TransactionCore.vazio())
    setVisivel('form')
  }

  return (
        <div>
            <Modelo titulo="Transaction">
              <hr/>
                <FormularioTransfer 
                  cliente={cliente}
                  clienteMudou={salvarTransactionCore}
                  cancelado={() => setVisivel('tabela')}
                />
            </Modelo>
        </div>
    )
}