/**
 * Created by ThinkPad on 2017/10/5.
 */


import React,{ Component } from "react"
import Slide from "../../components/Slide/Slide"
import { picPathHead } from "../../conf/conf"

import "./index.scss"

class SlidePage extends Component{
    constructor(){
        super();
        this.state = ({
            slideList:[
                {url:"",img:`${picPathHead}/slide/banner1.png`},
                {url:"",img:`${picPathHead}/slide/banner2.png`},
                {url:"",img:`${picPathHead}/slide/banner3.png`},
            ]
        })

    }

    componentDidMount() {
    }

    render(){
        return(
            <div className = "slide-page" >
                <Slide >
                    {

                    }
                </Slide>
            </div>
        )
    }
}

export default SlidePage