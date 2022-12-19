import axios from 'axios';
import { useState } from 'react';

import Modelo from './modelo-formulario/Modelo';
import FormularioTransfer from './modelo-formulario/FormularioTransfer';
import TransactionCore from '../core/TransactionCore';


interface TransferProps {
    titulo: string
    children: any
}
export default function Transfer(props: TransferProps) {

  const baseURL = 'http://localhost:3000/transaction'

  const [transaction, setTransaction] = useState<TransactionCore>(TransactionCore.vazio())//TransactionCore selecionado
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela



  function salvarTransactionCore(transaction: TransactionCore) {
    let transactionJson = { userId: transaction.userId, bankAccountId: transaction.bankAccountId, value: transaction.value, createDate: transaction.date }
    let response = axios.post(baseURL, 
        transactionJson,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        }
      )
  
    window.location.reload();
    console.log(response)
    setVisivel('tabela')
    setTransaction(transaction)
  }



  return (
        <div>
            <Modelo titulo="Transaction">
              <hr/>
                <FormularioTransfer 
                  transaction={transaction}
                  createTransfer={salvarTransactionCore}
                  cancel={() => setVisivel('tabela')}
                />
            </Modelo>
        </div>
    )
}