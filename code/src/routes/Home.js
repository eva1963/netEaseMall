import React from 'react';
import {connect} from 'react-redux';
import NavTop from "../component/NavTop";
import NavClassify from "../component/NavClassify";
import NavBottom from "../component/NavBottom";

class Home extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <NavTop />
                <NavBottom/>
            </div>
        )
    }
}


export default connect()(Home);
