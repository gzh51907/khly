import React, { Component } from 'react';
import { HashRouter, BrowserRouter, withRouter, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import Home from '@@/Home';
// import Discover from '@@/Discover/Discover';
import Reg from '@@/Reg';
import Login from '@@/Login';
import Goods from '@@/Goods';
import List from '@@/List';
import Mine from '@@/Mine';
import Order from '@@/Order';
import Robit from '@@/Robit';
import SearchGoods from '@@/SearchGoods';
import Form from '@@/Form';
import './App.scss';

// @withRouter
class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Route path="/list" component={List} />
                    <Route path="/search" component={SearchGoods} />
                    <Route path="/search/:title" component={SearchGoods} />
                    <Route path="/goods/:id" component={Goods} />
                    <Route path="/robit" component={Robit} />
                    <Route path="/form/:id" component={Form} />
                    <Route path="/order/:id" component={Order} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/NotFound" render={() => <div><h1 style={{ textAlign: 'center' }}>404</h1></div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect from="*" to="/NotFound" />

                </Switch>
            </>
        )
    }
}

App = withRouter(App);

export default App;

