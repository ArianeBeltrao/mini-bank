import axios from 'axios';
import { useState } from "react";

import Modelo from './modelo-formulario/Modelo';
import FormularioTransfer from "./modelo-formulario/FormularioTransfer";
import TransactionCore from "../core/TransactionCore";


interface TransferProps {
    titulo: string
    children: any
}
export default function Transfer(props: TransferProps) {

  const URL = 'http://localhost:3000/transaction/'

  const [transaction, setTransaction] = useState<TransactionCore>(TransactionCore.vazio())//TransactionCore selecionado
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela



  function salvarTransactionCore(transaction: TransactionCore) {
    let userJson = { userId: transaction.userId, bankAccountId: transaction.bankAccountId, value: transaction.value, createDate: transaction.date  }
      let response = axios.post(URL, 
        userJson,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        }
      )
      console.log(response);
      window.location.reload();
      

    console.log(transaction)
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