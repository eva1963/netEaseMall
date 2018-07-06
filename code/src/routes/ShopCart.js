import React from 'react';
import {connect} from 'react-redux';
import '../static/less/shopCart.less'
import NavBottom from '../component/NavBottom'
import {Link, Switch, Route} from 'react-router-dom'
import action from "../store/action";
import {Icon, Modal, Button} from 'antd';
import {checkLogin} from "../api/person";

class ShopCart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin: false,
            isEdit: false
        };
        //获取购物车信息
        this.props.getCartInfo(0)
    }

    async componentDidMount() {
        //验证是否登录
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        this.setState({ isLogin });

    }
    async componentWillReceiveProps() {
        //验证是否登录
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        this.setState({ isLogin });

    }

    render() {
        let {isLogin, isEdit} = this.state,
            {cartData, selectAll, changeItemCheck, changeSelectAll, removeSele} = this.props;
        let handleAble = cartData.some(item => item.isChecked);
        let checkedId = [];
        cartData.filter(({isChecked, goodsID}) => {
            if(isChecked){
                checkedId.push(goodsID);
            }
        });
        return (
            <div className='shopCartBox'>
                <div className='shopCartContent'>
                    <div className="shopTit">购物车
                        {
                            cartData.length ? <span className='edit' onClick={() => {
                                this.setState({
                                    isEdit: !isEdit
                                })
                            }}>{
                                isEdit ? '完成' : '编辑'
                            }</span> : null
                        }

                    </div>
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
                    {cartData.length ? <div className="shopCarList">
                        <ul>
                            {
                                cartData.map(({pic, name, desc, count, price, id, isChecked}, index) => {
                                    return <li key={index} className='item'>
                                        <div className='content'>
                                            <label className={'checkbox'}>
                                                <input type="checkbox" className='checkRed' checked={isChecked}
                                                       onChange={() => {
                                                           changeItemCheck(id);

                                                       }}/>
                                            </label>
                                            <div className="avator"><img src={pic} alt={name}/></div>
                                            <div className='info'>
                                                <h2 className='title'>{name}</h2>
                                                <p className='desc'>{desc}</p>
                                                <p className="price">￥{price.toFixed(2)}</p>
                                            </div>
                                            <Icon className='del' type="delete"
                                                  onClick={this.showConfirm.bind(this, this.delItem.bind(this, id))}/>
                                            <div className="count">
                                                <Icon type="minus" className='minus'
                                                      onClick={this.changeCount.bind(this, id, -1)}/>
                                                <input type="text" value={count} className='countNum'
                                                       onChange={this.inputNum.bind(this, id)}/>
                                                <Icon type="plus" className='plus'
                                                      onClick={this.changeCount.bind(this, id, 1)}/>
                                            </div>

                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div> : null}
                    {
                        cartData.length ? <div className="shopBot">
                            <div className="botLeft">
                                <input type="checkbox" className={'checkRed'} checked={selectAll} onChange={changeSelectAll}/>
                                <span>已选({
                                    cartData.reduce((prev, {isChecked, count}) => {
                                        if (isChecked) {
                                            return prev + count;
                                        }
                                        return prev
                                    }, 0)
                                })</span>
                            </div>
                            <div className="botRight">
                            <span className={isEdit ? 'disvisble price' : 'price'}>￥{
                                (cartData.reduce((prev, {isChecked, count, price}) => {
                                    if (isChecked) {
                                        return prev + ((+price) * (+count));
                                    }
                                    return prev;
                                }, 0)).toFixed(2)
                            }</span>
                                {
                                    isEdit ?
                                        <a className={handleAble ? 'toOrder ableDo' : 'toOrder unDo'} href='javascript:'
                                           onClick={this.showConfirm.bind(this, this.removeSele)}>删除所选</a> :
                                        <Link className={handleAble ? 'toOrder ableDo' : 'toOrder unDo'}
                                              to={isLogin ? `/detailconfirm?id=${checkedId}` : '/person/login'}>下单</Link>
                                }


                            </div>
                        </div> : null
                    }

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

    removeSele = () => {
        let {cartData,getCartInfo} = this.props,
            selAry = [];
        let handleAble = cartData.some(item => item.isChecked);//是否可点击
        if (handleAble) {
            cartData = cartData.filter(({isChecked}) => isChecked);
            cartData.forEach(item => {
                selAry.push(item.id);
            });

            selAry = selAry.map(id => {
                return this.delItem(id);
            });
            Promise.all(selAry).then(() => {
                getCartInfo(0);
            });

        }
    };
    changeCount = (id, step) => {
        this.props.changeNum(id, step);
    };

    inputNum = (id, ev) => {
        let val = ev.target.value;
        val = +val ? +val : 1;
        this.props.inputNum(id, val);

    };

    delItem = id => {
        this.props.cartRemove(id);
    };

    showConfirm = (callBack) => {
        Modal.confirm({
            title: '删除',
            content: '您确定要删除当前所选条目吗',
            onOk: () => {
                callBack();
            }
        });
    }
}

export default connect(state => state.shopCart, action.shopCart)(ShopCart);
