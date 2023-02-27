import React from 'react'
import './index.less'

const Note = () => {
    return (
        <div className='note_one'>
            <div className='note_date'>
                <span>2022</span>
                <span>09月</span>
                <span>05</span>
            </div>
            <div className='note_detail'>
                <span>三体</span>
                <span> 有时下夜班，仰望星空，觉得群星就像发光的沙漠，我自己就是一个被丢弃在沙漠上的可怜的孩子……我有那种感觉：地球生命真的是宇宙中的偶然里的偶然，宇宙是个空荡荡的大宫殿，人类是这宫殿中唯一的一只蚂蚁。这想法让我的后半辈子有一种很矛盾的心态：有时 觉得生命真珍贵，一切都重于泰山；有时觉得人是那么渺小，什么都不值得一提。反正日子就在这种奇怪的感觉中一天天过去，不知不觉人就老了……</span>
            </div>
        </div>
    )
}

export default Note
