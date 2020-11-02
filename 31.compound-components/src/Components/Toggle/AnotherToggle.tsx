import React, { Component } from "react";

// STEP 6 - aggiungi props
interface IToggle {
    onToggle: (state: boolean) => void;
}

// STEP 7 - aggiungi interfacce dei Component interni
// STEP 12 - (maledetto Typescript!) tutti i membri diventao optional
interface IToggleOn {
    isActive?: boolean;
}
interface IToggleOff {
    isActive?: boolean;
}
interface IToggleButton {
    onToggle?: () => void;
}

// STEP 8 - Crea i Component interni
const On: React.FC<IToggleOn> = (props) => {
    return props.isActive ?
        (<div>{props.children}</div>) :
        null;
}

const Off: React.FC<IToggleOff> = (props) => {
    return props.isActive ?
        (<div>{props.children}</div>) :
        null;
}

const ToggleButton: React.FC<IToggleButton> = (props) => {
    return (<div>
        <button onClick={props.onToggle}>Toggle</button>
    </div>);
}

// STEP 3 - Crea classe
export default class Toggle extends Component<IToggle> {
    // STEP 5 - aggiungi i Component 'interni'
    // public static On: React.FC<IToggleOn>;
    // public static Off: React.FC<IToggleOff>;
    // public static ToggleButton: React.FC<IToggleButton>;

    // STEP 9 - assegna i Component interni
    public static On: React.FC<IToggleOn> = On;
    public static Off: React.FC<IToggleOff> = Off;
    public static ToggleButton: React.FC<IToggleButton> = ToggleButton;

    // STEP 10 - common state
    state = { toggleState: true };

    render() {
        // STEP 11 - React.Children.map + React.cloneElement
        const children = React.Children.map(this.props.children, (child: any) => {
            if(child.type.name === "On") {
                return React.cloneElement(child, { isActive: this.state.toggleState });
            }
            else if(child.type.name === "Off") {
                return React.cloneElement(child, { isActive: !this.state.toggleState });
            }
            else if(child.type.name === "ToggleButton") {
                return React.cloneElement(child, { onToggle: () => {
                    this.setState({ toggleState: !this.state.toggleState });
                    this.props.onToggle(this.state.toggleState);
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