import React from 'react';
import {connect} from 'react-redux';
import '../static/less/shopCart.less'
import NavBottom from '../component/NavBottom'
import {Link,Switch,Route} from 'react-router-dom'
import action from "../store/action";

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

    componentWillReceiveProps() {

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
                            cartData.map(({pic, name, desc, count, price}, index) => {
                                return <li key={index}>
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
}

export default connect(state => state.shopCart, action.shopCart)(ShopCart);
