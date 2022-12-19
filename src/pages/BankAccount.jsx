import Account from '../components/Account'
import { MenuLateral } from '../components/menu-lateral/MenuLateral'
import React from 'react'


export default function Home() {

  return (
    <div className="background"> 
      <MenuLateral>
        <Account></Account>
      </MenuLateral>
 
    </div>
  )
}