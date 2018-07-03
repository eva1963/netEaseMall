/*@target:订单页面*/
import React from 'react'
import {connect} from 'react-redux'

import Header from '../component/NavTop'
import NavClassify from '../component/NavClassify'

class Order extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className={'order-container'}>
            <Header/>
            <NavClassify/>
        </div>
    }
}

export default connect()(Order)