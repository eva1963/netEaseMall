import React from 'react';
import {connect} from 'react-redux';
import {withRouter,NavLink,Link} from 'react-router-dom';
import {Icon,Tabs} from 'antd';

class NewProduct extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return  <div className={'newProduct'}>
            <p className={'seeMore'}>
                <Link to={''} component={}/>
                <Link href="" />
            </p>
            <div>

            </div>
        </div>
    }
};
export default withRouter(connect()(NewProduct));