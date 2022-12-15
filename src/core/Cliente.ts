export default class Cliente {
    #id: string
    #nome: string 
    #email: string
    
    constructor(nome: string, email: string, id: string){ //=null
        this.#nome = nome
        this.#email = email
        this.#id = id
    }

    static vazio() {//metodo estatico com cliente vazio pra nao ter que estanciar 
        return new Cliente('', '', '')
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }
}