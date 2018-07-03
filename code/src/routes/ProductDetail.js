import React from 'react';
import {connect} from 'react-redux';
import {Icon, Avatar, Rate} from 'antd';
import action from '../store/action';

import '../static/less/proDetail.less';

import Banner from './proDetail/Banner';
class ProductDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="productDetail">
                <div className="banner">
                    <Banner/>
                    <span>{this.props.stepIndex}/{5}</span>
                </div>
                <ul className="characteristic">
                    <li className="characteristic-item">
                        <dl>
                            <dt><img src="https://yanxuan.nosdn.127.net/2cd96e4388819c508b6292f25729cc3e.jpg" alt=""/>
                            </dt>
                            <dd>
                                <p>快速升温</p>
                                <p>阳光暖宫</p>
                            </dd>
                        </dl>
                    </li>
                    <li className="characteristic-item">
                        <dl>
                            <dt><img src="https://yanxuan.nosdn.127.net/45ff6bdb618636123d2ba2d6ce38e13e.jpg" alt=""/>
                            </dt>
                            <dd>
                                <p>快速升温</p>
                                <p>阳光暖宫</p>
                            </dd>
                        </dl>
                    </li>
                    <li className="characteristic-item">
                        <dl>
                            <dt><img src="https://yanxuan.nosdn.127.net/1bdddd10d54e5815506dbf16c8f3fcf4.jpg" alt=""/>
                            </dt>
                            <dd>
                                <p>快速升温</p>
                                <p>阳光暖宫</p>
                            </dd>
                        </dl>
                    </li>
                </ul>
                <div className="detailBaseInfo">
                    <div className="content">
                        <div className="info">
                            <div className="name">草本石墨烯暖宫腰带</div>
                            <div className="desc">石墨烯暖宫，草本甘香惬意</div>
                            <div className="price">￥{120}</div>
                        </div>
                        <div className="comment">
                            <b className="num">{185}</b>
                            <p className="com">用户评价</p>
                            <div className="more">查看</div>
                        </div>
                    </div>
                    {/* 产品规格 */}
                    <ul className="commonBox">
                        <li className="bordered">
                            <a href="javascript:;">
                                <div className="inner">请选择产品规格
                                    <Icon type="right" style={{
                                        float: 'right',
                                        padding: '0 .4rem'
                                    }}/>
                                </div>
                            </a>
                        </li>
                        <li className="bordered">
                            <div className="inner">
                                积分：购买最高得{19}积分
                            </div>
                        </li>
                        <li className="bordered service-wraper">
                            <span className="left">服务：</span>
                            <ul className="right">
                                <li>支持30天无忧退换货</li>
                                <li>48小时快速退款</li>
                                <li>满88元免邮费</li>
                                <li>网易自营品牌</li>
                                <li>国内部分地区无法配送</li>
                            </ul>
                        </li>
                    </ul>
                    {/* 用户评价 */}
                    <div className="commonBox">
                        <div className="bordered">
                           <header className="common-header">
                               <div className="title">用户评价{199}</div>
                               <div className="comment-checkAll">100%好评<Icon type="right"/></div>
                           </header>
                            <div className="comment">
                                <header>
                                    <Avatar icon="user" style={{marginRight: '.3rem'}}/>
                                        <div className="name">
                                            b****3
                                        </div>
                                    <div className="commentRate"><Rate disabled defaultValue={4} /></div>
                                </header>
                                <div className="extraInfo">
                                    <span className="time">2018-06-22 09:51:54</span>
                                    <p className="skus">灰湖绿（腰枕含草本香包）</p>
                                </div>
                                <div className="text">
                                    <p>很浓厚的中药香味，贴在肚子上暖暖的，不烫，不知道姨妈来的时候会不会一样舒服，谢谢网易好品</p>
                                </div>
                                <div className="commentPics">
                                    <ul>
                                        <li><img src="" alt=""/>1</li>
                                        <li><img src="" alt=""/>1</li>
                                        <li><img src="" alt=""/>1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*产品参数*/}
                    <div className="itemDetail">
                        <div className="title">商品参数</div>
                        <ul>
                            <li><div className="left">适用季节：</div><div className="right">四季通用</div></li>
                            <li><div className="left">适用季节：</div><div className="right">四季通用</div></li>
                            <li><div className="left">适用季节：</div><div className="right">四季通用</div></li>
                            <li><div className="left">适用季节：</div><div className="right">四季通用</div></li>
                            <li><div className="left">适用季节：</div><div className="right">四季通用</div></li>
                        </ul>
                    </div>
                </div>
                {/*产品详情图*/}
                <div className="detailPicList">
                    <p><img src="https://yanxuan.nosdn.127.net/0d4325dfe0a8574a637aa60654b582d9.jpg" alt=""/></p>
                </div>
                <div className="commonIssues">
                    <div className="title">
                        <div className="line"></div>
                        <div className="text">常见问题</div>
                    </div>
                    <div className="list">

                    </div>







                </div>
            </div>
        )
    }
}


export default connect(state => ({...state.prodetail}), {...action.prodetail})(ProductDetail);
