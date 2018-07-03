import React from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import {Input,Tabs} from 'antd';
const Search = Input.Search;
const TabPane = Tabs.TabPane;

class NavTop extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            mode: 'top',
        };
    }
    render(){
        const { mode } = this.state;

        return (
            <div className="navTop">
                <div className="line">
                    <Link to="/home" className="logo">网易严选</Link>
                    <div className="search"><Search placeholder="搜索商品, 共10483款好物" /></div>
                </div>
                <div className="navList">
                    <ul className="">
                        <li className="active">推荐</li>
                        <li>居家</li>
                        <li>鞋包配置</li>
                        <li>服装</li>
                        <li>电器</li>
                        <li>洗护</li>
                        <li>洗护</li>
                        <li>洗护</li>
                        <li>洗护</li>
                        <li>洗护</li>
                        <li>洗护</li>
                        <li>洗护</li>
                        <li>洗护</li>
                        <li>洗护</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default withRouter(connect()(NavTop));
