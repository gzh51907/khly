import React, { Component } from 'react';
import { HashRouter, BrowserRouter, withRouter, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom';

import AddUser from '@@/AddUser';
import AddGoods from '@@/AddGoods';
import Goods from '@@/Goods';
import User from '@@/User';
import './App.scss';
import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
// @withRouter
class App extends Component {
    state = {
        collapsed: false,
        Primary: '',
        SubTitle: ''
    };
    componentWillMount() {
        let user = localStorage.getItem("adminurl");
        if (user) {
            user = user.substr(2);
            user = user.substr(0, user.length - 1)

            if (user === 'goods') {

                this.setState({
                    Primary: '商品管理',
                    SubTitle: '商品信息',
                })
            }
            if (user === 'addgoods') {

                this.setState({
                    Primary: '商品管理',
                    SubTitle: '添加商品',
                })
            }
            if (user === 'user') {
                this.setState({
                    Primary: '用户管理',
                    SubTitle: '用户信息',
                })
            }
            if (user === 'adduser') {
                this.setState({
                    Primary: '用户管理',
                    SubTitle: '添加用户',
                })
            }
        }

    }
    componentDidMount() {
        this.props.history.listen(() => {
            let { history } = this.props;
            let url = history.location.pathname;
            localStorage.setItem('adminurl', JSON.stringify(url));
        })
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    GoGoods() {
        let { history } = this.props;
        history.push('/goods');
        this.setState({
            Primary: '商品管理',
            SubTitle: '商品信息',
        })
    }
    GoAddGoods() {
        let { history } = this.props;
        history.push('/addgoods');
        this.setState({
            Primary: '商品管理',
            SubTitle: '添加商品',
        })
    }
    GoUser() {
        let { history } = this.props;
        history.push('/user');
        this.setState({
            Primary: '用户管理',
            SubTitle: '用户信息',
        })
    }
    GoAddUser() {
        let { history } = this.props;
        history.push('/adduser');
        this.setState({
            Primary: '用户管理',
            SubTitle: '添加用户',
        })
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{ width: "100px", height: "64px" }}>

                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="shop" />
                                    <span>商品管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6" onClick={this.GoGoods.bind(this)}><Icon type="shopping" />商品信息</Menu.Item>
                            <Menu.Item key="8" onClick={this.GoAddGoods.bind(this)}><Icon type="skin" />添加商品</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>用户管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3" onClick={this.GoUser.bind(this)}><Icon type="team" />用户信息</Menu.Item>
                            <Menu.Item key="4" onClick={this.GoAddUser.bind(this)}><Icon type="user-add" />添加用户</Menu.Item>

                        </SubMenu>


                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#001529', padding: 0 }} >
                        <Row>
                            <Col span={20}></Col>
                            <Col span={4}>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    <Menu.Item key="1">用户名：admin</Menu.Item>
                                    <Menu.Item key="2">退出</Menu.Item>
                                </Menu>
                            </Col>
                        </Row>

                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>
                                {
                                    this.state.Primary
                                }
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.SubTitle}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <>
                                <Switch>
                                    <Route path="/adduser" component={AddUser} />
                                    <Route path="/addgoods" component={AddGoods} />
                                    <Route path="/user" component={User} />
                                    <Route path="/goods" component={Goods} />
                                    <Route path="/NotFound" render={() => <div><h1 style={{ textAlign: 'center' }}>404</h1></div>} />
                                    <Redirect from="/" to="/goods" exact />
                                    <Redirect from="*" to="/NotFound" />
                                </Switch>
                            </>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>【康辉旅游网】康辉旅行社_出境旅游|国内旅游线路推荐_签证办理_酒店|机票预定 ©2018 </Footer>
                </Layout>
            </Layout>

        )
    }
}

App = withRouter(App);

export default App;

