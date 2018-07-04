import React from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';
import {Link,withRouter} from 'react-router-dom';


class ClassifyInfo extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state={
            categoryData:[]
        };
    }
    async componentDidMount(){
        if(this.props.goodsData.length!=0)return;
        let {queryInfo}=this.props;
        await queryInfo({type:'all'});
        let {goodsData}=this.props;
        let categList=[],cateResultList=[];
        let firstData=goodsData[0];
        goodsData.forEach(item=>{
            let {type,category}=item;
            if(type===firstData.type&&!categList.includes(category)){
                categList.push(category);
                cateResultList.push({type:type,category:category});
            }
        });
        categList=[];
        this.setState({
            goodsData:goodsData,
            categoryData:cateResultList
        })
    }
    /*componentDidMount(){

    }*/
    render(){
        console.log(1);
        let {categoryData}=this.state;
        let {goodsData}=this.props;
        if(goodsData.length===0)return '';
        let newGoodsData=[];
        goodsData.forEach(item=>{
            newGoodsData.includes(item.type)?null:newGoodsData.push(item.type);
        });

        return <div className={'classify_box'}>
            <div className="classify_boxL">
                <ul>
                    {
                        newGoodsData.map((item,index)=>{
                            console.log(3);
                            return  <li  key={index} onClick={()=>{
                                    this.swipterBt(item);
                            }}>
                                <span>{item}
                                </span>
                            </li>
                        })
                    }

                </ul>
            </div>
            <div className={'classify_boxR'}>
                <div className={'classify_boxR_banner'}>
                    <a href="http://www.baidu.com"></a>
                </div>
                <div className={'classify_r_title'}>
                    <p><span className={'classify_r_title1'}>推荐专区</span><span className={'classify_r_title2'}>分类</span></p></div>
                <ul className={'clearfix classify_r_bottom'}>
                    {
                        categoryData.map((item,index)=>{
                            let {type,category}=item;
                            return  <li key={index}>
                                <Link to={`/classify/detail?type=${type}&category=${category}`}>
                                <img src="http://yanxuan.nosdn.127.net/7148a182ffe00ba67de2c6d8cd403a80.png?imageView&quality=85&thumbnail=144x144" alt=""/>
                                <span>{category}</span>
                                </Link>
                            </li>
                        })
                    }



                </ul>
            </div>
        </div>

    }
    swipterBt=type1=>{
        let {goodsData}=this.props;
        let categList=[],cateResultList=[];
        goodsData.forEach(item=>{
            let {type,category}=item;
            if(type===type1&&!categList.includes(category)){
                categList.push(category);
                cateResultList.push({type:type,category:category});
            }
        });
        categList=[];
        this.setState({
            categoryData:cateResultList
        })
    }
}


export default withRouter(connect(state=>({...state.classify}),action.classify)(ClassifyInfo));
