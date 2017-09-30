/**
 * Created by Chef on 2017/9/14.
 */

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Redirect, hashHistory, IndexRoute,browserHistory } from "react-router"
import App from "./containers/App"
import ComponentList from "./pages/componrntList/ComponentList"

import Slide from "./components/Slide/Slide"

import "./styles/normalized.scss"

ReactDOM.render((
        <Router history={ browserHistory }>
            <Redirect from="/" to="/chefUI" />
            <Route path="/chefUI" component={App}>
                <IndexRoute component={ComponentList} />
                <Route path="/chefUI/slide" component={Slide} />
            </Route>
        </Router>
    ), document.getElementById('app'));
