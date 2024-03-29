import { useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import headerImg from '@/assets/imgs/header/product.png'
import './index.less'

const Home = (props) => {
    const [selectedLi, setSelectdLi] = useState(1)

    const changeCarousel = key => {
        setSelectdLi(key)
    }

    /**
     * 获取轮播图指示条
     */
    const cerateLiElement = () => {
        return [1, 2].map(item =>
            <li key={item} className={`slick ${selectedLi === item ? 'selected' : null}`} onClick={() => changeCarousel(item)}></li>
        )
    }

    return (
        <div className='home'>
            {/* 头部轮播图 */}
            <div className="product_show">
                {/* 一个轮播页面 */}
                <div className="product_info">
                    <div className="product_word">
                        <div className="product_word_title">
                            <span>vue+node.js</span>
                            <span>0到1实现即时语音聊天</span>
                        </div>
                        <div className="product_word_introduce">
                            <span>单聊、群聊</span>
                            <span>可发送文字、表情、图片、语音、位置...</span>
                        </div>
                        <div className="product_word_notice">
                            如您对这个应用感兴趣，欢迎下载使用。当然对于需要查看设计稿和下载切图的同学，点击下方对应入口查阅。详细视频请访问b站。
                        </div>
                        <div className='product_word_operation'>
                            <div className="btn_one">
                                下载应用
                            </div>
                            <div className="btn_two">
                                访问设计稿
                                <ArrowRightOutlined className='btn_icon' />
                            </div>
                            <a href="javascript" className='git_herf'>
                                GitHub
                            </a>
                        </div>
                    </div>
                    <img src={headerImg} alt="" className='product_img' />
                </div>
                {/* 轮播图指示器 */}
                <ul className="indicator_bar">
                    {cerateLiElement()}
                </ul>
            </div>

            <div className="module_data">
                <div className='data_title'>数据模块</div>
                <div className='data'>
                    {/* 统计数字 */}
                    <div className='data_statist'>
                        <div className='total_visit'>
                            <span>4399</span>
                            <span>总访问量</span>
                        </div>
                        <div className='today_visit'>
                            <span>2200</span>
                            <span>今日访问量</span>
                        </div>
                        <div className='info_icon'>
                            <span className='iconfont icon-wechat'></span>
                            <span className='iconfont icon-icon_bilibili'></span>
                            <span className='iconfont icon-github-fill'></span>
                            <span className='iconfont icon-juejin-copy'></span>
                        </div>
                    </div>
                    {/* 个人分享 */}
                    <div className="data_share">
                        <div className='header'>
                            <div className="icon_content">
                                <span className='iconfont icon-application' />
                            </div>
                            <span className='count'>12</span>
                        </div>
                        <div className='word'>
                            <div className='word_title'>个人分享</div>
                            <div className='word_detail'>我的日常记录，平时所想、记录旅游、摄影…</div>
                        </div>
                        <div className='to_page'>
                            <div className='icon_bg'>
                                <ArrowRightOutlined className='btn_icon' />
                            </div>
                        </div>
                    </div>
                    {/* 项目作品 */}
                    <div className="data_project">
                        <div className='header'>
                            <div className="icon_content">
                                <span className='iconfont icon-stock-batch' />
                            </div>
                            <span className='count'>12</span>
                        </div>
                        <div className='word'>
                            <div className='word_title'>项目作品</div>
                            <div className='word_detail'>设计及开发项目总结，不限于开发完成的项目，包括临摹作品的下载。</div>
                        </div>
                        <div className='to_page'>
                            <div className='icon_bg'>
                                <ArrowRightOutlined className='btn_icon' />
                            </div>
                        </div>
                    </div>
                    {/* 技术交流 */}
                    <div className="data_exchange">
                        <div className='header'>
                            <div className="icon_content">
                                <span className='iconfont icon-settlement' />
                            </div>
                            <span className='count'>12</span>
                        </div>
                        <div className='word'>
                            <div className='word_title'>技术交流</div>
                            <div className='word_detail'>分享一些解决问题的方法</div>
                        </div>
                        <div className='to_page'>
                            <div className='icon_bg'>
                                <ArrowRightOutlined className='btn_icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home