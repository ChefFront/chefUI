/**
 * Created by Chef on 2017/9/14.
 */

import React, { Component }from "react"

import "./App.scss"

export default class App extends Component{
    render(){
        return(
            <div className = "page-container">
                {this.props.children}
            </div>
        )
    }
}
