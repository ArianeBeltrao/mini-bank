import LayoutCompany from '../components/LayoutCompany'
import { MenuLateral } from '../components/menu-lateral/MenuLateral'
import React from 'react'

export default function Home() {

  return (
    <div className="background"> 
      <MenuLateral>
        <LayoutCompany titulo='teste'>
          sera que vai
        </LayoutCompany>
      </MenuLateral>
 
    </div>
  )
}