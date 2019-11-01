import React, { Component } from 'react';
import '../sass/Form.scss';
import '../sass/base.css';
import { Menu, Icon, Tag, Badge, Radio } from 'antd';
const RadioGroup = Radio.Group;
class Form extends Component {
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        return (
            <div className="Form_content">
                <div className="Form_Header">
                    <a href="###" onClick={this.goto_back}>
                        <span className="Header_icon">
                            <Icon type="left" />
                        </span>
                    </a>
                    <a href="###">
                        <span className="Header_logo">
                            康辉旅游
                   </span>
                    </a>
                    <a href="###">
                        <span className="Header_r_icon Header_icon">
                            <Icon type="ellipsis" />
                        </span>
                    </a>
                </div>

                <div className="Form_title">
                    <h5>北京出发日本本州精华北京出发日本本州精华北京出发日本本州精华</h5>
                    <ul>
                        <li>套餐类型：<span>默认套餐</span></li>
                        <li>出发日期: <span>2019-11-23</span></li>
                        <li>购买数量：<span>成人X1</span></li>
                    </ul>
                </div>
                <div className="Form_userinfo">
                    <h4>联系人信息</h4>
                    <div className="users">
                        <label style={{ width: 60 }} htmlFor="username">姓名：
                        </label><input name="username" placeholder="* 请输入姓名" className="username userinfo" type="text" /><br />
                        <label htmlFor="psw">手机号：
                        </label><input name="psw" className="psw userinfo" placeholder="* 请输入手机号" type="text" /><br />
                        <label htmlFor="email">邮箱：
                        </label><input name="email" className="email userinfo" placeholder="* 请输入正确的邮箱" type="text" /><br />
                    </div>

                </div>
                <div className="Form_fapiao">
                    <p>发票信息</p>
                    <p>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio value={1} style={{ width: 120 }}>不需要</Radio>
                            <Radio value={2}>需要</Radio>

                        </RadioGroup>
                    </p>

                </div >

                <div className="Form_order">
                    <p className="order_price">应付金额
                         <Tag color="#fff" className="Sub" style={{ color: '#f50' }}>
                            ￥<i>6699.00</i>
                        </Tag>
                    </p>
                    <p className="order_submit">
                        <Tag color="#f50" className="Sub">提交订单</Tag>
                    </p>

                </div>

            </div >
        )
    }
}
export default Form;