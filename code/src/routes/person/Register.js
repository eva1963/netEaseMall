import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import {Form, Input, Icon} from 'antd';
import md5 from 'blueimp-md5';

import action from '../../store/action/index';

import {checkInfo, register} from '../../api/person';

import NavTopCart from '../../component/NavTopCart';

import {utils} from '../../utils/utils'

const FormItem = Form.Item;

class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            confirm: 'frown-o',
            nameMsg: '',
            pwdMsg: '',
            pwdAgaMsg: '',
            phoneMsg: '',
            pwd:'',
            msgFla:false
        }
    }

    componentDidMount() {
        this.userName.focus();
    }

    render() {

        let {getFieldDecorator} = this.props.form;
        let {confirm, nameMsg, pwdMsg, pwdAgaMsg, phoneMsg} = this.state;
        return <div>
            <NavTopCart/>
            <div className='personRegister'>
                <div className='registerWrap'>
                    <span>帐号注册</span>
                </div>

                <div className='form'>
                    <form className="register-form">
                        <div className='formItem'>
                            <Input className='input-required' prefix={<Icon type="user"/>} placeholder="请输入用户名"
                                   ref={x => this.userName = x} onBlur={this.handleName} onKeyUp={this.checkNameForm}/>
                            <span className='checkMsg'>{nameMsg}</span>
                        </div>

                        <div className='formItem'>
                            <Input className='input-required' prefix={<Icon type="mobile"/>} placeholder="请输入手机号" ref={x => this.phone = x} onKeyUp={this.checkPhoneForm}/>
                            <span className='checkMsg'>{phoneMsg}</span>
                        </div>

                        <div className='formItem'>
                            <Input className='input-required' prefix={<Icon type="lock"/>} placeholder="请输入密码!" type="password" ref={x =>this.password = x} onKeyUp={this.handlePwd}/>
                            <span className='checkMsg'>{pwdMsg}</span>
                        </div>
                        <div className='formItem'>
                            <Input className='input-required' prefix={<Icon type={confirm}/>} placeholder="请输入确认密码!" ref={x => this.passwordAgain = x} type="password" onKeyUp={this.handleAgaPwd}/>
                            <span className='checkMsg'>{pwdAgaMsg}</span>
                        </div>

                        <Form.Item>
                            {getFieldDecorator('mail', {
                                rules: [{
                                    type: 'email', message: '邮箱格式不正确',
                                }],
                            })(<Input prefix={<Icon type="mail"/>} placeholder="请输入邮箱"/>)}
                        </Form.Item>

                        <input type="button" value='立即注册' onClick={this.handleSubmit}/>

                        <div className='agree'>
                            <label>我同意 <a href="javascript:;" onClick={utils.modalSuccess.bind(this, {
                                title: '服务条款',
                                content: '进了我们的网站，以后你就是我们的人了'
                            })}>《服务条款》</a>和<a href="javascript:;" onClick={utils.modalSuccess.bind(this, {
                                title: '隐私条款',
                                content: '都是我们的人了，还要什么隐私，天真~'
                            })}>《网易隐私政策》</a></label>
                        </div>
                    </form>
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

    checkNameForm = async ev => {
        let name = ev.target.value,
            reg = /^[a-zA-Z][a-zA-Z0-9_]{5,11}$/;
        if (name && name.trim()) {
            name = name.trim();
            if (!reg.test(name)) {
                this.setState({
                    nameMsg: '必须以字母开头，由5-11位字母、数字、下划线组成',
                    msgFla:false
                });
            } else {
                let result = await checkInfo({name});
                if (+result.code !== 0) {
                    this.setState({
                        nameMsg: '用户名已经被注册过了',
                        msgFla:false
                    });
                } else {
                    this.setState({
                        nameMsg: '',
                        msgFla:true
                    });
                }
            }
        } else {
            this.setState({
                nameMsg: '用户名必填',
                msgFla:false
            });
        }
    };
    checkPhoneForm = async ev => {
        let phone = ev.target.value,
            reg = /^1\d{10}$/;
        if (phone && phone.trim()) {
            phone = phone.trim();
            if (!reg.test(phone)) {
                this.setState({
                    phoneMsg: '必须以1开头的11位手机号',
                    msgFla:false
                });
            } else {
                let result = await checkInfo({phone});
                if (+result.code !== 0) {
                    this.setState({
                        phoneMsg: '手机号已经被注册过了',
                        msgFla:false
                    });
                } else {
                    this.setState({
                        phoneMsg: '',
                        msgFla:true
                    });
                }
            }
        } else {
            this.setState({
                phoneMsg: '手机号必填',
                msgFla:false
            });
        }
    };
    handlePwd = ev => {
        let pwd = ev.target.value,
            reg = /^[a-zA-Z0-9_]{6,12}$/;
        if (pwd && pwd.trim()) {
            pwd = pwd.trim();
            if (!reg.test(pwd)) {
                this.setState({
                    pwdMsg: '密码必须由6-12位字母数字下划线组成',
                    msgFla:false
                });
            }else{
                this.setState({
                    pwdMsg: '',
                    pwd,
                    msgFla:true
                });
            }
        } else {
            this.setState({
                pwdMsg: '密码必填',
                msgFla:false
            });
        }


    };
    handleAgaPwd = ev => {
        let oldVal = this.state.pwd,
            conVal = ev.target.value;
        if (oldVal && conVal && oldVal.trim() && conVal.trim()) {
            oldVal = oldVal.trim();
            conVal = conVal.trim();
            if (oldVal !== conVal) {
                this.setState({
                    pwdAgaMsg: '两次密码不一致',
                    confirm:'frown-o',
                    msgFla:false
                });
            }else{
                this.setState({
                    pwdAgaMsg: '',
                    confirm:'smile-o',
                    msgFla:true
                });
            }
        }else{
            this.setState({
                pwdAgaMsg: '验证密码必填',
                confirm:'frown-o',
                msgFla:false
            })
        }
    };

    handleSubmit = async () => {
        let payload = {};
        payload.name=this.userName.input.value;
        payload.phone = this.phone.input.value;
        payload.password = this.password.input.value;
        payload.passwordAgain = this.passwordAgain.input.value;
        if(payload.name && payload.phone && payload.password && payload.passwordAgain && this.state.msgFla){
            delete payload.passwordAgain;
            let result = await register(payload);
            if (+result.code === 0) {
                this.props.queryBaseInfo();
                this.props.history.push('/person/info');
                return;
            }
        }else{
            utils.modalError({
                title:'输入信息有误',
                misstime:1
            })
        }

    };
}

export default Form.create()(withRouter(connect(null, action.person)(Register)));