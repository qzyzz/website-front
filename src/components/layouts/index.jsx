import React, { createContext } from 'react'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import Sider from './sider/index'
import HeaderSearch from './header'
import routers from '@/router/routers'
import './index.less'

export const routerContext = createContext()
const BlogLayout = (props) => {
    return (
        <div className='layout'>
            <routerContext.Provider value={props.history}>
                <Sider className='layout_sider' routers={routers} />
                <div className='layout_container'>
                    <div className='layout_container_header'><HeaderSearch /></div>
                    <div className='layout_container_content'>{props.children}</div>
                </div>
            </routerContext.Provider >
        </div >
    )
}
export default withRouter(observer(BlogLayout)) 