/**
 * Created by Chef on 2017/9/14.
 */
import React, { Component } from "react"

import { picPathHead } from "../../conf/conf"

class ComponentList extends Component{
    render(){
        return(
            <div className="component-page">
                <div className = "component-title">
                    <img src={ picPathHead + "/index/components.svg"} alt=""/>
                    <p>
                      以下将展示ChefUI的组件
                    </p>
                </div>
                <div className = "component-container">
                </div>
            </div>
        )
    }
}

export default ComponentList