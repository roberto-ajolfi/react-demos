import React, { Component, RefObject } from 'react'

export default class SimpleRef extends Component {
    myRef: RefObject<HTMLDivElement>;

    boxStyle = { border: "1px solid red", backgroundColor: "lightgray", 
        padding: "5px", color: "darkred", width: "300px", margin: "5px" };

    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
      }

    toggle = (e:any) => {
        e.preventDefault();
        const node = this.myRef.current;

        if(node) {
            node.style.backgroundColor = 
                node.style.backgroundColor == "orange" ? "lightgray" : "orange";
        }
    }

    render() {
        return (
            <div style={this.boxStyle} ref={this.myRef}>
                <span>[SIMPLE] Hello, World!</span><br />
                <button onClick={this.toggle}>Toggle</button>
            </div>
        )
    }
}
