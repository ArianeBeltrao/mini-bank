export default class User {
    #id: number
    #name: string 
    #email: string
    
    constructor(id: number, name: string, email: string){ //=null
        this.#name = name
        this.#email = email
        this.#id = id
    }

    static vazio() {//metodo estatico com User vazio pra nao ter que estanciar 
        return new User(0, '', '')
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }
}