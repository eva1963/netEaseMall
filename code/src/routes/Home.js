import React from 'react';
import {connect} from 'react-redux';
import NavTop from "../component/NavTop";
import NavClassify from "../component/NavClassify";
import IndexFloor from "./home/indexFloor";
import NavBottom from "../component/NavBottom";

class Home extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <NavTop />
                <NavClassify classifyIndex={0}/>
                <IndexFloor/>
                <NavBottom/>
            </div>
        )
    }
}


export default connect()(Home);
