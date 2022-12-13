import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { MenuLateral } from "../components/menu-lateral/MenuLateral"
import { BrowserRouter } from 'react-router-dom'
import Content from '../components/Content'
import React from 'react'
import Lista from '../components/Lista'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      alguma coisa       
      <MenuLateral></MenuLateral>
    </div>
  )
}