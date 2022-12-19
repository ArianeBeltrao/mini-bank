import axios from 'axios'; 
import { useEffect, useState } from "react";

import Modelo from '../components/modelo-formulario/Modelo';
import Botao from "../components/modelo-formulario/Botao";

import TabelaCompany from '../components/modelo-formulario/TabelaCompany';
import FormularioCompany from '../components/modelo-formulario/FormularioCompany';
import CompanyCore from '../core/CompanyCore';

interface LayoutCompanyProps {
    titulo: string
    children: any
}
export default function LayoutCompany(props: LayoutCompanyProps) {
  
  const baseURL = 'http://localhost:3000/company'

  const [company, setCompany] = useState<CompanyCore>(CompanyCore.vazio())//Cliente selecionado
  const [companiesArray, setCompaniesArray] = useState<CompanyCore[]>([])
  const [update, setUpdate] = useState<CompanyCore[]>([])
  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela') //dois estados, começando pela tabela

  async function getCompanies() {
    await axios.get(baseURL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(resp => {
      let companyResp = resp.data
      let companyArray: CompanyCore[] = []
      for (let i = 0; i < companyResp.length; i++) {
        let currentCompany = companyResp[i]
        let newCompany = new CompanyCore(currentCompany.id, currentCompany.legalName, currentCompany.emailAddress) //NAO TA TRAZENDO O NOME E O EMAIL
        companyArray.push(newCompany)
      }
      setCompaniesArray(companyArray)
    }
    )
  }
  
  useEffect(() => {
    getCompanies()
  }, []);

  function addCompany(company: CompanyCore) {
    if (company?.id) {
      let patchJson = { legalName: company.legalName, emailAddress: company.emailAddress }
      let responsePatch = axios.patch(`${baseURL}/${company?.id}`, 
        patchJson ,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        }
      ).then((resp) => { setUpdate(resp.data)})

      setVisible('tabela')
      window.location.reload();
      console.log(responsePatch)
    } else {
      let companyJson = { legalName: company.legalName, emailAddress: company.emailAddress }
      let response = axios.post(baseURL, 
        companyJson,
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

  function createNewCompany() {
    setCompany(CompanyCore.vazio())
    setVisible('form')
  }

  function editCompany(company:CompanyCore) {  
    setCompany(company)
    setVisible('form')
  }

  return (
        <div>   
          <Modelo titulo="Company">
            {visible === 'tabela' ? (
              <>
                <div>
                  <hr/>
                  <Botao className="botao" onClick={createNewCompany} >Create new company</Botao>
                </div>
                <TabelaCompany 
                    companys={companiesArray}
                    companySelected={editCompany}
                    companyAltered={update} 
                />
              </>
            ) : (
              <FormularioCompany
                company={company}
                companyAltered={addCompany}
                cancel={() => setVisible('tabela')}
              />
            )}
          </Modelo>
        </div>
    )
}