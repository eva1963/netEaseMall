import React from 'react';
import {connect} from 'react-redux';
import {Icon} from  'antd';
import Notifications, {notify} from 'react-notify-toast';
import {withRouter} from 'react-router-dom';
import action from '../store/action';
import {checkLogin} from '../api/person';

class ToBuy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true
        }
    }

    componentWillMount() {
        this.setState({
            show: this.props.toBack
        })
    }

    render() {
        return (
            <div className="toBuyBottom">
                <Notifications/>
                <div className="box icon" onClick={this.handleBack}>{
                    this.state.show ? <Icon type="customer-service"/> : '返回'
                }</div>
                <div className="box" onClick={this.nowBuy}>立即购买</div>
                <div className="box addToCart" onClick={this.addCart}>加入购物车</div>
            </div>
        )
    }

    handleBack = ev => {
        if (ev.target.innerHTML === '返回') {
            this.props.history.go(-1);
        }
    };
    addCart = () => {
        let myColor = {
            background: 'rgba(0,0,0,.8)',
            text: "#fff",
            padding: '0 !important',
        };
        notify.show('已加入购物车!', 'custom', 2000, myColor);

        /*加入购物车*/

    };
    nowBuy = async () => {
        /* 验证是否登录 登录了就跳到下单页，未登录跳到登录页面*/
        let result = await checkLogin();
        let isLogin = parseFloat(result.code === 0) ? true : false;

        if(isLogin) {
            this.prop.history.push('/home');
        } else {
            this.props.history.push('/person/login');
        }

    }
}


export default withRouter(connect(null, {...action.person})(ToBuy));
