import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink, Link} from 'react-router-dom';
import {Icon, Radio, Input,Divider} from 'antd';
import {payGoods} from "../api/payGoods";
/*css*/
import "../static/less/payMode.less"

class PayMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    };

    render() {
        let {payGoods}=this.props;
        console.log(this.props);
        const RadioGroup = Radio.Group;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return <section className={'payCont'}>
            <p className={'chooseMode'}>请选择支付方式</p>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio style={radioStyle} value={1}><Icon type={'wechat'} style={{color:'green'}}></Icon><span>微信支付</span></Radio>
                <Divider/>
                <Radio style={radioStyle} value={2}><Icon type={'alipay'} style={{color:'blue'}}></Icon><span>支付宝</span></Radio>
                <Divider/>
                <Radio style={radioStyle} value={3} disabled><Icon type={'pay-circle-o'} style={{color:'red'}}></Icon><span>网易支付</span></Radio>
            </RadioGroup>
            <button className={'confirmPay'} onClick={this.payConfirm}>确定</button>
        </section>
    };

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    async payConfirm(){

    };
};
export default connect()(PayMode);