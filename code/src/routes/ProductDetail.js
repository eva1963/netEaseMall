import React from 'react';
import {connect} from 'react-redux';
import {Icon, Avatar, Rate} from 'antd';
import action from '../store/action';

import '../static/less/proDetail.less';

import Banner from './proDetail/Banner';
import Totop from "../component/Totop";
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
                    <div className="center-title">
                        <div className="line"></div>
                        <div className="text">常见问题</div>
                    </div>
                    <ul className="list">
                        <li>
                            <div className="qu">
                                <i></i>
                                购买运费如何收取？
                            </div>
                            <div className="an">单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。
                                <br/>
                                (港澳台地区需满500元免邮费；不满500元，每单收取30元运费)
                            </div>
                        </li>
                        <li>
                            <div className="qu"><i></i>网易严选的订单如何配送？</div>
                            <div className="an">网易严选会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-追踪物流”中查看。</div>
                        </li>
                        <li>
                            <div className="qu"><i></i>如何申请退换货？？</div>
                            <div className="an">1.自收到商品之日起30日内，顾客可申请无忧退货；如果是退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
                                <br/>
                                2.内裤和食品等特殊商品无质量问题不支持退换货；
                                <br/>
                                3.确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； <br/>
                                4.确认收货-申请换货-客服审核通过-用户寄回商品-仓库签收验货-客服确认-换货完成；
                                <br/>
                                5.退换货运费由网易严选承担（大件商品除外）。上门取件费用由网易严选统一与快递服务商结算，顾客只需将退换货商品交给上门取件快递员寄回。如顾客选择自行寄回商品，请先垫付运费，到货验证商品后，严选将以现金券形式为用户报销运费，不接受单方面到付件。
                            </div>
                        </li>

                    </ul>







                </div>

                <Totop/>
            </div>
        )
    }
}


export default connect(state => ({...state.prodetail}), {...action.prodetail})(ProductDetail);
