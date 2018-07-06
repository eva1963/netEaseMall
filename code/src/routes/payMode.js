import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {Icon, Radio,Divider,message} from 'antd';
/*css*/
import "../static/less/payMode.less"
import action from "../store/action";
import Qs from "qs";

class PayMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            isCheck:true,
        }
    };

    render() {
        let {payGoods}=this.props;
        return <section className={'payCont'}>
            <p className={'chooseMode'}>请选择支付方式</p>
            <ul className={'radioBox'} onClick={this.isChecked} >
                 <li><a className={'radioActive'}>√</a><Icon type={'wechat'} style={{color:'green'}}></Icon><span>微信支付</span></li>
                <Divider/>
                <li ><a className={'radioSelef'}>√</a><Icon type={'alipay'} style={{color:'blue'}}></Icon><span>支付宝支付</span></li>
                <Divider/>
                <li ><a className={'radioSelef'} >√</a><Icon type={'pay-circle-o'} style={{color:'red'}}></Icon><span>网易支付</span></li>
            </ul>
            {/*<RadioGroup >
                <Radio value={1}><Icon type={'wechat'} style={{color:'green'}}></Icon><span>微信支付</span></Radio>

                <Radio value={2}><Icon type={'alipay'} style={{color:'blue'}}></Icon><span>支付宝</span></Radio>
                <Divider/>
                <Radio value={3}><Icon type={'pay-circle-o'} style={{color:'red'}}></Icon><span>网易支付</span></Radio>
            </RadioGroup>*/}
            <button className={'confirmPay'} onClick={this.payConfirm}>确定</button>
        </section>
    };
    isChecked=(ev)=>{
        let aCheck=document.getElementsByTagName('a');
        for(var i=0;i<aCheck.length;i++){
            aCheck[i].onclick=(function(i){
                return function(){
                    [...aCheck].forEach(item => {
                        item.style.backgroundColor="#fff"
                    })
                    aCheck[i].style.backgroundColor='#B4282D';
                };
            })(i)

        }
    };
    payConfirm =async () =>{
        let {cartData, payOrder,history,getCartInfo} = this.props,
        selAry = [];
        console.log(1,this.props.location);
        let orderID = Qs.parse(this.props.location.search.substr(1)).orderID;
        if(!orderID){
            this.props.history.push('/shopcart');
            return;
        }
        selAry = orderID.split(/\,/g).map(Number);

        selAry = selAry.map(id => {
            return payOrder(id);
        });
        Promise.all(selAry).then(() => {
            this.success();
            let timer = setTimeout(() => {
                clearTimeout(timer);
                // history.push('/order');
            },2000);

        });
    };
    success = () => {
        message.success('恭喜你，支付成功，页面即将跳转',0.1);
    }
}
export default withRouter(connect(state=>state.shopCart, action.shopCart)(PayMode));