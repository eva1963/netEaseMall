import React from 'react';
import {connect} from 'react-redux';

class Count extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="selNum">
                <i className="less"/>
                <div className="textWrap">
                    <input type="tel" defaultValue="1"/>
                </div>
                <i className="more"/>
            </div>
        )
    }
}


export default connect()(Count);
