import Modelo from './modelo-formulario/Modelo';
import Botao from './modelo-formulario/Botao'
import TabelaAccount from './modelo-formulario/TabelaAccount'
import AccountCore from '../core/AccountCore'
import { useState } from 'react'

interface AccountProps {
    titulo: string
    children: any
}
export default function Account(props: AccountProps) {

  const [cliente, setCliente] = useState<AccountCore>(AccountCore.vazio())//AccountCore selecionado
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela

  const transacao = [
    new AccountCore(123, 45000, 12, '234.45', 2000)
  ]

  function TransactionCoreSelecionado(cliente: AccountCore) {
    setCliente(cliente)
    setVisivel('form')
  }

  /*function salvarTransactionCore(cliente: AccountCore) {
    console.log(cliente)
    setVisivel('tabela')
  }*/

  function novoTransactionCore() {
    setCliente(AccountCore.vazio())
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
                  <TabelaAccount clientes={transacao}
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