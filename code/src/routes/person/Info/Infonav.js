import React from 'react';
import { connect } from 'react-redux';

import NavTopCart from '../../../component/NavTopCart';

class Infonav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <div>
            <NavTopCart />
            <div className='userCenter'>
                <div className='item'>
                    <div className='inner'>
                        <span>个人信息</span>
                        <i></i>
                        <i>
                            <img src="" alt=""/>
                        </i>
                    </div>
                    <i></i>
                </div>
                <div className='item'>
                    <div className='inner'>
                        <span>我的尺码</span>
                        <i></i>
                    </div>
                    <i></i>
                </div>
                <div className='item'>
                    <div className='inner'>
                        <span>会员俱乐部</span>
                        <span>V2会员</span>
                    </div>
                    <i></i>
                </div>
                <div className='item'>
                    <div className='inner'>
                        <span>几分中心</span>
                        <span>6几分</span>
                    </div>
                    <i></i>
                </div>
            </div>
        </div>

    }
}
export default connect()(Infonav);
// export default withRouter(connect(null, { ...action.person })(Form.create()(Infonav)));