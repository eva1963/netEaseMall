import React from 'react';
import {connect} from 'react-redux';
import {withRouter,NavLink,Link} from 'react-router-dom';
import {Icon} from 'antd';

class IndexFloor extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return  <div className={''}>
            <Link component={}>品牌制造商直供 <Icon type={'right-circle-o'}></Icon></Link>
            {
                <div className={''}>
                    <div>
                        <p>ck制造商</p>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <img src={} alt=/>
                    </div>
                </div>
            }
        </div>
    }
};
export default withRouter(connect()(IndexFloor));