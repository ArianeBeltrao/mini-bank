import Transfer from '../components/Transfer'
import { MenuLateral } from '../components/menu-lateral/MenuLateral'
import React from 'react'


export default function Transaction() {

  return (
    <div className="background"> 
      <MenuLateral>
        <Transfer>
        </Transfer>
      </MenuLateral>
 
    </div>
  )
}