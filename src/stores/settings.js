import { makeAutoObservable } from 'mobx'
import { ConfigProvider } from 'antd'

class settingsClass {
    constructor() {
        makeAutoObservable(this)
    }

    mode = 'light'
    siderOpen = 'open'

    /**
     * 改变主题
     * @param {mode} val 
     */
    changeMode(val) {
        if (val !== undefined) {
            this.mode = val
            document.documentElement.className = val
        } else {
            this.mode = this.mode === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', this.mode)
            document.documentElement.className = this.mode
        }
        ConfigProvider.config({
            theme: {
                primaryColor: this.mode === 'dark' ? '#2E2E35' : '#1890ff',
            },
        })
    }

    /**
     * 侧边栏伸缩状态修改
     * @param {siderOpen} val 
     */
    changeSiderState(val) {
        if (val !== undefined) {
            this.siderOpen = val
        } else {
            this.siderOpen = this.siderOpen === 'open' ? 'close' : 'open'
            localStorage.setItem('siderOpen', this.siderOpen)
        }
    }
}

export default new settingsClass()