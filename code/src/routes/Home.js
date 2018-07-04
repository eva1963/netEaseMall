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
                <NavBottom/>
            </div>
        )
    }
}


export default connect()(Home);
