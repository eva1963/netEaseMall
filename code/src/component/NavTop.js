import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {Input, Tabs} from 'antd';

const Search = Input.Search;
const TabPane = Tabs.TabPane;

class NavTop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: 'top',
        };
    }

    render() {
        const {mode} = this.state;
        const disabled = true;
        return (
            <div className="navTop">
                <div className="line">
                    <Link to="/home" className="logo">网易严选</Link>
                    <div className="search"><Search placeholder="搜索商品, 共10483款好物" disabled={disabled}
                                                    onClick={this.goSearch}/></div>
                </div>
            </div>
        )
    }

    goSearch = ev => {
        alert('跳转到搜索页面')
    }
}


export default withRouter(connect()(NavTop));
