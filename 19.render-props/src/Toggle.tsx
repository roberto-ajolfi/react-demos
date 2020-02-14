import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        on: false,
    };

    toggle = () => {
        this.setState({on: !this.state.on});
    };

    render() {
        return (
            <div>
                {/* Step 1 */}
                {/* {this.state.on && <h1>Toggle me!</h1> }  */}

                {/* Step 2 - more flexible, issues: avremo sempre quello passato in children più il bottone */}
                {this.state.on && this.props.children}

                <button onClick={this.toggle}>Show / Hide</button>
            </div>
        )
    }
}
