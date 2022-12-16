export default class TransactionCore {
    #id: string
    #userId: string 
    #bankAccountId: string
    #type: number
    #value: number
    #date: string
    #numberAccount: number
    
    constructor(id: string, userId: string, bankAccountId: string, type: number, value: number, date: string, numberAccount: number){ 
        this.#id = id
        this.#userId = userId
        this.#bankAccountId = bankAccountId
        this.#type = type
        this.#value = value
        this.#date = date
        this.#numberAccount = numberAccount
    }

    static vazio() {//metodo estatico com User vazio pra nao ter que estanciar 
        return new TransactionCore('', '', '', 0, 0, "01/01/2020", 1234)
    }

    get id() {
        return this.#id
    }

    get userId() {
        return this.#userId
    }

    get bankAccountId() {
        return this.#bankAccountId
    }

    get type() {
        return this.#type
    }

    get value() {
        return this.#value
    }

    get date() {
        return this.#date
    }

    get numberAccount() {
        return this.#numberAccount
    }
}