import React from 'react';
import {BackTop, Icon} from 'antd';


class Totop extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <BackTop>
                <div className="ant-back-top-inner"><Icon type="up"/></div>
            </BackTop>
        )
    }
}


export default Totop;
