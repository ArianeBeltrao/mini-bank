export default class Company {
    #id: number
    #legalName: string 
    #emailAddress: string
    
    constructor(id: number, legalName: string, emailAddress: string){ //=null
        this.#id = id
        this.#legalName = legalName
        this.#emailAddress = emailAddress
        
    }

    static vazio() {//metodo estatico com User vazio pra nao ter que estanciar 
        return new Company(0, '', '')
    }

    get id() {
        return this.#id
    }

    get legalName() {
        return this.#legalName
    }

    get emailAddress() {
        return this.#emailAddress
    }
}