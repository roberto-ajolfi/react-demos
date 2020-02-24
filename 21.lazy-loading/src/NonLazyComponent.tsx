import React, { Component } from 'react'

export default class NonLazyComponent extends Component {
    render() {
        const style = { border: "1px solid white", backgroundColor: "lightred", color: "red", width: "400px"};
        return (
            <div style={style}>
                <h3>This is Non Lazy Component</h3>
            </div>
        )
    }
}
