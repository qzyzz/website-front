import React from 'react'

const Article = () => {
    return (
        <div className="article-container">
            <div className="article__item">
                <div className="article__item__title">这是一个标题</div>
                <div className="article__item__abstract">这是一段很长很长很长很长很长很长很长很长很长的摘要</div>
                <div className="article__item__other">
                    <div className="article__item__other__type">所见/所闻</div>
                    <div className="article__item__other__time">2023-02-22</div>
                </div>
            </div>
        </div>
    )
}

export default Article
