import React from 'react';
import {connect} from 'react-redux';
import {Icon, Modal} from 'antd';
import Qs from 'qs';
import Notifications, {notify} from 'react-notify-toast';
import {withRouter} from 'react-router-dom';
import action from '../store/action';
import {checkLogin} from '../api/person';
import {addGoods} from "../api/proDetail";

function success() {
    Modal.success({
        title: '客服小姐姐',
        content: '有什么好反馈的，我们做的都是最好的，回去吧~',
    });
}

class ToBuy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true,
            isLogin: false
        }
    }

    componentWillMount() {
        this.proId = parseFloat(Qs.parse(this.props.location.search.substr(1)).id);
        this.setState({
            show: this.props.toBack
        });
        this.myColor = {
            background: 'rgba(0,0,0,.8)',
            text: "#fff",
            padding: '0 !important',
        };
    }

    async componentDiDMount() {
        let result = await checkLogin();
        this.setState({
            isLogin: parseFloat(result.code) === 0 ? true : false
        });
    }

    render() {
        this.proId = parseFloat(Qs.parse(this.props.location.search.substr(1)).id);
        return (
            <div className="toBuyBottom">
                <Notifications/>
                <div className="box icon" onClick={this.handleBack}>{
                    this.state.show ? <Icon type="customer-service" onClick={success}/> : '返回'
                }</div>
                <div className="box" onClick={this.nowBuy}>立即购买</div>
                <div className="box addToCart" onClick={this.addCartList}>加入购物车</div>
            </div>
        )
    }


    handleBack = ev => {
        if (ev.target.innerHTML === '返回') {
            this.props.history.go(-1);
        }
    };
    addCartList = async () => {
        /*加入购物车*/
        let {count, color} = this.props.productInfo;
        if (color === '请选择商品规格') {
            notify.show('您未选择商品规格', 'custom', 2000, this.myColor);
            this.props.history.push(`/prodetail/params?id=${this.proId}`);
            return;
        }
        let result = await addGoods({
            goodsID: this.proId,
            count
        });

        this.props.history.replace(`/prodetail?id=${this.proId}`);
        // notify.show('已加入购物车!', 'custom', 2000, this.myColor);
        // this.props.getCartInfo();
        /*setTimeout(() => {
            this.props.history.replace(`/prodetail?id=${this.proId}`);
        }, 100);*/
        if (+result.code === 0) {
            notify.show('已加入购物车!', 'custom', 2000, this.myColor);
            this.props.getCartInfo();
        } else {
            notify.show('加入失败啦，请重试', 'custom', 2000, this.myColor);
        }
    };
    nowBuy = async () => {
        let {count, color} = this.props.productInfo;
        if (color === '请选择商品规格') {
            notify.show('您未选择商品规格', 'custom', 2000, this.myColor);
            this.props.history.push(`/prodetail/params?id=${this.proId}`);
            return;
        }
        let result = await addGoods({
            goodsID: this.proId,
            count
        });
        this.props.history.replace(`/prodetail?id=${this.proId}`);
        if (+result.code === 0) {
            // notify.show('已加入购物车!', 'custom', 2000, this.myColor);
            this.props.getCartInfo();
            if (this.state.isLogin) {
                this.props.history.push({
                    pathname: '/detailconfirm',
                    search: `?id=${this.proId}&count=${count}`
                });
            } else {
                this.props.history.push('/person/login');
            }
        } else {
            notify.show('购买失败啦，请重试', 'custom', 2000, this.myColor);
        }
        /* 验证是否登录 登录了就跳到下单页，未登录跳到登录页面*/
        /*let addResult = await addGoods({id: this.proId, count});
        if (+addResult.code === 0) {
            this.props.getCartInfo(0);
            console.log(this.proId);
            if (this.state.isLogin) {
                this.props.history.push({
                    pathname: '/detailconfirm',
                    search: `?id=${this.proId}&count=${count}`
                });
            } else {
                this.props.history.push('/person/login');
            }
        } else {
            notify.show('出了点问题，请重新操作!', 'custom', 2000, this.myColor);
        }*/
    }
}

export default withRouter(connect(state => ({...state.prodetail, ...state.shopCart}), {...action.person, ...action.prodetail, ...action.shopCart})(ToBuy));

