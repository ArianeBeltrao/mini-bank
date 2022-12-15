import Layout from '../components/Layout'
import { MenuLateral } from "../components/menu-lateral/MenuLateral"
import React from 'react'


export default function Home() {

  return (
    <div className="background"> 
      <MenuLateral>
        <Layout titulo='teste'>
          sera que vai
        </Layout>
      </MenuLateral>
 
    </div>
  )
}