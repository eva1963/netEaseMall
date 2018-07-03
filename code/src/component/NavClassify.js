import React from 'react'
import {connect} from 'react-redux'
import '../static/less/orderTitle.less'

class NavClassify extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        let classifyData = ['推荐','居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','婴童','文体','特色区'];
        return <div className="orderTitle">
            <ul className="">{
                classifyData.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }</ul>
        </div>
    }
}

export default connect()(NavClassify)