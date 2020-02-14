import React, { Component } from 'react'

/* export interface RenderData {
    on: boolean;
    toggle: () => void
} */

export interface ToggleProps {
    //render: (p: RenderData) => {};
    //children: (p: RenderData) => JSX.Element;   // esplicitare il tipo che ti aspetti !!!!!!!!! (cambia da ReactNode a funzione)
    children: (p: { on: boolean; toggle: () => void; }) => JSX.Element; // alternativo alla interfaccia
}

// ToggleRPC - Toggle Render Prop Children :)
export default class Toggle extends Component<ToggleProps> {
    state = {
        on: false,
    };

    toggle = () => {
        this.setState({on: !this.state.on});
    };

    render() {
        /* Step 1 - original */
        /* const { render } = this.props;
        return (
            <div>
                {render({
                    on: this.state.on,
                    toggle: this.toggle
                })}
            </div>
        ) */

        const { children } = this.props;

        return children({
            on: this.state.on,
            toggle: this.toggle
        });
    }
}
