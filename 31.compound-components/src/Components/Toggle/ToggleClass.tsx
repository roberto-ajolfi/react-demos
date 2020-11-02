import React, { Component } from "react";

interface IToggleOn { 
    isActive?: boolean 
}
const On: React.FC<IToggleOn> = (props) => {
    return props.isActive ? (
        <div>
            {props.children}
        </div>
    ) : null;
}

interface IToggleOff { 
    isActive?: boolean
}
const Off: React.FC<IToggleOff> = (props) => {
    return props.isActive ? (
        <div>
            {props.children}
        </div>
    ) : null;
}

interface IToggleButton {
    onToggle?: () => void;
}
const Button: React.FC<IToggleButton> = (props) => {
    return (
        <div>
            <button onClick={props.onToggle}>Toggle</button>
        </div>
    );
}

interface IToggle {
    onToggle: (on: boolean) => void;
}

// interface IToggleComposition {
//     COn: React.FC<ICToggleOn>;
//     COff: React.FC<ICToggleOff>;
//     CButton: React.FC<ICToggleButton>;
// }

export default class CToggle extends Component<IToggle> {
    public static On: React.FC<IToggleOn> = On;
    public static Off: React.FC<IToggleOff> = Off;
    public static Button: React.FC<IToggleButton> = Button;

    state = { on: true };

    render() {
        const children = React.Children.map(this.props.children, (child: any) => {
            if(child.type.name === "On") {
                return React.cloneElement(child, { isActive: this.state.on });
            }
            else if(child.type.name === "Off") {
                return React.cloneElement(child, { isActive: !this.state.on });
            }
            else if(child.type.name === "Button") {
                return React.cloneElement(child, { onToggle: () => {
                    this.setState({ on: !this.state.on });
                    this.props.onToggle(this.state.on);
                }});
            }
            else
                return child;
        });
    
        return (
            <div>
                {children}
            </div>
        );
    }
}