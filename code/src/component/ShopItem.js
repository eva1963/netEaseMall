import React from 'react'
import {Link} from 'react-router-dom'

export default class ShopItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {pic, id, name, price, flag, desc} = this.props.data;
        return <li>
            <Link to={`/prodetail?id=${id}`}>
                <img src={pic} alt={name}/>
                <h2 className={'name'}>{name}</h2>
                <p>{desc}</p>
                <p><span>&yen;{price}</span></p>
            </Link>

        </li>
    }
}