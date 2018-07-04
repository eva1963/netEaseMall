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
        let {queryInfo,queryCategory}=this.props;
        await queryInfo({type:'all'});
        queryCategory(this.props.goodsData,'jujia');
        let {goodsData,categorys}=this.props;
        this.setState({
            goodsData:goodsData,
            categoryData:categorys
        })
    }
    /*componentDidMount(){

    }*/
    render(){
        let {goodsData,categorys}=this.props;
        if(goodsData.length===0)return '';
        let newGoodsData=[];
        goodsData.forEach(item=>{
            newGoodsData.includes(item.type)?null:newGoodsData.push(item.type);
        });
        return <div className={'classify_box clearfix'}>
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
                        categorys.map((item,index)=>{
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
        let {queryCategory}=this.props;
        queryCategory(this.props.goodsData,type1);
        let {categorys}=this.props;
        this.setState({
            categoryData:categorys
        })

    }
}


export default withRouter(connect(state=>({...state.classify}),action.classify)(ClassifyInfo));
