import React from 'react';
import {connect} from 'react-redux';
import Count from '../../component/Count';
import ToBuy from '../../component/ToBuy';

import '../../static/less/params.less';
import action from '../../store/action';

class Params extends React.Component {
    componentDidMount() {
        this.props.queryGoods();
    }

    render() {
        let proId = 1;
        let {goodsList} = this.props,
            item = goodsList.find(item => item.id === proId);
        if (!item) return '';

        return (
            <div className="paramsList">
                <div className="info-con">
                    <div className="left">
                        <img src={item.pic} alt=""/>
                    </div>
                    <div className="right">
                        <div className="con">
                            <div className="price">价格：￥{item.price}</div>
                            <div className="sku">
                                已选择：{this.props.productInfo.color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spec-con">
                    <div className="box">
                        <div className="tt">颜色</div>
                        <ul className="con" ref={x => this.ul = x} onClick={this.chooseColor}>
                            <li className="tab">浅灰色</li>
                            <li className="tab">灰色</li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="tt">数量</div>
                        <div className="con">
                            <Count/>
                        </div>
                    </div>
                </div>
                <ToBuy toBack={false}/>
            </div>
        )
    }

    chooseColor = ev => {
        let target = ev.target,
            tarTag = target.tagName;
        if (tarTag === 'LI') {
            [].forEach.call(target.parentElement.children, item => {
                item.className = 'tab';
            });
            let color = target.innerHTML;
            target.className += ' active';
            this.props.setProductCommercial({
                color,
            })
        }
    }
}


export default connect(state => ({...state.prodetail}), {...action.prodetail})(Params);
