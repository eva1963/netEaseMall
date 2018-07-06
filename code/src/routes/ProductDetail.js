import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {Icon} from 'antd';
import Qs from 'qs';
import action from '../store/action';

/* 样式 */
import '../static/less/proDetail.less';

/* 自定义组件 */
import Totop from "../component/Totop";
import ToBuy from "../component/ToBuy";
import Banner from './proDetail/Banner';
import Comment from './proDetail/Comment';
import Issues from './proDetail/Issues';
import NavTopCart from '../component/NavTopCart';

class ProductDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.queryCommentList();
        this.props.queryGoods();
    }

    render() {
        this.proId = parseFloat(Qs.parse(this.props.location.search.substr(1)).id);
        let {goodsList} = this.props,
            item = goodsList.find(item => parseFloat(item.id) === parseFloat(this.proId));
        if (!item) return '';
        /* 商品属性列表 */
        let descList = [{
            pic: 'https://yanxuan.nosdn.127.net/2cd96e4388819c508b6292f25729cc3e.jpg',
            name: '快速升温',
            desc: '阳光暖宫'
        }, {
            pic: 'https://yanxuan.nosdn.127.net/45ff6bdb618636123d2ba2d6ce38e13e.jpg',
            name: '快速升温',
            desc: '阳光暖宫'
        }, {
            pic: 'https://yanxuan.nosdn.127.net/1bdddd10d54e5815506dbf16c8f3fcf4.jpg',
            name: '快速升温',
            desc: '阳光暖宫'
        }];
        if (descList.length <= 0) {
            return '';
        }

        return (
            <div>
                <NavTopCart />
                <div className="productDetail">
                    <div className="banner">
                        <Banner dataList={item.pielist}/>
                        <span>{this.props.stepIndex}/{item.pielist.length}</span>
                    </div>

                    <ul className="characteristic">
                        {
                            descList.map((item, index) => {
                                return ( <li className="characteristic-item" key={index}>
                                    <dl>
                                        <dt><img src={item.pic} alt=""/>
                                        </dt>
                                        <dd>
                                            <p>{item.name}</p>

                                            <p>{item.desc}</p>
                                        </dd>
                                    </dl>
                                </li>)
                            })
                        }
                    </ul>
                    <div className="detailBaseInfo">
                        <div className="content">
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="desc">{item.desc}</div>
                                <div className="price">￥{item.price}</div>
                            </div>
                            <div className="comment">
                                <b className="num">{this.props.commentList.length ? this.props.commentList.length : 0}</b>
                                <p className="com">用户评价</p>
                                <div className="more"><Link to="/prodetail/commentList">查看</Link></div>
                            </div>
                        </div>
                        {/* 产品规格 */}
                        <ul className="commonBox">
                            <li className="bordered">
                                <Link to={{
                                    pathname: '/prodetail/params',
                                    search: `?id=${item.id}`
                                }}>
                                    <div className="inner">请选择产品规格
                                        <Icon type="right" style={{
                                            float: 'right',
                                            padding: '0 .4rem'
                                        }}/>
                                    </div>
                                </Link>
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

                        <div className="commonBox">
                            <div className="bordered">
                                <Link to="/prodetail/commentList">
                                    <header className="common-header">
                                        <div className="title">用户评价{this.props.commentList.length ? this.props.commentList.length : 0}</div>
                                        <div className="comment-checkAll">90%好评<Icon type="right"/></div>
                                    </header>
                                </Link>
                                {this.props.commentList.length ? <Comment item={this.props.commentList[0]}/> : null}
                            </div>
                        </div>
                        {/*产品参数*/}
                        <div className="itemDetail">
                            <div className="title">商品参数</div>
                            <ul>
                                {item.parameterList && item.parameterList.length !== 0 ? (
                                    item.parameterList.map((item, index) => {
                                        return <li key={index}>
                                            <div className="left">{item.name}</div>
                                            <div className="right">{item.value}</div>
                                        </li>
                                    })) : null
                                }
                            </ul>
                        </div>
                    </div>
                    {/*产品详情图*/}
                    <div className="detailPicList">
                        <p style={{margin: '0'}}><img
                            src="https://yanxuan.nosdn.127.net/0d4325dfe0a8574a637aa60654b582d9.jpg" alt=""/></p>
                        {item.pielist && item.pielist.length !== 0 ? item.pielist.map((item, index) => {
                            return <p key={index} style={{margin: '0'}}><img src={item} alt=""/></p>
                        }) : ''}
                    </div>
                    <Issues/>

                    {/* 加入购物车 */}
                    <ToBuy toBack={true}/>
                    <Totop/>
                </div>
            </div>
        )
    }
}

export default connect(state => ({...state.prodetail}), {...action.prodetail})(ProductDetail);
