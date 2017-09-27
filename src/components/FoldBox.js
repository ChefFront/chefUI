/**
 * Created by Chef.
 */

import React from "react"
import { browserHistory } from "react-router"
import { picPathHead } from "../conf/conf"

class FoldItem extends React.Component{

    changePage(path){
        browserHistory.push({path:path})
    }
    render(){
        return(
            <div className = "fold-item">
                <a href="javascript:void(0)" className="fold-item-content" onClick={this.changePage.bind(this,this.props.path)}>
                    {this.props.name}
                </a>
            </div>
        )
    }
}


 class FoldBox extends React.Component{
    render(){
        return(
            <div className = "fold-box">
                <div className="fold-title">
                    <p className="fold-name">容器组件</p>
                    <img src={ picPathHead + "/foldBox/container.png"} alt=""/>
                </div>
                <FoldItem />
            </div>
        )
    }
}

export default FoldBox