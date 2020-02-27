import React, { Component, RefObject } from 'react'

export default class ClassRef extends Component {
    myRef: RefObject<MyComponent>;

    boxStyle = { border: "1px solid red", backgroundColor: "navy", 
        padding: "5px", color: "white", width: "300px", margin: "5px" };

    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
      }

    toggle = (e:any) => {
        e.preventDefault();
        const node = this.myRef.current;

        if(node) {
            node.toggleText();
        }
    }

    render() {
        return (
            <div style={this.boxStyle} >
                <span>[CLASS] Hello, World!</span>
                <MyComponent ref={this.myRef} />
                <button onClick={this.toggle}>Toggle</button>
            </div>
        )
    }
}

export class MyComponent extends Component {
    state = { message: 'Here\'s my Component!' };

    toggleText = () => {
        this.setState((prevState: any) => { 
            return { message: prevState.message === 'Here\'s my Component!' ? 'And now ... change text!' : 'Here\'s my Component!'}
        });
    }

    render() {
        return(<div>{this.state.message}</div>);
    }
}
