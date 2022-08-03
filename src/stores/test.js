import { makeAutoObservable } from 'mobx'

class testClass{
    constructor() {
        makeAutoObservable(this)
    }
    num = 0
    addNum = () => {
        this.num++
    }
}

export default new testClass()