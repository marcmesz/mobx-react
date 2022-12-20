import { makeAutoObservable } from "mobx"

export class State {
    count = 0
    
    constructor(){
        makeAutoObservable(this)
    }

    incrementCount(num){
        this.count += num
    }

    decrementCount(num){
        this.count -= num
    }
}