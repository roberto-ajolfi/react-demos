import React, { Component } from 'react'

export default class ComponentA extends Component {
    render() {
        const style = { border: "1px solid white",backgroundColor: "darkgray", color: "red", width: "400px"};
        return (
            <div style={style}>
                <h3>This is the Lazy Component A</h3>
            </div>
        )
    }
}
