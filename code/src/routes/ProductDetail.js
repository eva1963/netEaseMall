import React from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';

import '../static/less/proDetail.less';

class ProductDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            slideIndex: 1
        }
    }

    onChange = index => {
        this.setState({
            slideIndex: index + 1
        })
    };

    render() {
        let {slideIndex} = this.state;
        return (
            <div className="productDetail">
                <div className="banner">
                    <Carousel afterChange={this.onChange} dots='false'>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                    <span>{slideIndex}/{5}</span>
                </div>
                <ul className="characteristic">
                    <li className="characteristic-item">
                        <dl>
                            <dt><img src="https://yanxuan.nosdn.127.net/2cd96e4388819c508b6292f25729cc3e.jpg" alt=""/></dt>
                            <dd>
                                <p>快速升温</p>
                                <p>阳光暖宫</p>
                            </dd>
                        </dl>
                    </li>
                    <li className="characteristic-item">
                        <dl>
                            <dt><img src="https://yanxuan.nosdn.127.net/45ff6bdb618636123d2ba2d6ce38e13e.jpg" alt=""/></dt>
                            <dd>
                                <p>快速升温</p>
                                <p>阳光暖宫</p>
                            </dd>
                        </dl>
                    </li>
                    <li className="characteristic-item">
                        <dl>
                            <dt><img src="https://yanxuan.nosdn.127.net/1bdddd10d54e5815506dbf16c8f3fcf4.jpg" alt=""/></dt>
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

                </div>
            </div>
        )
    }
}


export default connect()(ProductDetail);
