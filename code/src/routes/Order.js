/*@target:订单页面*/
import React from 'react'
import {connect} from 'react-redux'
import {Tabs,Icon,Button,Modal} from "antd"
import {Link} from "react-router-dom"
import NavTopCart from '../component/NavTopCart'
import action from '../store/action'
import {checkLogin} from '../api/person'
import '../static/less/order.less'


const TabPane = Tabs.TabPane;

class Order extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            classifyIndex:0,
            all:[]
        };

    }
    async componentDidMount(){
        //验证是否登录
        let isLogin = await checkLogin();
        if(parseFloat(isLogin.code)===1){
            this.hintLogin();
            return;
        }
        let {queryUnpay,queryPay} = this.props;
        queryUnpay();
        queryPay();
    }
    render(){
        let {pay,unpay} = this.props.orderCart;
        let all = unpay.concat(pay);

        return <div className={'order-container'}>
            <NavTopCart/>
            <div className={'tab'}>
                <Tabs defaultActiveKey="1" onChange={this.changeTab} className={'tab-wrapper'}>
                    <TabPane tab="全部" key="1">
                        <div className={'notices'}><Icon type="sound" />防诈骗公告</div>
                        <ul className={'list'}>{
                            all.length!==0?( all.map((item,index)=>{
                                let {orderID,pic,name,desc,id,state} = item;
                                return <li key={index} className={'item'}>
                                    <Link to={`/prodetail?id=${id}`}>
                                        <h3>订单编号：<span>{orderID}</span><Icon type="delete" onClick={ev=>{this.removeOrder}}/></h3>
                                        <div className={'content'}>
                                            <div className="acator"><img src={pic} alt={name}/></div>
                                            <div className={'info'}>
                                                <h2>{name}</h2>
                                                <p>{desc}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            })):(<div className="noData">暂无更多数据</div>)
                        }</ul>
                    </TabPane>
                    <TabPane tab="待付款" key="2">
                        <ul className={'list'}>{
                           unpay.length!==0?( unpay.map((item,index)=>{
                               let {orderID,pic,name,desc,id,state} = item;
                               return <li key={index} className={'item'}>
                                   <Link to={`/prodetail?id=${id}`}>
                                       <h3>订单编号：<span>{orderID}</span><Icon type="delete" onClick={ev=>{this.removeOrder}}/></h3>
                                       <div className={'content'}>
                                           <div className="acator"><img src={pic} alt={name}/></div>
                                           <div className={'info'}>
                                               <h2>{name}</h2>
                                               <p>{desc}</p>
                                           </div>
                                       </div>
                                   </Link>
                               </li>
                           })):(<div className="noData">暂无更多数据</div>)
                        }</ul>
                    </TabPane>
                    <TabPane tab="已付款" key="3">
                        <ul className={'list'}>{
                            pay.length!==0?( pay.map((item,index)=>{
                                let {orderID,pic,name,desc,id,state} = item;
                                return <li key={index} className={'item'}>
                                    <Link to={`/prodetail?id=${id}`}>
                                        <h3>订单编号：<span>{orderID}</span></h3>
                                        <div className={'content'}>
                                            <div className="acator"><img src={pic} alt={name}/></div>
                                            <div className={'info'}>
                                                <h2>{name}</h2>
                                                <p>{desc}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            })):(<div className="noData">暂无更多数据</div>)
                        }</ul>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    }
    hintLogin=ev=>{
        let that = this;
        Modal.error({
            title: '登录验证',
            content: '当前没有登录，请先登录！！',
            onOk(){
                that.props.history.push('/person/login');
            }
        });
    };

    removeOrder=ev=>{
        alert('删除');
    };
    changeTab=ev=>{

    }
}

export default connect(state=>({...state.order,...state.shopCart}),{...action.order,...action.shopCart})(Order)