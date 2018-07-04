import React from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';
import Qs from 'qs';

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            goodsData: []
        };
        let {search} = this.props.location;
        this.search = Qs.parse(search.substr(1));
    }

    async componentWillMount() {
        let goodsData = this.props.goodsData.length === 0 ? [] : this.props.goodsData;
        if (this.props.goodsData.length === 0) {
            await this.props.queryInfo({type: 'all'});
            goodsData = this.props.goodsData;
        }
        this.setState({
            goodsData: goodsData
        })

    }
    render() {
        let {goodsData} = this.state;
        if(goodsData===0) return '';

        let search = this.search;
        let result = [];
        goodsData.forEach(item => {
            let {type, category} = item;
            if (type === search.type && category === search.category) {
                result.push(item);
            }
        });
        result.length===0?this.props.history.push('/classify'):null;
        return <div className={'classifyDetail_box'}>
            <div className={'classifyDetail_nav'}>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className={'classifyDetail_info'}>
                <ul className={'clearfix'}>

                        {
                            result.map((item,index) => {
                                let {pic,desc,name,flag,price}=item;
                                return <li key={index}>
                                    {/*http://yanxuan.nosdn.127.net/ca08ce64a38254146778f38f0be06f1b.jpg?imageView&quality=65&thumbnail=330x330*/}
                                    <img
                                        src={pic}
                                        alt=""/>
                                    <div className={'classifyDet_dec'}>
                                        {desc}
                                    </div>

                                    <div className={'classifyDet_name'}>
                                        <span> {name}</span>
                                    </div>
                                    <div className={'classifyPrice'}>
                                <span>
                                    ￥{price}
                                </span>
                                    </div>
                                </li>
                            })
                        }




                </ul>
            </div>

        </div>;
    }
}

export default connect(state => ({...state.classify}), action.classify)(Detail);