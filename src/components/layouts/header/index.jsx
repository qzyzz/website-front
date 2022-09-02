import React from 'react'
import { Avatar } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import headerPic from '@/assets/imgs/header.png'
import './index.less'

const HeaderSearch = () => {
    return (
        <div className='header'>
            <div className="search">
                <input placeholder="搜索" className='search_input' />
                <SearchOutlined className='search_icon' />
            </div>
            <Avatar size="large" src={headerPic} />
        </div>
    )
}

export default HeaderSearch