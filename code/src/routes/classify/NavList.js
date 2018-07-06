import React from 'react';
import {connect} from 'react-redux'
import Qs from 'qs';
import action from '../../store/action/classify';
import '../../static/less/orderTitle.less';

 class NavList extends  React.Component{
    constructor(props,context){
        super(props,context);
        let search=this.props.location.search;
        let curType=Qs.parse(search.substr(1))['type'];
        this.state={
            goodsData:[],
            categoryData:[],
            curType
        };
    }
   async componentWillMount(){
        let {queryInfo,queryCategory}=this.props;
       console.log(this.props);
       let goodsData=[];
       this.props.goodsData.length===0?goodsData=await queryInfo('all'):null;
       let categoryData=queryCategory(goodsData,this.state.curType);
       this.setState({
           goodsData,
           categoryData
       })

    }
    render(){
        if(this.props.goodsData===0)return '';
        let classifyData = ['推荐专区','爆品区','夏季专区','居家','鞋包配饰','服装','电器','洗护','银饰','餐厨','婴童','文体'],
            type = ['tuijianzhuanqu','baopinqu','xiajizhuanqu','jujia','xiebaopeishi','fuzhuang','dianqi','xihu','yinshi','canchu','yingtong','wenti'];
        return <div>
            <ul className={'navList_box orderTitle'}>
                {
                    type.map((item,index)=>{
                        return <li key={index}>
                                {classifyData[index]}
                        </li>;
                    })
                }
            </ul>
        </div>;
    }
}
export default connect(state => ({...state.classify}), action.classify)(NavList);