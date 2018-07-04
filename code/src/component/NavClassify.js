/*@target: 商品分类banner
* @params: <NavClassify classifyIndex={this.state.classifyIndex} handle={this.classifyHandle}/>
*          classifyIndex:当前索引
*/
import React from 'react'
import {connect} from 'react-redux'
import '../static/less/orderTitle.less'

class NavClassify extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    componentWillReceiveProps(){
        let el = this.classifyWrap,
          t_menu = el.childNodes[this.props.classifyIndex];

        let space = document.documentElement.clientWidth / 2 - t_menu.offsetWidth / 2 - t_menu.offsetWidth;
        el.style.transition="-webkit-transform 500ms";
        el.scrollLeft = t_menu.offsetLeft - space;
    }
    render(){
        let {classifyIndex,handle} = this.props;
        let classifyData = ['推荐专区','爆品区','夏季专区','居家','鞋包配饰','服装','电器','洗护','银饰','餐厨','婴童','文体'],
             type = ['tuijianzhuanqu','baopinqu','xiajizhuanqu','jujia','xiebaopeishi','fuzhuang','dianqi','xihu','yinshi','canchu','yingtong','wenti'];
        return <div className="orderTitle">
            <ul ref={x=>this.classifyWrap=x}>{
                type.map((item,index)=>{
                    return <li key={index} className={classifyIndex===index?'active':''} onClick={ev=>{
                       alert('跳转到分类列表')
                    }
                    }>{classifyData[index]}</li>
                })
            }</ul>
        </div>
    }
}

export default connect()(NavClassify)