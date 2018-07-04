import React from 'react';
import {connect} from 'react-redux';
import {Rate} from 'antd';

import action from '../../store/action';
import NavTopCart from  '../../component/NavTopCart';

import '../../static/less/commentList.less';
import Comment from './Comment';

class CommentPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.status = {
            commentList:[]
        }
    }

    componentWillMount() {
        this.props.queryCommentList();
    }

    render() {
        let {commentList} = this.props;
        let taglist = [{
            name: '全部',
            count: 188
        }, {
            name: '有图',
            count: 1
        }, {
            name: '追评',
            count: 4
        }, {
            name: '有效实用',
            count: 9
        }, {
            name: '质量上乘',
            count: 5
        }, {
            name: '很舒服',
            count: 8
        }, {
            name: '做工精良',
            count: 18
        }];
        return (
            <div className="commentListBox">
                <NavTopCart/>
                <div className="commentsRate">
                    <span>评分</span>
                    <Rate disabled defaultValue={5}/>
                    <span className="goodCmtRate">99.9%好评</span>
                </div>
                <ul className="tagList">
                    {
                        taglist.map((item,index) => {
                            return <li key={index} className={index === 0 ? 'active':''}>{item.name}({item.count})</li>
                        })
                    }

                </ul>
                <div className="commentList">

                        {commentList && commentList.length !== 0 ?commentList.map((item,index)=>{
                            return <div className="item" key={index}><Comment  item={item}/></div>
                        }): ''}
                </div>

            </div>
        )
    }
}


export default connect(state=>state.prodetail,action.prodetail)(CommentPage);
