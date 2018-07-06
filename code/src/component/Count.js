import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action';
import Notifications, {notify} from 'react-notify-toast';

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

                <Notifications/>
                <i className="less" onClick={this.lessGoods}/>
                <div className="textWrap">
                    <input ref={x => this.input = x}
                           type="tel"
                           value={this.state.count}
                    />
                </div>
                <i className="more" onClick={this.addGoods}/>
            </div>
        )
    }

    lessGoods = ev => {
        if(this.state.count <= 1) {
            notify.show('已经最少啦', 'custom', 2000, {
                background: 'rgba(0,0,0,.8)',
                text: "#fff",
            });
            return;
        }
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
