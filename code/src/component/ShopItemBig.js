import React from 'react'
import {Link} from 'react-router-dom'

export default class ShopItemBig extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {pic, id, name, price, flag, desc} = this.props.data;
        return <li>
            <Link to={`/prodetail?id=${id}`}>
                <img src={pic} alt={name}/>
                <div className={'desc'}>{desc}</div>
                <div className="info">
                    <h2 className={'name'}>{name}</h2>
                    <p>&yen;{price}</p>
                </div>
            </Link>

        </li>
    }
}