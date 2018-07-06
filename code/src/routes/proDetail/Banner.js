import React from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';
import action from '../../store/action';


class Banner extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    onchange = index => {
        this.props.updateIndex(index+1);
    };

    render() {
        let {dataList} = this.props;
        return (
            <Carousel afterChange={this.onchange} dots='false'>
                {
                    dataList.map((item,index)=>{
                        return (
                            <div key={index}><img src={item}/></div>
                        )
                    })
                }
            </Carousel>
        )
    }
}


export default connect(state => state.prodetail, action.prodetail)(Banner);
