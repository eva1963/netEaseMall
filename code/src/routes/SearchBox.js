import React from 'react'
import {Link} from 'react-router-dom'
import {Input, Modal, Button } from "antd"
import "../static/less/searchClass.less"

const Search  = Input.Search;
export default class SearchBox extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div className={'searchBox'}>
            <div className="searchHeader">
                <Search
                    placeholder="站立办公学习可升降桌疯抢中"
                    onSearch={value =>{
                        Modal.warning({
                            title: '信息提示',
                            content: '这个功能没做╮(╯﹏╰）╭',
                        });
                    }}
                ref={x=>this.inputWrap=x}/>
                <b onClick={this.cancel}>取消</b>
            </div>
            <div className="hot">
                <h3>热门搜索</h3>
                <div className="item-wrapper clearfix">
                    <Link to={'/prodetail?id=3'}>粉底霜</Link>
                    <Link to={'/prodetail?id=1'} className={"grey"}>CK制造商</Link>
                    <Link to={'/prodetail?id=2'}>破壁机</Link>
                    <Link to={'/prodetail?id=5'}>文胸</Link>
                    <Link to={'/prodetail?id=4'}>空气净化剂</Link>
                </div>
            </div>
        </div>
    }
    cancel = ev=>{
        console.log(this.inputWrap);
        this.inputWrap.value = ''
    }
}
