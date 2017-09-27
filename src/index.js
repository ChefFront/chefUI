/**
 * Created by Chef on 2017/9/14.
 */

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Redirect, hashHistory } from "react-router"
import App from "./containers/App"
import ComponentList from "./pages/componrntList/ComponentList"

import "./styles/normalized.scss"

ReactDOM.render((
        <Router history={hashHistory}>
            <Redirect from="/" to="/chefUI" />
            <Route path="/" component={App}>
                <Route path="chefUI" component={ComponentList} />
            </Route>
        </Router>
    ), document.getElementById('app'));
