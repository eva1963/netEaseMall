import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink, Link} from 'react-router-dom';
import {Icon} from 'antd';
import action from "../../store/action"
import ProductDetail from "../ProductDetail"

class BrandFloor extends React.Component {
    constructor(props) {
        super(props);
        this.props.brandList()
    };

    render() {
        let {brandData} = this.props;
        if (!brandData.length) return '';

        return <div className={'brandFloor'}>
            <Link to="/Home" className={'brandNav'}>品牌制造商直销<Icon
                type={'right-circle-o'}/></Link>
            <ul className={'floorBox'}>
                {brandData.map((item, index) => {
                    console.log(item);
                    let {name, pic, price,} = item;
                    return <li key={index} className={'listCard'}>
                        <div className={'fl'}>
                            <p className={'brandTit'}>{name}</p>
                            <p>{price}</p>
                            <a href="javascript:;" className={'newBrand'}>上新</a>
                        </div>
                        <div className={'fr'}>
                            <img src={pic}/>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    }
};
export default withRouter(connect(state => ({...state.home}), action.home)(BrandFloor));