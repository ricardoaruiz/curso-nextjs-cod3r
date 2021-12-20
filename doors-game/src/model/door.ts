export default class DoorModel {

    #number: number
    #selected: boolean
    #hasGift: boolean
    #isOpen: boolean

    constructor(number: number, selected = false, hasGift = false, isOpen = false) {
        this.#number = number
        this.#selected = selected
        this.#hasGift = hasGift
        this.#isOpen = isOpen
    }

    get number() {
        return this.#number
    }

    get selected() {
        return this.#selected
    }

    get hasGift() {
        return this.#hasGift
    }

    get isOpen() {
        return this.#isOpen
    }

    unselect() {
        const selected = false
        return new DoorModel(
            this.#number, 
            selected, 
            this.#hasGift, 
            this.#isOpen
        )
    }

    toggleSelect() {
        return new DoorModel(
            this.#number, 
            !this.#selected, 
            this.#hasGift, 
            this.#isOpen
        )
    }

    open() {
        const isOpen = true
        return new DoorModel(
            this.#number, 
            this.#selected, 
            this.#hasGift, 
            isOpen
        )
    }

}
