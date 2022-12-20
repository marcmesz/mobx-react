import { makeAutoObservable } from "mobx"
import { decrementCountSlice } from "./decrementCountSlice"
import { incrementCountSlice } from "./incrementCountSlice"

export class State {
    state = {
        count: 0,
    }

    constructor() {
        makeAutoObservable(this)
    }
    
    incrementCount(num) {
        incrementCountSlice(this.state, num)
    }
    
    decrementCount(num) {
        decrementCountSlice(this.state, num)
    }

}