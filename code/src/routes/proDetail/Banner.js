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
        return (
            <Carousel afterChange={this.onchange} dots='false'>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}


export default connect(state => state.prodetail, action.prodetail)(Banner);
