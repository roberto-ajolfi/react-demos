import React, { Component, RefObject } from 'react'

export default class CallbackRef extends Component {
    divElement: HTMLDivElement | null = null;

    boxStyle = { border: "1px solid orange", backgroundColor: "darkgreen", 
        padding: "5px", color: "blackj", width: "300px", margin: "5px" };

    constructor(props: any) {
        super(props);
      }

    toggle = (e:any) => {
        e.preventDefault();
        
        if(this.divElement) {
            this.divElement.style.backgroundColor = 
                this.divElement.style.backgroundColor == "orange" ? "darkgreen" : "orange";
        }
    }

    callBack = (element: HTMLDivElement) => {
        this.divElement = element;
    }

    render() {
        return (
            <div style={this.boxStyle} ref={this.callBack}>
                <span>[CALLBACK] Hello, World!</span><br />
                <button onClick={this.toggle}>Toggle</button>
            </div>
        )
    }
}
