import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import {Form, Button, Input, Icon, Modal} from 'antd';
import md5 from 'blueimp-md5';

import action from '../../store/action/index';

import {register} from '../../api/person';

import NavTopCart from '../../component/NavTopCart';

const FormItem = Form.Item;


function success1() {
    Modal.success({
        title: '服务条款',
        content: '进了我们的网站，以后你就是我们的人了',
    });
}
function success2() {
    Modal.success({
        title: '隐私条款',
        content: '都是我们的人了，还要什么隐私，天真~',
    });
}

class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                values.password = md5(values.password);
                let result = await register(values);
                if (parseFloat(result.code) === 0) {
                    this.props.queryBaseInfo();
                    this.props.history.push('/person/info');
                    return;
                }
            }
        });

    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return <div>
            <NavTopCart />
            <div className='personRegister'>
                <div className='registerWrap'>
                    <span>帐号注册</span>
                </div>

                <div className='form'>
                    <Form className="register-form" onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('phone', {
                                rules: [
                                    {required: true, message: '请输入手机号'}
                                ]
                            })(<Input prefix={<Icon type="user"/>} placeholder="请输入手机号"/>)}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [
                                    {required: true, message: '请输入密码!'}
                                ]
                            })(<Input prefix={<Icon type="lock"/>} placeholder="请输入密码!" type="password"/>)}
                        </FormItem>

                        <FormItem>
                            <Button type="primary" htmlType="submit">注册</Button>
                        </FormItem>

                        <div className='agree'>
                            <label>我同意 <a href="javascript:;" onClick={success1}>《服务条款》</a>和<a href="javascript:;"
                                                                                               onClick={success2}>《网易隐私政策》</a></label>
                        </div>
                    </Form>
                </div>

                <div className='registerfoot'>
                    <Link to='/person/login'>
                        <span>登录帐号</span>
                    </Link>
                    <i></i>
                </div>

            </div>
        </div>


    }
}
// export default connect()(Register);
export default Form.create()(connect(null, action.person)(Register));