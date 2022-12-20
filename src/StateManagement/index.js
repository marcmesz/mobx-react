import { makeAutoObservable } from "mobx"

export class State {
    count = 0
    
    constructor(){
        makeAutoObservable(this)
    }

    incrementCount(){
        this.count += 1
    }

    decrementCount(){
        this.count -= 1
    }
}