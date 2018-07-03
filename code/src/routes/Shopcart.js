import React from 'react';
import {connect} from 'react-redux';
import '../static/less/shopCart.less'


class Shopcart extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className='shopCartBox'>
                <div></div>
            </div>
        )
    }
}

export default connect()(Shopcart);
