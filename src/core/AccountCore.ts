export default class AccountCore {
    #id: number
    #userId: number
    #companyId: number
    #bassId: string
    #numberAccount: number
    
    constructor(id: number, userId: number, companyId: number, bassId: string, numberAccount: number){ 
        this.#id = id
        this.#userId = userId
        this.#companyId = companyId
        this.#bassId = bassId
        this.#numberAccount = numberAccount
    }

    static vazio() {//metodo estatico com User vazio pra nao ter que estanciar 
        return new AccountCore(0, 0, 0,'', 0)
    }

    get id() {
        return this.#id
    }

    get userId() {
        return this.#userId
    }

    get companyId() {
        return this.#companyId
    }

    get bassId() {
        return this.#bassId
    }

    get numberAccount() {
        return this.#numberAccount
    }

}