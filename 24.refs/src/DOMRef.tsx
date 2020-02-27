import React, { Component, RefObject } from 'react'

export default class DOMRef extends Component {
    firstRef: RefObject<HTMLInputElement>;
    lastRef: RefObject<HTMLInputElement>;

    boxStyle = { border: "1px solid white", backgroundColor: "red", 
        padding: "5px", color: "black", width: "300px", margin: "5px" };

    constructor(props: any) {
        super(props);
        this.firstRef = React.createRef();
        this.lastRef = React.createRef();
      }

    toggle = (first: boolean) => {
        const nodeFirst = this.firstRef.current;
        const nodeLast = this.lastRef.current;

        if(nodeFirst && nodeLast) {
            first ? nodeFirst.focus() : nodeLast.focus();
        }
    }

    render() {
        return (
            <div style={this.boxStyle}>
                <span>[DOM] Hello, World!</span><br />
                <input type="text" placeholder="FirstName" ref={this.firstRef} />
                <input type="text" placeholder="LastName" ref={this.lastRef} /> <br />
                <button onClick={(e: any) => { e.preventDefault(); this.toggle(true)} }>Focus on FirstName</button>
                &nbsp;<button onClick={(e: any) => { e.preventDefault(); this.toggle(false)} }>Focus on LastName</button>
            </div>
        )
    }
}
