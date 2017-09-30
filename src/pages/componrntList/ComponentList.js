/**
 * Created by Chef on 2017/9/14.
 */
import React, { Component } from "react"

import { picPathHead } from "../../conf/conf"

import FoldBox from "../../components/FoldBox/FoldBox"

import "./index.scss"

class ComponentList extends Component{
    constructor(){
        super();
        this.state={
            foldList:[
                {title:"容器组件",img:"/foldBox/container.png",itemList:[{name:"swiper",path:""}]},
                {title:"基础内容",img:"/foldBox/container.png",itemList:[{name:"swiper",path:""}]},
                {title:"基础内容",img:"/foldBox/container.png",itemList:[{name:"swiper",path:""}]}
            ],
            openNum:-1,

        };
    }
    changeState(num){
        this.setState({
            openNum:num
        })
    }

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
                    {
                        this.state.foldList.map((item,index)=>{
                            return(
                                <FoldBox info={item} key={`foldBox${index}`} handleFunc = {this.changeState.bind(this)} openNum ={this.state.openNum} index={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ComponentList