/*@target:订单页面*/
import React from 'react'
import {connect} from 'react-redux'

import Header from '../component/NavTop'
import NavClassify from '../component/NavClassify'

class Order extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            classifyIndex:0
        }
    }
    render(){
        return <div className={'order-container'}>
            {/*<Header/>*/}
            <NavClassify classifyIndex={this.state.classifyIndex} handle={this.classifyHandle}/>
        </div>
    }
    classifyHandle = ({type,index}={})=>{
        /*type是商品的type*/
        this.setState({
            classifyIndex:index
        });
    }
}

export default connect()(Order)