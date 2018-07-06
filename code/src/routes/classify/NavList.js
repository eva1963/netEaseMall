import React from 'react';
import {connect} from 'react-redux'
import Qs from 'qs';
import action from '../../store/action';
import '../../static/less/navlist.less';

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
       this.props.goodsData.length===0?await queryInfo({type: 'all'}):null;
       goodsData=this.props.goodsData;
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
        return <div className={'navList_box'}>
            {/*导航*/}
            <div className={'navlist_nav'}>
            <ul className={'clearfix'}>
                {
                    type.map((item,index)=>{
                        return <li key={index}>
                                {classifyData[index]}
                        </li>;
                    })
                }
            </ul>
            </div>
            {/*商品信息*/}
            <div className="navlist_bottom">

                    {
                        this.props.categorys.map(({type,category},index)=>{
                            let newGoods=this.props.goodsData.filter(item=>item.type===type&&item.category===category);
                           return <div className={'navlist_info'} key={index}>
                                <div className={'navlist_title'}>
                                    <p>{category}</p>
                                    <p>描述</p>
                                </div>

                                   <ul className={'clearfix'}>
                                   {
                                       newGoods.map(({id,name,desc,pic,price,flag},index)=>{
                                           return <li key={index}>
                                               <img src={pic} alt=""/>
                                               <div className={'navlist_desc'}>
                                                   {desc}
                                               </div>
                                               <div className={'navlist_name'}>
                                                   {name}
                                               </div>
                                               <div className={'navlist_price'}>
                                                   {price}
                                               </div>
                                           </li>
                                       })
                                   }
                                   </ul>
                               </div>

                        })
                    }


            </div>
        </div>;
    }
}
export default connect(state => ({...state.classify}), action.classify)(NavList);