import React from 'react'
import { Empty } from 'antd'
import './index.less'

const Photo = props => {
    const emptyNotice = <span className="empty__text">还没有内容哦~</span>
    return true ? <Empty description={emptyNotice} image={Empty.PRESENTED_IMAGE_SIMPLE} /> : <div>照片</div>
}

export default Photo
