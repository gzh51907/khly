import React, { Component } from 'react';


import { Icon, Checkbox } from 'antd';

import '../sass/base.css';
import '../sass/Reg.scss';


class Reg extends Component {
    retreat(){
        let {history} = this.props;
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
                            <input type="text" placeholder="请输入账号" />

                        </div>
                    </div>
                    <div className="input-item">
                        <i className="input-icon">
                            <Icon type="unlock" />
                        </i>
                        <div className="mid">
                            <input type="password" placeholder="请输入6-16位密码" />
                        </div>
                    </div>
                    <div className="input-item">
                        <i className="input-icon">
                            <Icon type="unlock" />
                        </i>
                        <div className="mid">
                            <input type="password" placeholder="请再次输入密码" />
                        </div>
                    </div>
                    <div className="agreement">
                        <div className="check-area">
                            <i><Checkbox className="checkbox" ></Checkbox></i>
                            <span>
                                我已阅读并同意
                            </span>
                        </div>
                        <span className="xieyi">
                            《康辉旅游用户协议》
                        </span>
                    </div>
                    <div className="btn">
                        <button className="login-btn">注册</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default Reg;