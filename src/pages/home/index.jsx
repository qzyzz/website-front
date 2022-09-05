import { useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import headerImg from '@/assets/imgs/header/product.png'
// import BiliBili from '@/assets/icons/home_icons/bilibili.svg'
// import GitHub from '@/assets/icons/home_icons/github.svg'
// import WeChat from '@/assets/icons/home_icons/wechat.svg'
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

                    </div>
                    {/* 项目作品 */}
                    <div className="data_project">

                    </div>
                    {/* 技术交流 */}
                    <div className="data_exchange">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home