import styles from '../styles/Home.module.css'
import React from 'react'
import Lista from './components/Lista'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

    </div>
  )
}


{/*
import ReactDOM from "react-dom";
import React from "react";
import Home from './pages/index';



ReactDOM.render(
    <Layout/>,
    document.getElementById('root')
)



function AppRoutes() {
    let fodase;  
    useEffect(() => {
       fodase = document.getElementById('root')
    })
    return fodase
}


ReactDOM.render(

  

    <Home />,
    AppRoutes()

 

);




{/*ReactDOM.render(
    <Home/>,
    document.getElementById('root')
)

if (typeof window !== 'undefined') {
    ReactDOM.render(<Home />, document.getElementById("root"));
}*/}