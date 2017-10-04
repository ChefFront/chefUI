
import React,{ Component } from "react"
import ReactDOM from "react-dom"

import "./slide.scss"

class Slide extends Component{

    componentDidMount() {
        // const width = ReactDOM.get(this.container.getBoundingClientRect(), 'width');
        const dom = ReactDOM.findDOMNode(this.refs['sender-name']);
        console.log("$$$",dom.style)
    }

    render(){
        return(
            <div className = "slide-page" ref="sender-name" >

            </div>
        )
    }
}

export default Slide