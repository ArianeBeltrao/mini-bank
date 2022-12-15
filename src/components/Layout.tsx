import Modelo from '../components/modelo-formulario/Modelo'
import Botao from "../components/modelo-formulario/Botao"
import Tabela from "../components/modelo-formulario/Tabela"
import Formulario from "../components/modelo-formulario/Formulario"
import { useState } from "react"
import Cliente from "../core/Cliente"

interface LayoutProps {
    titulo: string
    children: any
}
export default function Layout(props: LayoutProps) {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())//Cliente selecionado
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela

  const clientes = [
    new Cliente('Ana', 'ana@gmail.com', '1'),
    new Cliente('Paula', 'paula@gmail.com', '2'),
    new Cliente('Bia', 'bia@gmail.com', '3'),
    new Cliente('Carla', 'carla@gmail.com', '4'),
    new Cliente('Catia', 'catia@gmail.com', '5'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
        <div>
          <Modelo titulo="cadastro novo cliente">
            {visivel === 'tabela' ? (
              <>
                <div>
                  <hr/>
                  <Botao className="botao" onClick={novoCliente} >novo cliente</Botao>
                </div>
                <Tabela clientes={clientes}
                  clienteSelecionado={clienteSelecionado}
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