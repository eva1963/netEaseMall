import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Input, Modal, Button } from "antd"
import {search} from '../api/home'
import "../static/less/searchClass.less"

const Search  = Input.Search;
let queryRes = [];
class SearchBox extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            result:[]
        }
    }
    render(){
        queryRes = this.state.result;
        return <div className={'searchBox'}>
            <div className="searchHeader">
                <Search
                    placeholder="站立办公学习可升降桌疯抢中"
                    onSearch={this.enterSearch}
                    onChange={this.inputChange}
                />
                <b onClick={this.cancel}>取消</b>
            </div>
            {queryRes.length===0?(<div className="hot">
                <h3>热门搜索</h3>
                <div className="item-wrapper clearfix">
                    <Link to={'/prodetail?id=3'}>粉底霜</Link>
                    <Link to={'/prodetail?id=1'} className={"grey"}>CK制造商</Link>
                    <Link to={'/prodetail?id=2'}>破壁机</Link>
                    <Link to={'/prodetail?id=5'}>文胸</Link>
                    <Link to={'/prodetail?id=4'}>空气净化剂</Link>
                </div>
            </div>):(<div className={'list'}>{
                queryRes.map((item,index)=>{
                    let {id,name} = item;
                    return <Link to={`/prodetail?id=${id}`} key={index}>
                        {name}
                    </Link>
                })}</div>)}
        </div>
    }
    inputChange = ev=>{
       let target = ev.target,
           value = target.value;
       if(value===''){
           this.setState({
               result:[]
           })
       }
    };
    enterSearch = async value =>{
        let result = await search({name:value});
        if(parseFloat(result.code)===0 && result.data.length!==0){
            this.setState({
                result:result.data
            });
        }else{
            Modal.warning({
                content: '没搜到一条符合的数据╮(╯﹏╰）╭',
            });
        }
    };
    cancel = ev=>{
        this.props.history.go(-1);
    }
};
export default SearchBox;

