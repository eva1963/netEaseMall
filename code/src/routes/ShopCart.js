import React from 'react';
import {connect} from 'react-redux';
import '../static/less/shopCart.less'
import NavBottom from '../component/NavBottom'
import {Link,Switch,Route} from 'react-router-dom'
import action from "../store/action";
import {Icon} from 'antd';

class ShopCart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin: false
        };
        this.props.getCartInfo(0)
    }

    componentDidMount() {
        let {getCartInfo} = this.props;
        //验证是否登录
        // let isLogin = checkLogin()
        this.setState({
            isLogin: true
        });


    }

    render() {
        let {isLogin} = this.state,
            {cartData} = this.props;

        return (
            <div className='shopCartBox'>
                <div className='shopCartContent'>
                    <div className="shopTit">购物车</div>
                    <div className="detailCart">
                        <Switch>
                            <Route path='shopcart/'/>
                        </Switch>
                    </div>
                    <ul className="shopTips">
                        <li>30天无忧退货</li>
                        <li>48小时快速退款</li>
                        <li>满88元免邮费</li>
                    </ul>
                    {/*购物车列表*/}
                    {cartData.length ? <div className="shopCarList"><ul>
                        {
                            cartData.map(({pic, name, desc, count, price, id}, index) => {
                                return <li key={index} className={'item'}>
                                    <div className={'content'}>
                                        <div className="avator"><img src={pic} alt={name}/></div>
                                        <div className={'info'}>
                                            <h2>{name}</h2>
                                            <p>{desc}</p>
                                        </div>
                                        <Icon className='del' type="delete" onClick={ev=>{this.delItem.bind(this, id)}}/>

                                    </div>
                                </li>
                            })
                        }
                    </ul></div> : null}
                    <div className="shopCart">
                        {
                            cartData.length ? null : <Link to='/Home' className="shopCartAdd">去添加点什么吧</Link>
                        }

                        {
                            isLogin ? null : <Link className='redBtn toLogin' to='/person/login'>登录</Link>
                        }

                    </div>
                </div>
                <NavBottom/>
            </div>
        )
    }
    delItem = (id) => {

    }
}

export default connect(state => state.shopCart, action.shopCart)(ShopCart);
