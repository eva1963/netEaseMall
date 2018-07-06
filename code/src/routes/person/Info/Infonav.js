import React from 'react';
import { connect } from 'react-redux';

import NavTopCart from '../../../component/NavTopCart';

class Infonav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <div className='userCenterWrapper clearfix'>
            <NavTopCart />
            <div className='userCenter'>
                <div className='item item1'>
                    <div className='inner clearfix'>
                        <span>个人信息</span>
                        <i className='redDot'></i>
                            <img className='userIcon' src="http://yanxuan.nosdn.127.net/5b32776a47523cae0e81f423d5f37279.jpg" alt=""/>
                    </div>
                    <i className='rightArrow'></i>
                </div>
                <div className='item item2'>
                    <div className='inner clearfix'>
                        <span>我的尺码</span>
                        <i className='rightIMG'></i>
                    </div>
                    <i className='rightArrow'></i>
                </div>
                <div className='item item3'>
                    <div className='inner clearfix'>
                        <span>会员俱乐部</span>
                        <span className='right'>V2会员</span>
                    </div>
                    <i className='rightArrow'></i>
                </div>
                <div className='item item4'>
                    <div className='inner clearfix'>
                        <span>积分中心</span>
                        <span className='right'>6积分</span>
                    </div>
                    <i className='rightArrow'></i>
                </div>
            </div>
        </div>

    }
}
export default connect()(Infonav);
// export default withRouter(connect(null, { ...action.person })(Form.create()(Infonav)));