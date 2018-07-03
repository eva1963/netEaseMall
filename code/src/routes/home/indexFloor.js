import React from 'react';
import {connect} from 'react-redux';
import {withRouter,NavLink,Link} from 'react-router-dom';
import {Icon} from 'antd';

class IndexFloor extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return  <div className={'indexFloor'}>
            <a href="javascript:;">品牌制造商直销</a>
            <ul className={'floorBox'}>
                <li>
                    <div>
                        <p>Ck制造商</p>
                        <p>25元起</p>
                        <a href="javascript:;" className={'new'}>上新</a>
                    </div>
                    <div>
                        <img src="" alt="这是图片，马上会有"/>
                    </div>
                </li>
            </ul>
        </div>
    }
};
export default withRouter(connect()(IndexFloor));