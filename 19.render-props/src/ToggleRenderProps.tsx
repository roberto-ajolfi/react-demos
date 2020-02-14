import React, { Component } from 'react'

export interface RenderData {
    on: boolean;
    toggle: () => void
}

export interface ToggleProps {
    render: (p: RenderData) => {};
}

export default class Toggle extends Component<ToggleProps> {
    state = {
        on: false,
    };

    toggle = () => {
        this.setState({on: !this.state.on});
    };

    render() {
        const { render } = this.props;
        return (
            <div>
                {/* {render()} */}  {/* Step 1 - render è una funzione! */}
                
                {/* {render('Hello Roby - Step 2')} */}  {/* Step 2 - render è una funzione! */}

                {/* Step 3 - Non facciamo più nulla qui!, fa tutto render() */}
                {render({
                    on: this.state.on,
                    toggle: this.toggle
                })}
            </div>
        )
    }
}
