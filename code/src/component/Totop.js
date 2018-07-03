import React from 'react';
import { BackTop,Icon } from 'antd';


class Totop extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="toTop">
                <BackTop>
                    <div className="ant-back-top-inner"><Icon type="up"/></div>
                </BackTop>
            </div>
        )
    }
}


export default Totop;
