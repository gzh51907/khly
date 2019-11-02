import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';
import '@/sass/Mine.scss';

class Mine extends Component {
    state = {
        user: '',
        hover: false
    }
    componentDidMount() {
        let user = localStorage.getItem('username');
        user = JSON.parse(user);
        console.log(user)
        this.setState({
            user: user.username
        })
    }

    mouse_hover() {
        console.log('鼠标移入')
        this.setState({
            hover: true
        })
    }
    mouse_leave() {
        console.log('鼠标移出')
        this.setState({
            hover: false
        })
    }

    out(){
        let { history } = this.props;
        history.push('/home')
        localStorage.setItem('username',"")
    }

    render() {
        let { user } = this.state;
        return (
            <div>
                {
                    user ? <><Avatar
                    className={(this.state.hover?'myHover':'')}
                        onMouseEnter={this.mouse_hover.bind(this)}
                        onMouseLeave={this.mouse_leave.bind(this)}
                        src="../images/touxiang.png" />
                        <span style={{ fontSize: 16, margin: 10,marginLeft:20 }}>{user}</span>
                        <span style={{ color: 'red',cursor:'pointer' }} onClick={this.out.bind(this)}>退出</span>
                    </> : <p>请先登录</p>
                }
                <div className="cont">
                    <div className="m-wrapper">
                        <div className="mw-infos">
                            <ul className="mwi-info">
                                <li>
                                    <p style={{ color: '#009e9f' }}>999+</p>
                                    <p>收藏</p>
                                </li>
                                <li>
                                    <p style={{ color: '#009e9f' }}>10</p>
                                    <p>优惠券</p>
                                </li>
                                <li>
                                    <p style={{ color: '#009e9f' }}>10086</p>
                                    <p>积分</p>
                                </li>
                            </ul>
                            <div className="mwi-order">
                                <div className="mwi-title">
                                    <p className="mine-order">我的订单</p>
                                    <p className="look-all">查看全部</p>
                                </div>
                                <ul>
                                    <li className="order-list">
                                        <Icon type="dollar" />
                                        <p>待付款</p>
                                    </li>
                                    <li className="order-list">
                                        <Icon type="account-book" />
                                        <p>待发货</p>
                                    </li>
                                    <li className="order-list">
                                        <Icon type="car" />
                                        <p>待收货</p>
                                    </li>
                                    <li className="order-list">
                                        <Icon type="compass" />
                                        <p>待自提</p>
                                    </li>
                                    <li className="order-list">
                                        <Icon type="form" />
                                        <p>评价</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="mwi-server">
                                <div className="mine-tltle">
                                    <p className="mine-server">我的服务</p>
                                    <p className="teacher-guide">
                                        <i className="el-icon-plus"></i>
                                        客服咨询
                                    </p>
                                </div>
                                <ul>
                                    <li className="server-list address-manage">
                                        <Icon type="environment" />
                                        <p>地址管理</p>
                                    </li>
                                    <li className="server-list">
                                        <Icon type="snippets" />
                                        <p>电子发票</p>
                                    </li>
                                    <li className="server-list">
                                        <Icon type="share-alt" />
                                        <p>浏览记录</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mine;