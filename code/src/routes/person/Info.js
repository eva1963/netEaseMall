import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

import { Button } from 'antd';

import { exitLogin } from '../../api/person';
import action from '../../store/action/index';

import NavBottom from '../../component/NavBottom';


class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        let { baseInfo, queryBaseInfo } = this.props;
        !baseInfo ? queryBaseInfo() : null;
    }

    render() {
        let { baseInfo } = this.props;
        if (!baseInfo) return '';
        let { phone } = baseInfo;

        return <section>
            <div className='person'>
                <div className='leftWrap'>
                    <div className='topWrap'>
                        <Link to='/person/info/infonav'>
                            <div className='left'>
                                <img className='avatar' src="http://yanxuan.nosdn.127.net/5b32776a47523cae0e81f423d5f37279.jpg" alt="" />
                                <div className='info'>
                                    <p>{phone}</p>
                                    <div className='vip'>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className='right'>
                            <a href="">
                                <i className='QR'></i>
                            </a>
                            <div className='supermcEntrance'>
                                <i className='vipImg'></i>
                                <div className='vipRight'>
                                    <div className='top'>超级会员</div>
                                    <div className='bottom'>
                                        <span>立即试用</span>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='noticeWrap'>
                        <span className='sl'>会员权益</span>
                        <span className='sr'>本期会员神券已开放领取，立即领取></span>
                    </div>
                </div>

                <div className='tabs'>
                    <ul className='list clearfix'>
                        <li className='item'>
                            <Link className='uMenuItem' to="/order">
                                <i className='img img1'></i>
                                <span className='txt'>我的订单</span>
                            </Link>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img2'></i>
                                <span className='txt'>周六一起拼</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img3'></i>
                                <span className='txt'>售后服务</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img4'></i>
                                <span className='txt'>邀请返利</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img5'></i>
                                <span className='txt'>优惠券</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img6'></i>
                                <span className='txt'>我的红包</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img7'></i>
                                <span className='txt'>优先购</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img8'></i>
                                <span className='txt'>礼品卡</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img9'></i>
                                <span className='txt'>积分中心</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img10'></i>
                                <span className='txt'>会员俱乐部</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img11'></i>
                                <span className='txt'>地址管理</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img12'></i>
                                <span className='txt'>帐号安全</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img13'></i>
                                <span className='txt'>联系客服</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img14'></i>
                                <span className='txt'>帮助中心</span>
                            </a>
                        </li>
                        <li className='item'>
                            <a className='uMenuItem' href="">
                                <i className='img img15'></i>
                                <span className='txt'>意见反馈</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='exit'>
                    <Button onClick={async (ev) => {
                        await exitLogin();
                        this.props.history.push('/person');
                    }}>退出登录</Button>
                </div>
                
            </div>
            <NavBottom />
        </section>

    }
}
export default withRouter(connect(state => ({ ...state.person }), action.person)(Info));