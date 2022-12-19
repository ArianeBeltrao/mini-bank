export default class TransactionCore {
    #userId: number 
    #bankAccountId: number
    #value: number
    #createDate: string
    
    constructor(userId: number, bankAccountId: number, value: number, date: string){ 
        this.#userId = userId
        this.#bankAccountId = bankAccountId
        this.#value = value
        this.#createDate = date
    }

    static vazio() {//metodo estatico com User vazio pra nao ter que estanciar 
        return new TransactionCore(0, 0,0 ,'')
    }

    get userId() {
        return this.#userId
    }

    get bankAccountId() {
        return this.#bankAccountId
    }

    get value() {
        return this.#value
    }

    get date() {
        return this.#createDate
    }

}