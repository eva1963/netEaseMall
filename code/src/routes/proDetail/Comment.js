import React from 'react';
import {connect} from 'react-redux';
import {Icon, Avatar, Rate} from 'antd';

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {item} = this.props;
        return (
            <div className="comment">
            <header>
                <Avatar icon="user" style={{marginRight: '.3rem'}}/>
                <div className="name">{item.frontUserName}</div>
                <div className="commentRate"><Rate disabled defaultValue={item.star}/></div>
            </header>
            <div className="extraInfo">
                <span className="time">2018-06-22 09:51:54</span>
                <p className="skus">{item.skuInfo[0]}</p>
            </div>
            <div className="text">
                <p>{item.content}</p>
            </div>

                <div className="commentPics">
                    <ul>
                        {
                            item.picList && item.picList.length !== 0 ? (
                                item.picList.map((item,index)=>{
                                    return <li key={index}><img src={item} alt=""/></li>
                                })
                            ) : ''
                        }
                    </ul>
                </div>
        </div>
        )
    }
}


export default connect()(Comment);
