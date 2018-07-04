import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action';
import '../static/less/classify.less';

class Classify extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state={
          goodsData:[]
        };
    }
    async componentWillMount(){
        if(this.props.goodsData.length!=0)return;
        let {queryInfo}=this.props;
        await queryInfo({type:'all'});
        let {goodsData}=this.props;
        this.setState({
            goodsData:goodsData
        })
    }
    componentDidMount(){

    }
    render(){
        let {goodsData}=this.state;
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
                          return  <li  key={index}>
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
                    <li>
                        <img src="http://yanxuan.nosdn.127.net/7148a182ffe00ba67de2c6d8cd403a80.png?imageView&quality=85&thumbnail=144x144" alt=""/>
                        <span>二类标题</span>
                    </li>
                    <li>
                        <img src="http://yanxuan.nosdn.127.net/7148a182ffe00ba67de2c6d8cd403a80.png?imageView&quality=85&thumbnail=144x144" alt=""/>
                        <span>二类标题</span>
                    </li>
                    <li>
                        <img src="http://yanxuan.nosdn.127.net/7148a182ffe00ba67de2c6d8cd403a80.png?imageView&quality=85&thumbnail=144x144" alt=""/>
                        <span>二类标题</span>
                    </li>
                </ul>
            </div>
            </div>

    }
}


export default connect(state=>({...state.classify}),action.classify)(Classify);
