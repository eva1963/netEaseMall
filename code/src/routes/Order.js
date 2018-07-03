/*@target:订单页面*/
import React from 'react'
import {connect} from 'react-redux'
import {Tabs,Icon} from "antd"
import NavTopCart from '../component/NavTopCart'
import '../static/less/order.less'
const TabPane = Tabs.TabPane;

class Order extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            classifyIndex:0
        }
    }
    async componentDidMount(){
      let result
    }
    render(){
        let data = [{
            orderID:'11111',
            pic:'http://yanxuan.nosdn.127.net/e64708a0e0a69d27acbc5ef21ee8c850.png?imageView&quality=90&thumbnail=300x300',
            name:'自然棉麻四件套',
            desc:'杏粉色*1.5m',
            id:'222',
            state:1
        },{
            orderID:'11111',
            pic:'http://yanxuan.nosdn.127.net/8733f40216d7d20b085a34a055e6c300.png?imageView&quality=90&thumbnail=300x300',
            name:'自然棉麻四件套',
            desc:'杏粉色*1.5m',
            id:'222',
            state:0
        },{
            orderID:'11111',
            pic:'http://yanxuan.nosdn.127.net/4ac3d4d26c4584034585ba2dae40583e.png?imageView&quality=90&thumbnail=300x300',
            name:'自然棉麻四件套',
            desc:'杏粉色*1.5m',
            id:'222',
            state:1
        }];
        return <div className={'order-container'}>
            <NavTopCart/>
            <div className={'tab'}>
                <Tabs defaultActiveKey="1" onChange={this.changeTab} className={'tab-wrapper'}>
                    <TabPane tab="全部" key="1">
                        <div className={'notices'}><Icon type="sound" />防诈骗公告</div>
                        <ul className={'list'}>{
                            data.map((item,index)=>{
                                let {orderID,pic,name,desc,id,state} = item;
                                return <li key={index} className={'item'}>
                                    <h3>订单编号：<span>{orderID}</span><Icon type="delete" onClick={ev=>{alert('删除')}}/></h3>
                                    <div className={'content'}>
                                        <div className="acator"><img src={pic} alt={name}/></div>
                                        <div className={'info'}>
                                            <h2>{name}</h2>
                                            <p>{desc}</p>
                                        </div>
                                    </div>
                                </li>
                            })
                        }</ul>
                    </TabPane>
                    <TabPane tab="待付款" key="2">待付款</TabPane>
                    <TabPane tab="已付款" key="3">已付款</TabPane>
                </Tabs>
            </div>

        </div>
    }
    changeTab=ev=>{

    }
}

export default connect()(Order)