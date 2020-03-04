import React, { Component } from 'react'

export default class Hello extends Component<{name?: string}> {
    render() {
        if (this.props.name) {
            return <h1>Hello, {this.props.name}!</h1>;
        } else {
            return <span>Hey, straniero</span>;
        }
    }
}
