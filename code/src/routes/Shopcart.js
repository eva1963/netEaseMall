import React from 'react';
import {connect} from 'react-redux';
import '../static/less/shopCart.less'
import NavBottom from '../component/NavBottom'

class Shopcart extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className='shopCartBox'>
                <div>
                    <div className="shopTit">购物车</div>
                    <ul className="shopTips">
                        <li>30天无忧退货</li>
                        <li>48小时快速退款</li>
                        <li>满88元免邮费</li>
                    </ul>
                </div>
                <NavBottom />
            </div>
        )
    }
}

export default connect()(Shopcart);
