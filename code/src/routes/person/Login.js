import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Form, Button, Input, Icon, Modal } from 'antd';
import md5 from 'blueimp-md5';

import { login } from '../../api/person';
import action from '../../store/action/index';

import NavTopCart from '../../component/NavTopCart';

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let { userName, userPass } = values;
                userPass = md5(userPass);
                let result = await login({
                    name: userName,
                    password: userPass
                });
                if (parseFloat(result.code) === 0) {
                    this.props.history.push('/person/info');
                    return;
                }
            }
        });
    }




    render() {
        const confirm = Modal.confirm;
        const { getFieldDecorator } = this.props.form;
        return <div>
            <NavTopCart />
            <div className='personLogin'>
                <div className='loginWrap'>
                    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
                </div>

                <div className='form'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {})(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" />)}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('userPass', {})(<Input prefix={<Icon type="lock" />} placeholder="请输入密码" type="password" />)}
                        </FormItem>

                        <div className='tips clearfix'>


                            <span className='leftTip' >遇到问题?</span>
                            <span className='rightTip'>使用密码验证登录</span>
                        </div>

                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </FormItem>

                    </Form>
                </div>

                <div className='loginfoot'>
                    <Link to='/person/register'>
                        <span>注册帐号</span>
                    </Link>
                    <i></i>
                </div>

            </div>
        </div>
    }
}
// export default connect()(Login);
export default withRouter(connect(null, { ...action.person })(Form.create()(Login)));