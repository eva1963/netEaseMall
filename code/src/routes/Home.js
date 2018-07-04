import React from 'react';
import {connect} from 'react-redux';
import NavTop from "../component/NavTop";
import NavClassify from "../component/NavClassify";
import BrandFloor from "./home/brandFloor";
import NavBottom from "../component/NavBottom";
import {Link} from 'react-router-dom'
import { Carousel } from 'antd';
/*css*/
import "../static/less/home.less"
import ShopItem from "../component/ShopItem";

class Home extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        let bannerData=[
            {
            id: 1,
            pic: require('../static/img/banner-1.jpg'),
        },{
            id: 10,
            pic: require('../static/img/banner-2.jpg'),
        },{
            id: 20,
            pic: require('../static/img/banner-3.jpg'),
        },{
            id: 30,
            pic: require('../static/img/banner-4.jpg'),
        },{
            id: 40,
            pic: require('../static/img/banner-5.jpg'),
        },{
            id: 50,
            pic: require('../static/img/banner-6.jpg'),
        }
        ];
        let shopItem=[
            {
                id:2,
                flag:"满额减",
                name:'破壁机/冷热双杯',
                desc:'高速破壁，释放营养',
                price:699,
                pic:require('../static/img/goods-11.png')
            },
            {
                id:3,
                flag:"",
                price:87,
                name:'水光气垫精华粉底霜',
                desc:'雾面透皙，水润持久好肤色',
                pic:require('../static/img/goods-12.png')
            },
            {
                id:4,
                flag:"",
                price:63,
                name:'美国制造 除甲醛空气净化剂227g',
                desc:'有效吸收甲醛、去除空间异味',
                pic:require('../static/img/goods-13.png')
            },
            {
                id:5,
                flag:"",
                price:869,
                name:'女式基础无钢圈文胸',
                desc:'随身而动的安心',
                pic:require('../static/img/goods-14.png')
            },
            {
                id:6,
                flag:"",
                price:85,
                name:'网易智造3D揉捏按摩肩带',
                desc:'透气吸汗麻+亲肤柔软棉',
                pic:require('../static/img/goods-15.png')
            }
        ];
        return (
            <div className={'home-wrapper'}>
                <NavTop />
                <NavClassify classifyIndex={0} />
                <div className={'banner'}>
                    <Carousel autoplay>{
                        bannerData.map((item,index)=>{
                            let {id,pic} = item;
                            return <Link to={`/prodetail?id=${id}`} key={index}><img src={pic}/></Link>
                        })
                    }</Carousel>
                    <ul className={'ele'}>
                        <li><i></i><span>网易自营品牌</span></li>
                        <li><i></i><span>30天无忧退货</span></li>
                        <li><i></i><span>48小时快速退款</span></li>
                    </ul>
                </div>
                <BrandFloor/>
                <div className={'newItem'}>
                    <div>
                        <span>新品首发</span>
                        <Link to={'/classify/list?type="yingtong"&category="xinshengerfuzhuang"'}>查看全部 ></Link>
                    </div>
                </div>
                <ul className={'goodGrid'}>{
                    shopItem.map((item,index)=>{
                       return <ShopItem data={item}/>
                    })
                }</ul>
                <div className={'newItem hot'}>
                    <div>
                        <span>人气推荐 · 好物精选</span>
                        <Link to={'/classify/list?type="yingtong"&category="xinshengerfuzhuang"'}>查看全部 ></Link>
                    </div>
                </div>
                <ul className={'goodGrid'}>{
                    shopItem.map((item,index)=>{
                        return <ShopItem data={item}/>
                    })
                }</ul>
                <NavBottom/>
                <div className={'newItem fuli'}>
                   <Link to={'/classify/list?type="yingtong"&category="xinshengerfuzhuang'}/>
                </div>
            </div>
        )
    }
}


export default connect()(Home);
