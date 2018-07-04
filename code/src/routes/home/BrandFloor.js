import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import action from "../../store/action"

class BrandFloor extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
       let brandData =[
           {
               id: 1,
               name:'CK制造商',
               price:25,
               flag:'上新',
               pic: require('../../static/img/brand-1.png'),
           },{
               id: 10,
               name:'Kenneth Cole制造商',
               price:255,
               flag:'',
               pic: require('../../static/img/brand-2.png'),
           },{
               id: 20,
               flag:'上新',
               price:19,
               name:'Ralph Lauren制造商',
               pic: require('../../static/img/brand-3.png'),
           },{
               id: 30,
               name:'海外制造商',
               flag:'上新',
               price:9.9,
               pic: require('../../static/img/brand-4.png'),
           }
       ];

        return <div className={'brandFloor'}>
            <Link to="/Home" className={'brandNav'}>品牌制造商直销<Icon
                type={'right-circle-o'}/></Link>
            <ul className={'floorBox'}>
                {brandData.map((item, index) => {
                    let {name, pic, price,flag,id} = item;
                    return <li key={index} className={'listCard'}>
                        <Link to={`/prodetail?id=${id}`}>
                            <img src={pic} alt={name}/>
                            <div className="info">
                                <p>{name}</p>
                                <p>{price}起</p>
                                <p><span>{flag}</span></p>
                            </div>
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    }
};
export default connect(state => ({...state.home}), action.home)(BrandFloor);