import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action';

class Count extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            count: 1
        }
    }

    render() {
        return (
            <div className="selNum">
                <i className="less" onClick={this.lessGoods}/>
                <div className="textWrap">
                    <input ref={x => this.input = x}
                           type="tel"
                           value={this.state.count}
                           onChange={() => {
                           }}
                    />
                </div>
                <i className="more" onClick={this.addGoods}/>
            </div>
        )
    }

    lessGoods = ev => {
        this.setState({
            count: --this.state.count
        });
        this.props.setProductCommercial({
            count: this.state.count
        })
    };
    addGoods = ev => {
        this.setState({
            count: ++this.state.count
        });
        this.props.setProductCommercial({
            count: this.state.count
        })
    }
}


export default connect(null, action.prodetail)(Count);
