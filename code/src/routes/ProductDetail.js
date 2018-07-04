import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {Icon} from 'antd';
import action from '../store/action';

/* 样式 */
import '../static/less/proDetail.less';

/* 自定义组件 */
import Totop from "../component/Totop";
import ToBuy from "../component/ToBuy";
import Banner from './proDetail/Banner';
import Comment from './proDetail/Comment';
import Issues from './proDetail/Issues';

class ProductDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.queryCommentList();
    }

    render() {
        let proList = [{
            pic: 'https://yanxuan.nosdn.127.net/a846f0112174bf09f60639fc1352d05c.jpg?imageView&thumbnail=750x0&quality=75'
        }, {
            pic: 'https://yanxuan.nosdn.127.net/7c28a0a7de8850dda56fe04a19beef3f.jpg?imageView&thumbnail=750x0&quality=75'
        }, {
            pic: 'https://yanxuan.nosdn.127.net/08bab2bea52eede24060f6886ae61b72.jpg?imageView&thumbnail=750x0&quality=75'
        }, {
            pic: 'https://yanxuan.nosdn.127.net/3d7c248460c3b0b9ac53dea8b7cd4606.png?imageView&thumbnail=750x0&quality=75'
        }, {
            pic: 'https://yanxuan.nosdn.127.net/9a8501587b7a794e39bced7be8916a6d.jpg?imageView&thumbnail=750x0&quality=75'
        }];
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

        /*  商品参数列表 */
        let parameterList = [{
            name: '适用季节',
            value: '四季通用'
        }, {
            name: '工艺',
            value: '绣花'

        }, {
            name: '面料',
            value: '腰带：正面面料：100%聚酯纤；背面/里料：100%棉，草本香包：100%棉'

        }, {
            name: '草本主要成分',
            value: '当归、芍药、川穹、茯苓、白术、泽泻'

        }, {
            name: '温馨提示',
            value: '非生理期建议草本香包靠近人体使用，生理期为达到更好的温热体验，建议将石墨烯靠近人体使用'
        }];
        if (parameterList.length === 0) {
            return '';
        }

        return (
            <div className="productDetail">
                <div className="banner">
                    <Banner dataList={proList}/>
                    <span>{this.props.stepIndex}/{proList.length}</span>
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
                            <div className="name">草本石墨烯暖宫腰带</div>
                            <div className="desc">石墨烯暖宫，草本甘香惬意</div>
                            <div className="price">￥{120}</div>
                        </div>
                        <div className="comment">
                            <b className="num">{185}</b>
                            <p className="com">用户评价</p>
                            <div className="more"><Link to="/productDetail/commentList"/>查看</div>
                        </div>
                    </div>
                    {/* 产品规格 */}
                    <ul className="commonBox">
                        <li className="bordered">
                            <Link to="/productDetail/commentList">
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
                            <Link to="/productDetail/commentList">
                                <header className="common-header">
                                    <div className="title">用户评价{199}</div>
                                    <div className="comment-checkAll">100%好评<Icon type="right"/></div>
                                </header>
                            </Link>
                            {
                                this.props.commentList.length ? <Comment item={this.props.commentList[0]}/> : null
                            }
                        </div>
                    </div>
                    {/*产品参数*/}
                    <div className="itemDetail">
                        <div className="title">商品参数</div>
                        <ul>
                            {
                                parameterList.map((item, index) => {
                                    return <li key={index}>
                                        <div className="left">{item.name}</div>
                                        <div className="right">{item.value}</div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/*产品详情图*/}
                <div className="detailPicList">
                    <p style={{margin: '0'}}><img
                        src="https://yanxuan.nosdn.127.net/0d4325dfe0a8574a637aa60654b582d9.jpg" alt=""/></p>
                    {proList.map((item, index) => {
                        return <p key={index} style={{margin: '0'}}><img src={item.pic} alt=""/></p>
                    })}
                </div>
                <Issues/>

                {/* 加入购物车 */}
                <ToBuy/>
                <Totop/>
            </div>
        )
    }
}


export default connect(state => ({...state.prodetail}), {...action.prodetail})(ProductDetail);
