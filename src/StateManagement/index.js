import { makeAutoObservable } from "mobx"
import { decrementCountSlice } from "./decrementCountSlice"
import { incrementCountSlice } from "./incrementCountSlice"

export class Store {
    store = {
        count: 0,
    }

    constructor() {
        makeAutoObservable(this)
    }
    
    incrementCount(num) {
        incrementCountSlice(this.store, num)
    }
    
    decrementCount(num) {
        decrementCountSlice(this.store, num)
    }

}