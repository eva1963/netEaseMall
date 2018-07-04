import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import '../static/less/header.less';
/*
 * @target:带购车车入口的header
 */
class NavTopCart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgSrc: require('../static/img/neteasy.png')
        }
    }

    render() {
        return <div className={'navTopCart'}>
            <div className={'home'}>
                <Link to={"/home"}><Icon type="home"/>
                </Link>
            </div>
            <img src={this.state.imgSrc}/>
            <div className={'cart'}>
                <Icon type="search"/>
                <Link to={"/shopcart"}><Icon type="shopping-cart"/></Link></div>
        </div>
    }
}

export default NavTopCart;