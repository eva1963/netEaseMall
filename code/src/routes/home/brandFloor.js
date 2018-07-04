import React from 'react';
import {connect} from 'react-redux';
import {withRouter,NavLink,Link} from 'react-router-dom';
import {Icon} from 'antd';
import action from "../../store/action"

class BrandFloor extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        let {brandFloor}=this.props;
        console.log(this.props.brandList);
        return  <div className={'brandFloor'}>
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
export default withRouter(connect(state=>({...state.home}),action.home)(BrandFloor));