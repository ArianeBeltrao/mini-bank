import Modelo from '../components/modelo-formulario/Modelo'
import Botao from "../components/modelo-formulario/Botao"
import Tabela from "../components/modelo-formulario/Tabela"
import Formulario from "../components/modelo-formulario/Formulario"
import User from "../core/User"
import { useEffect, useState } from "react"
import axios from 'axios'; 

/*async function GetUsers() {
  let response = await axios.get('http://localhost:3000/company/', {
   headers: {
   'Access-Control-Allow-Origin': '*',
   }
  });
  //let response = await fetch('http://localhost:3000/company/')
  //let data = await response.json()
  console.log(response.data)
  return response
  }

/*useEffect(async ()  => {
  let response =  axios.get('http://localhost:3000/company/').then()
  let data =  await response.json()
})

  const usersRes = await GetUsers()
  console.log(usersRes)*/

const URL = 'http://localhost:3000/users/'



interface LayoutProps {
    titulo: string
    children: any
}
export default function Layout(props: LayoutProps) {
  
 

  const [cliente, setCliente] = useState<User>(User.vazio())//Cliente selecionado
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela

  const clientes = [
    new User('Ana', 'ana@gmail.com', '1'),
    new User('Paula', 'paula@gmail.com', '2'),
    new User('Bia', 'bia@gmail.com', '3'),
    new User('Carla', 'carla@gmail.com', '4'),
    new User('Catia', 'catia@gmail.com', '5'),
  ]

  async function GetUsers() {
    let response = await axios.get(URL, {
        headers: {
        'Access-Control-Allow-Origin': '*',
        }
    }).then(resp => console.log(resp.data))
  }

  GetUsers()

  function clienteSelecionado(cliente: User) {
    setCliente(cliente)
    setVisivel('form')
  }

  function salvarCliente(cliente: User) {
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente() {
    setCliente(User.vazio())
    setVisivel('form')
  }

  return (
        <div>
          <Modelo titulo="User">
            {visivel === 'tabela' ? (
              <>
                <div>
                  <hr/>
                  <Botao className="botao" onClick={novoCliente} >Create new user</Botao>
                </div>
                <Tabela clientes={clientes}
                  clienteSelecionado={GetUsers}
                />
              </>
            ) : (
              <Formulario 
                cliente={cliente}
                clienteMudou={salvarCliente}
                cancelado={() => setVisivel('tabela')}
              />
            )}
          </Modelo>
        </div>
    )
}

