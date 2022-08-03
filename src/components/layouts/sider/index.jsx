import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react'
import { Switch } from 'antd'
import { useStore } from '../../../stores'
import { routerContext } from '../index'
import titleImg from '@/assets/imgs/header.jpg'
import './index.less'

/** Sider */
const Sider = (props) => {
    const { settingsStore } = useStore()
    const { routers } = props
    const history = useContext(routerContext)
    const [actived, setActived] = useState(routers[0].meta.key)
    /**
     * 切换主题
     */
    const changeTheme = () => {
        settingsStore.changeMode()
    }
    /**
     * 切换侧边栏状态
     */
    const changeSiderState = () => {
        settingsStore.changeSiderState()
    }
    // 跳转页面
    const toPage = (item) => {
        history.push(item.path)
        setActived(item.meta.key)
    }

    const getMenus = (menus) => {
        return menus.map(item => (
            <li onClick={() => toPage(item)} key={item.meta.key} >
                <div className={`iconfont_content ${actived === item.meta.key ? 'actived' : ''}`}>
                    <span className={`iconfont ${item.meta.icon}`} />
                </div>
                <span className={`menu_text ${actived === item.meta.key ? 'actived' : ''}`}>{item.meta.label}</span>
            </li >
        ))
    }

    return (
        <div className={`sider ${settingsStore.siderOpen}`}>

            <div>
                {/* logo部分 */}
                <div className='sider_logo'>
                    <img className='sider_logo_img' src={titleImg} alt="" />
                    <div className='sider_logo_info'>
                        <span className='sider_logo_info_title'>云彩</span>
                        <span className='sider_logo_info_msg'>WeChat: qzy12345654321</span>
                        <span className='sider_logo_info_msg'>QQ: 2524339178</span>
                    </div>
                </div>
                {/* menu部分 */}
                <div className='sider_menu'>
                    <div className='sider_menu_title'>菜单</div>
                    <ul>
                        {getMenus(routers.slice(0, routers.length - 2))}
                    </ul>
                </div>
            </div>

            <div>
                {/* theme部分 */}
                <div className='sider_theme'>
                    <Switch onChange={changeTheme} />
                    <div className='sider_theme_text'>{settingsStore.mode === 'dark' ? '深色模式' : '浅色模式'}</div>
                </div>
                {/* bottom部分 */}
                <div onClick={changeSiderState} className={`sider_bottom ${settingsStore.siderOpen}`}>
                    <span className={`iconfont ${settingsStore.siderOpen === 'close' ? 'icon-a-Chevron-Right2' : 'icon-a-Chevron-Left2'}`}></span>
                </div>
            </div>
        </div >
    )
}

export default observer(Sider)