import Modelo from './modelo-formulario/Modelo'
import Botao from "./modelo-formulario/Botao"
import TabelaTransacao from "./modelo-formulario/TabelaTransacao"
import TransactionCore from "../core/TransactionCore"
import { useState } from "react"

interface AccountProps {
    titulo: string
    children: any
}
export default function Account(props: AccountProps) {

  const [cliente, setCliente] = useState<TransactionCore>(TransactionCore.vazio())//TransactionCore selecionado
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela

  const transacao = [
    new TransactionCore(123, 45000, 12, '12/03/2020')
  ]

  function TransactionCoreSelecionado(cliente: TransactionCore) {
    setCliente(cliente)
    setVisivel('form')
  }

  /*function salvarTransactionCore(cliente: TransactionCore) {
    console.log(cliente)
    setVisivel('tabela')
  }*/

  function novoTransactionCore() {
    setCliente(TransactionCore.vazio())
    setVisivel('form')
  }

  return (
        <div>
            <Modelo titulo="Bank Account">
                <>
                  <div>
                    <hr/>
                    <Botao className="botao" onClick={novoTransactionCore} >Create Bank Account</Botao>
                  </div>
                  <TabelaTransacao clientes={transacao}
                    clienteSelecionado={TransactionCoreSelecionado}
                  />
                </>
              
                {/*<Formulario 
                  cliente={cliente}
                  clienteMudou={salvarTransactionCore}
                  cancelado={() => setVisivel('tabela')}
                />*/}
              
            </Modelo>
        </div>
    )
}