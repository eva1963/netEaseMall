import React from 'react';
import {connect} from 'react-redux';
import Count from '../../component/Count';
import ToBuy from '../../component/ToBuy';

import '../../static/less/params.less';

class Params extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="paramsList">
                <div className="info-con">
                    <div className="left">
                        <img src={12} alt=""/>
                    </div>
                    <div className="right">
                        <div className="con">
                            <div className="price">价格：￥{1200}</div>
                            <div className="sku">
                                已选择：{'灰色'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spec-con">
                    <div className="box">
                        <div className="tt">颜色</div>
                        <ul className="con">
                            <li className="tab active">浅灰色</li>
                            <li className="tab">灰色</li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="tt">数量</div>
                        <div className="con">
                            <Count/>
                        </div>
                    </div>
                </div>
                <ToBuy/>
            </div>
        )
    }
}


export default connect()(Params);
