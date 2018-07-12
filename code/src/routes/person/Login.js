import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import {Form, Button, Input, Icon, Modal} from 'antd';
import md5 from 'blueimp-md5';

import {checkLogin, login} from '../../api/person';
import action from '../../store/action/index';

import NavTopCart from '../../component/NavTopCart';
import qs from 'qs'
import {utils} from '../../utils/utils'

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin: false
        }
    }

    async componentWillMount() {
        this._isMounted = true;
        let result = await checkLogin();
        if(this._isMounted){
            this.setState({
                isLogin: parseFloat(result.code) === 0 ? true : false
            });
        }


    }

    /*componentDidMount(){
        this.userName.focus();
    }*/
    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        if (this.state.isLogin) {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                this.props.history.push('/person/info');
            });
        }
        const {getFieldDecorator} = this.props.form;
        return (<div>
            <NavTopCart/>
            <div className='personLogin'>
                <div className='loginWrap'>
                    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                </div>

                <div className='form'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {rules: [{required: true, message: '用户名必填'}]})(<Input
                                prefix={<Icon type="user"/>} placeholder="请输入用户名或手机号或邮箱"
                                onBlur={this.handleVale.bind(this, 'userName')} ref={x => this.userName = x}/>)}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('userPass', {rules: [{required: true, message: '密码必填'}]})(<Input
                                prefix={<Icon type="lock"/>} placeholder="请输入密码" type="password"
                                onBlur={this.handleVale.bind(this, 'userPass')}/>)}
                        </FormItem>

                        <div className='tips clearfix'>
                            <span className='leftTip' onClick={() => {
                                utils.modalSuccess({
                                    title: '亲爱的',
                                    content: '哎哟，遇到问题啦，我也不知道咋解决，你自己再看看'
                                })
                            }}>遇到问题?</span>
                            <span className='rightTip' onClick={() => {
                                utils.modalSuccess({
                                    title: '亲爱的',
                                    content: '我们现在还没有别的验证方式呢，将就着用吧',

                                })
                            }}>使用密码验证登录</span>
                        </div>

                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </FormItem>

                    </Form>
                </div>

                <div className='loginfoot'>
                    <Link to='/person/register'>
                        <span>还没有账号？立即注册</span>
                    </Link>
                    <i></i>
                </div>

            </div>
        </div>)
    }

    handleVale = (input) => {
        let {getFieldValue, validateFields} = this.props.form;
        let name = getFieldValue(input);
        validateFields([input], {force: true});
    };

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let {userName, userPass} = values;
                let result = await login({
                    name: userName,
                    password: md5(userPass)
                });
                if (+result.code === 0) {
                    this.props.history.push('/person/info');
                    return;
                } else {
                    Modal.error({
                        title: '登录失败',
                        content: '请确认账号密码是否正确',
                    });
                }
            }
        });
    }
}

// export default connect()(Login);
export default withRouter(Form.create()(connect(null, action.person)(Login)));