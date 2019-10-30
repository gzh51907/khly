import React, { Component } from 'react';

import { Icon, } from 'antd';

import Api from '../Api'


import '../sass/base.css';
import '../sass/Login.scss';

class Login extends Component {
    login() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        if (username && password) {
            console.log('非空')
            let data = Api.post("/user/check",{
                username
            })
            
            console.log('后端返回',data)
        } else {
            console.log('账号或密码不能为空')
        }

    }
    retreat() {
        let { history } = this.props;
        history.go(-1);
    }
    goto() {
        let { history } = this.props;
        history.push('/reg');
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
                        <h1>登录</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="input-item">
                        <i className="input-icon">
                            <Icon type="user" />
                        </i>
                        <div className="mid">
                            <input type="text" placeholder="请输入账号" ref='username' />

                        </div>
                    </div>
                    <div className="input-item">
                        <i className="input-icon">
                            <Icon type="unlock" />
                        </i>
                        <div className="mid">
                            <input type="password" placeholder="请输入6-16位密码" ref='password' />
                        </div>
                    </div>
                    <div className="btn">
                        <button className="login-btn" onClick={this.login.bind(this)}>登录</button>
                    </div>
                    <div className="opr">
                        <span className="opr-reg" onClick={this.goto.bind(this)}>注册新用户</span><span className="forget-password">忘记密码？</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;