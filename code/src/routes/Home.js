import React from 'react';
import {connect} from 'react-redux';
import NavTop from "../component/NavTop";
import NavClassify from "../component/NavClassify";
import BrandFloor from "./home/BrandFloor";
import NavBottom from "../component/NavBottom";
import {Link} from 'react-router-dom'
import { Carousel } from 'antd';
import Totop from '../component/Totop';
/*css*/
import "../static/less/home.less"
import ShopItem from "../component/ShopItem";
import ShopItemBig from "../component/ShopItemBig";

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
        let shopItemBig=[
            {
                id:77,
                flag:"满额减",
                name:'自由躺 真皮电动功能沙发',
                desc:'一键自由躺 选款师力荐',
                price:2499,
                pic:require('../static/img/img-good1.png')
            },
            {
                id:78,
                flag:"",
                price:569,
                name:'牛皮方形锁扣双肩包',
                desc:'挺括梯形包身 兼顾颜值与实用',
                pic:require('../static/img/img-good2.png')
            },
            {
                id:79,
                flag:"",
                price:63,
                name:'草本石墨烯暖宫腰带',
                desc:'石墨烯暖宫，草本甘香惬意',
                pic:require('../static/img/img-good3.png')
            },
            {
                id:80,
                flag:"",
                price:239,
                name:'健康饮水 宠物自循环活氧饮水器',
                desc:'活氧体验，让萌宠爱上喝水，呵护爱宠健康',
                pic:require('../static/img/img-good4.png')
            },
            {
                id:81,
                flag:"",
                price:99,
                name:'大蝴蝶结女士软木拖鞋',
                desc:'软木鞋身，完美贴合足部',
                pic:require('../static/img/img-good5.png')
            },
            {
                id:82,
                flag:"",
                price:169,
                name:'菱形拼接束口双肩包',
                desc:'大容量设计，轻盈储物',
                pic:require('../static/img/img-good6.png')
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
                       return <ShopItem data={item} key={index}/>
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
                        return <ShopItem data={item} key={index}/>
                    })
                }</ul>
                <NavBottom/>
                <div className={'newItem fuli'}>
                   <Link to={'/classify/list?type="yingtong"&category="xinshengerfuzhuang'}/>
                </div>
                <div className={'goodList'}>
                    <h3 className={'brandNav'}>居家好物</h3>
                    <ul className={'clearfix'}>
                        {
                            shopItemBig.map((item,index)=>{
                                return <ShopItemBig data={item} key={index}/>
                            })
                        }
                    </ul>
                </div>
                <div className="footer">
                    <div className="bd"><a>下载APP</a><a>电脑版</a></div>
                    <p className="copyright"><span>网易公司版权所有 © 1997-</span><span>2018</span><br/>
                        <span>食品经营许可证：JY13301080111719</span>
                    </p>
                </div>
                <Totop/>
            </div>
        )
    }
}


export default connect()(Home);
