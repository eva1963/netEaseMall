import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {Icon, Checkbox, Divider} from 'antd';
import "../../src/static/less/DetailConfirm.less";

class DetailConfirmCont extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return <section className={'confirmCont'}>
            <ul>
                <li className={'userInfo'}>
                    <p>
                        <span>镇南关</span>
                        <span>137****2370</span>
                    </p>
                    <p className={'addr clearfix'}>
                        <span className={'default fl'}>默认</span>
                        <span>河北省邢台市威县******30号</span>
                        <Icon type={'right fr'}></Icon>
                    </p>
                </li>
                <li className={'discount'}>
                    <p className={'clearfix'}>
                        <span className={'fl'}>暂无优惠券</span>
                        <Icon type={'right fr'}/>
                        <span className={'fr'}>0张</span>
                    </p>
                    <Divider/>
                    <p className={'clearfix'}>
                        <Checkbox className='fl' defaultChecked={false} disabled/>
                        <span className={'fl'}>礼品卡:￥00</span>
                        <Icon className="fr" type={'right'}/>
                    </p>
                </li>
                <li className={'aboutMoney'}>
                    <p className={'clearfix'}>
                        <span className={'fl'}>商品合计</span>
                        <span className={'fr'}>$234</span>
                    </p>
                    <Divider/>
                    <p className={'clearfix'}>
                        <span className={'fl'}>运费</span>
                        <span className={'fr'}>￥123</span>
                    </p>
                    <Divider/>
                    <p className={'clearfix'}>
                        <span className={'fl'}>优惠券</span>
                        <span className={'fr'}>￥0.00</span>
                    </p>
                    <Divider/>
                    <p className={'clearfix'}>
                        <Checkbox className={'fl'}/>
                        <span>我要开发票</span>
                        <Icon type={'right fr'}/>
                    </p>
                </li>
                <li className={'shooes clearfix'}>
                    <img src="" alt="" className={'fl'}/>
                    <div className={'fl'}>
                        <p>男士复古老头鞋</p>
                        <p>
                            <span>褐色</span>
                            <span>42码</span>
                        </p>
                        <p>￥456</p>
                    </div>
                    <p className={'fr'}>X1</p>
                </li>
                <li className={'agree'}>
                    <Checkbox />
                    <span>我同意《我同意网易严选服务协议》</span>
                </li>
                <li className={'pay'}>
                    <div className={'clerfix'}>
                        <span className={'fl'}>应付：￥1234</span>
                        <button className={'fr'}>去付款</button>
                    </div>

                </li>
            </ul>
        </section>
    }
};
export default connect()(DetailConfirmCont);