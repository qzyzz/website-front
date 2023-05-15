import React, { useState } from 'react'
import Article from './article'
import Note from './note'
import Photo from './photo'
import './index.less'

const Share = props => {
    const [selectKey, setSelectKey] = useState('article')
    /**
     * 选择左侧部分显示内容
     * @param {string} key
     */
    const selectTab = key => {
        setSelectKey(key)
    }

    return (
        <div className="share">
            <div className="tab">
                <div
                    className={`tab_article ${selectKey === 'article' ? 'selected' : ''}`}
                    onClick={() => selectTab('article')}
                >
                    文章
                </div>
                <div
                    className={`tab_article ${selectKey === 'photo' ? 'selected' : ''}`}
                    onClick={() => selectTab('photo')}
                >
                    摄影
                </div>
                <div
                    className={`tab_article ${selectKey === 'notes' ? 'selected' : ''}`}
                    onClick={() => selectTab('notes')}
                >
                    随记
                </div>
            </div>
            <div className="content">
                <div
                    className={`${
                        selectKey === 'article'
                            ? 'content_left'
                            : selectKey === 'photo'
                            ? 'content_top'
                            : 'content_bottom'
                    } article`}
                >
                    <div className="title">文章</div>
                    <Article />
                </div>
                <div className={`${selectKey === 'photo' ? 'content_left' : 'content_top'}`}>
                    <div className="title">摄影</div>
                    <Photo />
                </div>
                <div className={`${selectKey === 'notes' ? 'content_left' : 'content_bottom'}`}>
                    <div className="title">随记</div>
                    <Note />
                </div>
            </div>
        </div>
    )
}

export default Share
