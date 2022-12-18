import axios from 'axios'; 
import { useEffect, useState } from "react";

import Modelo from '../components/modelo-formulario/Modelo'
import Botao from "../components/modelo-formulario/Botao"
import Tabela from "../components/modelo-formulario/Tabela"
import Formulario from "../components/modelo-formulario/Formulario"
import User from "../core/User"



interface LayoutProps {
    titulo: string
    children: any
}
export default function Layout(props: LayoutProps) {
  
  const URL = 'http://localhost:3000/users/'

  const [user, setUser] = useState<User>(User.vazio())//Cliente selecionado
  const [usersArray, setUsersArray] = useState<User[]>([])
  const [update, setUpdate] = useState<User[]>([])
  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela

  async function getUsers() {
    let response = await axios.get(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(resp => {
      let usersResp = resp.data
      let help: User[] = []
      for (let i = 0; i < usersResp.length; i++) {
        let currentUser = usersResp[i]
        let newUser = new User(currentUser.userid, currentUser.name, currentUser.email)
        help.push(newUser)
      }
      setUsersArray(help)
    }
    )
  }
  
  useEffect(() => {
    getUsers()
  }, []);


  function addUser(user: User) {
    if (user?.id) {
      let patchJson = { name: user.name, email: user.email }
      let responsePatch = axios.patch(`${URL}/4`, 
        patchJson ,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        }
      ).then((resp) => { setUpdate(resp.data) })

      console.log(responsePatch)
    } else {
      let userJson = { name: user.name, email: user.email }
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
      setVisible('tabela')
    }
  }

  function createNewUser() {
    setUser(User.vazio())
    setVisible('form')
  }

  function editUser(user:User) {  
    setUser(user)
    setVisible('form')
    console.log(user.name)
  }

  return (
        <div>   
          <Modelo titulo="User">
            {visible === 'tabela' ? (
              <>
                <div>
                  <hr/>
                  <Botao className="botao" onClick={createNewUser} >Create new user</Botao>
                </div>
                <Tabela clientes={usersArray}
                  clienteSelecionado={editUser}
                  clienteAlterado={update} //teste patch
                />
              </>
            ) : (
              <Formulario 
                cliente={user}
                clienteMudou={addUser}
                cancelado={() => setVisible('tabela')}
              />
            )}
          </Modelo>
        </div>
    )
}