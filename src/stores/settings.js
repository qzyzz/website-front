import { makeAutoObservable } from 'mobx'

class settingsClass{
    constructor() {
        makeAutoObservable(this)
    }
    mode = 'light'
    siderOpen = 'open'
    
    changeMode() {
        this.mode = this.mode==='light'?'dark':'light'
    }
    changeSiderState() {
        this.siderOpen=this.siderOpen==='open'?'close':'open'
    }
}

export default new settingsClass()