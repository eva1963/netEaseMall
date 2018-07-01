import React from 'react';
import {connect} from 'react-redux';

class Shopcart extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>Shopcart</div>
        )
    }
}


export default connect()(Shopcart);
