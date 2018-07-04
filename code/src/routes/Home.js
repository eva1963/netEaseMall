import React from 'react';
import {connect} from 'react-redux';
import NavTop from "../component/NavTop";
import NavClassify from "../component/NavClassify";
import BrandFloor from "./home/brandFloor";
import NavBottom from "../component/NavBottom";
/*css*/
import "../static/less/home.less"

class Home extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <NavTop />
                <NavClassify classifyIndex={0} />
                <BrandFloor/>
                <NavBottom/>
            </div>
        )
    }
}


export default connect()(Home);
