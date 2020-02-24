import React, { Component } from 'react'

export default class ComponentB extends Component {
    render() {
        const style = { border: "1px solid white",backgroundColor: "darkgreen", color: "black", width: "400px"};
        return (
            <div style={style}>
                <h3>This is the Lazy Component B</h3>
            </div>
        )
    }
}
