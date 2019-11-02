import React, { Component, } from 'react';

import '../sass/AddUser.scss'
import { message } from 'antd';
import Api from '../Api';
class AddUser extends Component {
    async AddUser() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        console.log(`账号：${username}密码${password}`)
        if (username && password) {
            console.log("非空")
            let { code } = await Api.post('/user/check', {
                username
            })
            if (code === 1) {
                let { code } = await Api.post("/user/reg", {
                    username,
                    password
                })
                if (code === 1) {
                    message.success('注册成功');
                    this.refs.username.value='';
                    this.refs.password.value='';
                } else {
                    message.warning('注册失败');
                }

            } else {
                message.warning('账号已存在');
            }
        } else {
            console.log("账号或密码不能为空")
        }
    }
    render() {
        return (
            <div className="AddUser">
                <div className="usertext">
                    <span className="userspan">账号：</span>
                    <input type="text" className="text" ref="username" />
                </div>
                <div className="usertext">
                    <span className="userspan">密码：</span>
                    <input type="password" className="text" ref="password" />
                </div>
                <div><input type="button" value="添加用户" className="btn" onClick={this.AddUser.bind(this)} /></div>
            </div>
        )
    }
}
export default AddUser;