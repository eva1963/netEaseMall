import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {Checkbox, Divider,Modal} from 'antd';
import "../../src/static/less/DetailConfirm.less";
import action from "../store/action";
import Qs from "qs";

class DetailConfirmCont extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            totalPri:0,
            agreeChe:true
        }
    }
    componentWillMount(){
        let {cartData} = this.props;
        this.proId = Qs.parse(this.props.location.search.substr(1)).id;
        this.orderID = [];
        if(this.proId.indexOf(',') === -1){
            this.goodsID = [+this.proId];
        }else{
            this.goodsID = this.proId.split(/\,/g).map(Number);
        }
        this.orderData = cartData.filter(({goodsID, price, count, orderID,pic}) => {
            if(this.goodsID.includes(goodsID)){
                this.setState({
                    totalPri: this.state.totalPri + price * count
                });
                this.orderID.push(orderID);
                return true;
            }
        });
    }

    render() {
        let {cartData,history,baseInfo} = this.props,
            {totalPri} = this.state;
        if(!cartData.length) {
            history.push('/home')
        }
        return <section className={'confirmCont'}>
            <ul>
                <div className="u-icon u-address-bg" data-reactid=".0.1:2.0"></div>
                <li className={'userInfo'}>
                    <p>
                        <span style={{
                            marginRight: '1.6rem'
                        }}>{baseInfo? baseInfo.name : '亲亲'}</span>
                        <span>{baseInfo ? baseInfo.phone : '123****890'}</span>
                    </p>
                    <p className='addr clearfix'>
                        <span className='default fl'>默认</span>
                        <span>河北省邢台市威县******30号</span>
                    </p>
                </li>
                <li className='discount'>
                    <p className='clearfix'>
                        <span className='fl'>暂无优惠券</span>
                        <span className='fr' style={{marginRight: '.3rem'}}>0张</span>
                    </p>
                    <Divider/>
                    <p className='clearfix'>
                        <span className='fl'>礼品卡:￥00.00</span>
                    </p>
                </li>
                <li className='aboutMoney'>
                    <p className='clearfix'>
                        <span className='fl'>商品合计</span>
                        <span className='fr'>￥{totalPri.toFixed(2)}</span>
                    </p>
                    <Divider/>
                    <p className='clearfix'>
                        <span className='fl'>运费</span>
                        <span className='fr'>￥{(totalPri > 88 ? 0 : 10).toFixed(2)}</span>
                    </p>
                    <Divider/>
                    <p className='clearfix'>
                        <span className='fl'>优惠券</span>
                        <span className='fr'>￥0.00</span>
                    </p>
                    <Divider/>
                    <p className='clearfix'>
                        <Checkbox className='fl'/>
                        <span>我要开发票</span>
                    </p>
                </li>
                {
                    this.orderData.map(({name,desc,price,count,pic},index) => {
                        return <li key={index} className='shooes clearfix'>
                            <img src={pic} alt="" className='fl'/>
                            <div className='fl'>
                                <p>{name}</p>
                                <p>
                                    <span>{desc}</span>
                                </p>
                                <p>￥{price.toFixed(2)}</p>
                            </div>
                            <p className='fr'>&times; {count}</p>
                        </li>
                    })

                }
                <li className='agree'>
                    <Checkbox checked={this.state.agreeChe} onChange={() => {
                        this.setState({
                            agreeChe:!this.state.agreeChe
                        })
                    }}/>
                    <span style={{color:'#999',fontSize:".24rem"}}>我同意《<span className="agreecont" onClick={this.info}>我的地盘协议</span>》</span>
                </li>
                <li className='pay'>
                    <div className='clearfix'>
                        <span className='fl'>应付：￥{(totalPri > 88 ? totalPri : totalPri+10).toFixed(2)}</span>
                        <button className='fr' onClick={this.goPay}>去付款</button>
                    </div>

                </li>
            </ul>
        </section>
    }
    info = () => {
        Modal.info({
            title: '我的地盘协议',
            content: '买买买，交钱交钱'
        })
    };
    warning = (title,content) => {
        Modal.warning({
            title,
            content
        });
    };
    goPay = () => {
        this.state.agreeChe ? this.props.history.push(`/payMode?orderID=${this.orderID}`) : this.warning('必须同意我们的条款~~~');
    }
};
export default withRouter(connect(state=>({...state.person,...state.shopCart}),{...action.person,...action.shopCart})(DetailConfirmCont));