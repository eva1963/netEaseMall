/*@target: 商品分类banner
* @params: <NavClassify classifyIndex={this.state.classifyIndex} handle={this.classifyHandle}/>
*          classifyIndex:当前索引
*/
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"
import '../static/less/orderTitle.less'

class NavClassify extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        let {classifyIndex,handle} = this.props;
        let classifyData = ['推荐专区','爆品区','夏季专区','居家','鞋包配饰','服装','电器','洗护','银饰','餐厨','婴童','文体'],
             type = ['tuijianzhuanqu','baopinqu','xiajizhuanqu','jujia','xiebaopeishi','fuzhuang','dianqi','xihu','yinshi','canchu','yingtong','wenti'];
        return <div className="orderTitle">
            <ul ref={x=>this.classifyWrap=x}>{
                type.map((item,index)=>{
                    return <li key={index} className={classifyIndex===index?'active':''} onClick={ev=>{
                       this.props.history.push(`/classify/list?type=${item}&category=`)
                    }
                    }>{classifyData[index]}</li>
                })
            }</ul>
        </div>
    }
}

export default withRouter(connect()(NavClassify));