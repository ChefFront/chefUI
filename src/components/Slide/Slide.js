
import React,{ Component } from "react"
import ReactDOM from "react-dom"

import "./slide.scss"

class Slide extends Component{
    constructor(){
        super();
        this.state = ({
            currentIndex:0
        })
    }

    componentDidMount() {
        const endStyle = document.defaultView.getComputedStyle(ReactDOM.findDOMNode(this.refs['slide-page']),null);
        console.log("$$$",endStyle.width)
    }

    render(){
        return(
            <div className = "slide-page" ref="slide-page" >

            </div>
        )
    }
}

export default Slide