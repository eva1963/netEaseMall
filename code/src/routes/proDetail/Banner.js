import React from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';


class Banner extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    onChange = index => {
        this.setState({
            slideIndex: index + 1
        })
    };

    render(){
        return (
            <Carousel afterChanger={this.onChange} dots='false'>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}


export default connect()(Banner);
