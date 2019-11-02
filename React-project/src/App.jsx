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
<<<<<<< HEAD
                    <Route path="/order/:id" component={Order} />
                    <Route path="/form/:id" component={Form} />
                    <Route path="/NotFound" render={() => <div><h1 style={{ textAlign: 'center' }}>404</h1></div>} /> */}
=======
                    <Route path="/robit" component={Robit} />
                    <Route path="/order/:id" component={Order} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/NotFound" render={() => <div><h1 style={{ textAlign: 'center' }}>404</h1></div>} />
>>>>>>> a145269dd75ed173beb1f39a03577a427d2daede
                    <Redirect from="/" to="/home" exact />
                    <Redirect from="*" to="/NotFound" />

                </Switch>
            </>
        )
    }
}

App = withRouter(App);

export default App;

