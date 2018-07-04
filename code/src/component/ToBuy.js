import React from 'react';
import {connect} from 'react-redux';
import {Icon} from  'antd';

class ToBuy extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="toBuyBottom">
                <div className="box icon"><Icon type="customer-service" /></div>
                <div className="box">立即购买</div>
                <div className="box addToCart">加入购物车</div>
            </div>
        )
    }
}


export default connect()(ToBuy);
