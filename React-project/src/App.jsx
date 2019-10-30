import React, { Component } from 'react';
import { HashRouter, BrowserRouter, withRouter, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

// import Home from '@@/Home/Home';
// import Discover from '@@/Discover/Discover';
// import Cart from '@@/Cart/Cart';
// import Mine from '@@/Mine/Mine';
// import Goods from '@@/Goods/Goods';
import './App.scss';

@withRouter
class App extends Component {
    render() {
        return (
            <>
            App
                {/* <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/goods/:id" component={Goods} />
                    <Route path="/NotFound" render={() => <div><h1 style={{textAlign:'center'}}>404</h1></div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect from="*" to="/NotFound" />
                </Switch> */}
            </>
        )
    }
}

App = withRouter(App);

export default App;

