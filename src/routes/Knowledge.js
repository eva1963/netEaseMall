import React from 'react';
import {connect} from 'react-redux';

class Knowledge extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>Knowledge</div>
        )
    }
}


export default connect()(Knowledge);
