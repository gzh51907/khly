import React, { Component } from 'react';


import { Icon, Checkbox, message } from 'antd';

import '../sass/base.css';
import '../sass/Reg.scss';
import Api from '../Api'

class Reg extends Component {
    state = {
        checked: false,
        usernamekey: 0,
        passwordkey: 0
    }
    onChange = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    async VerifyUsername() {
        let username = this.refs.username.value;
        let { code } = await Api.post("/user/check", {
            username,
        })
        if (code === 1) {
            this.setState({
                usernamekey: code
            })
        } else {
            message.warning('账号已被注册');
            this.setState({
                usernamekey: code
            })

        }
    }
    VerifyPassword() {
        let password = this.refs.password.value;
        let patt = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,16}$/;
        var res = patt.test(password);
        if (res) {
            this.setState({
                passwordkey: 1
            })
        } else {
            this.setState({
                passwordkey: 0
            })
            message.warning('密码强度不符合');
        }
    }
    async Reg() {


        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let pass = this.refs.pass.value;
        let { checked, usernamekey, passwordkey } = this.state;

        // console.log("协议勾选：", checked, "用户是否存在", usernamekey, "密码强度", passwordkey)
        // console.log(`账号：${username},密码：${password},再次输入密码：${pass}`)

        if (!username) {
            message.warning('账号不能为空');
        } else if (!password) {
            message.warning('密码不能为空');
        } else if (!pass) {
            message.warning('再次输入密码不能为空');
        } else if (password != pass) {
            message.warning('两次密码不同，请重新输入');
        } else if (checked === false) {
            message.warning('请勾选协议');
        } else if (usernamekey === 0) {
            message.warning('账号已被注册');
        } else if (passwordkey === 0) {
            message.warning('密码强度不符合');
        } else {
            let { code } = await Api.post("/user/reg", {
                username,
                password
            })
            console.log("点击注册后端返回数据：", code)
            if (code === 1) {
                message.success('注册成功')
                let { history } = this.props;
                setTimeout(() => {
                    this.refs.username.value = '';
                    this.refs.password.value = '';
                    this.refs.pass.value = '';
                    history.push('/login');
                }, 2000);
            } else {
                message.warning('注册失败');
            }
        }


    }
    retreat() {
        let { history } = this.props;
        history.go(-1);
    }
    render() {
        return (
            <div>
                <div className="header">
                    <span className="header-l" onClick={this.retreat.bind(this)}>
                        <Icon type="left" className="header-icon" />
                    </span>
                    <div className="header-c">
                        <i></i>
                        <h1>注册</h1>
                    </div>
                </div>

                <div className="content">
                    <div className="input-item">
                        <i className="input-icon">
                            <Icon type="user" />
                        </i>
                        <div className="mid">
                            <input type="text" placeholder="请输入账号" ref='username' onBlur={this.VerifyUsername.bind(this)} />

                        </div>
                    </div>
                    <div className="input-item">
                        <i className="input-icon">
                            <Icon type="unlock" />
                        </i>
                        <div className="mid">
                            <input type="password" placeholder="请输入6-16位包含字母、数字的密码" ref='password' onBlur={this.VerifyPassword.bind(this)} />
                        </div>
                    </div>
                    <div className="input-item">
                        <i className="input-icon">
                            <Icon type="unlock" />
                        </i>
                        <div className="mid">
                            <input type="password" placeholder="请再次输入密码" ref="pass" />
                        </div>
                    </div>
                    <div className="agreement">
                        <div className="check-area">
                            <i><Checkbox className="checkbox" onChange={this.onChange}></Checkbox></i>
                            <span>
                                我已阅读并同意
                            </span>
                        </div>
                        <span className="xieyi">
                            《康辉旅游用户协议》
                        </span>
                    </div>
                    <div className="btn">
                        <button className="login-btn" onClick={this.Reg.bind(this)}>注册</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default Reg;