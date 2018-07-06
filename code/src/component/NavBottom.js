import React from 'react';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import {Icon} from 'antd';

class NavBottom extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="navBottom">
                <NavLink to="/home">
                    <Icon type="home"/>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/classify">
                    <Icon type="profile"/>
                    <span>分类</span>
                </NavLink>
                <NavLink to="/shopcart">
                    <Icon type="shopping-cart"/>
                    {/*<i className='cartNum'>5</i>*/}
                    <span>购物车</span>
                </NavLink>
                <NavLink to="/person">
                    <Icon type="user"/>
                    <span>个人</span>
                </NavLink>
            </div>
        )
    }
}

export default withRouter(connect()(NavBottom));
