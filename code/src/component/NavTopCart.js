import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Row, Col,Icon } from 'antd';
import '../static/less/header.less'
/*
* @target:带购车车入口的header
*/
class NavTopCart extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className={'navTopCart'}>
            <div className={'home'}><Link to={"/home"}><Icon type="home"/></Link></div>
                <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"/>
            <div className={'cart'}><Link to={"/order"}><Icon type="search" /></Link><Link to={"/order"}><Icon type="shopping-cart" /></Link></div>
        </div>
    }
}

export default connect()(NavTopCart)