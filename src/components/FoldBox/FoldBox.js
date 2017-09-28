/**
 * Created by Chef.
 */

import React from "react"
import { browserHistory } from "react-router"
import { picPathHead } from "../../conf/conf"

import "./index.scss"

class FoldItem extends React.Component{

    changePage(path){
        browserHistory.push({path:path})
    }
    render(){
        const { data } = this.props;
        return(
            <div className = "fold-item">
                <a href="javascript:void(0)" className="fold-item-content" onClick={this.changePage.bind(this,data.path)}>
                    {data.name}
                </a>
            </div>
        )
    }
}


 class FoldBox extends React.Component{
    constructor(){
        super();
        this.state={
            flag:false
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState(){
        this.setState((prevState, props)=>({
            flag:!prevState.flag
        }))
    }

    render(){
        const { info } = this.props;
        const height = info.itemList.length*1.2+"rem";
        return(
            <div className = "fold-box" onClick={this.changeState}>
                <div className={this.state.flag ? "fold-title open" :"fold-title"}>
                    <p className="fold-name">{info.title}</p>
                    <img src={ picPathHead + info.img} alt=""/>
                </div>
                <div className= "fold-container" style={{height:this.state.flag ? `${height}`:"0"}}>
                    {
                        info.itemList.map((item,i)=>{
                            return(
                                <FoldItem  data = { item } key={`item${i}`}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default FoldBox