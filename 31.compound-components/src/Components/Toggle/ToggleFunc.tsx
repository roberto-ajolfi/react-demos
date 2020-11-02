import React, { useState } from 'react'

interface IToggleComposition {
    On: React.FC<IToggleOn>;
    Off: React.FC<IToggleOff>;
    Button: React.FC<IToggleButton>;
}

interface IToggle {
    onToggle: (on: boolean) => void;
}

const Toggle : React.FC<IToggle> & IToggleComposition = (props) => {
    const [on, setOn] = useState(true);
    const children = React.Children.map(props.children, (child: any) => {
        if(child.type.name === "On") {
            return React.cloneElement(child, { isActive: on });
        }
        else if(child.type.name === "Off") {
            return React.cloneElement(child, { isActive: !on });
        }
        else if(child.type.name === "Button") {
            return React.cloneElement(child, { onToggle: () => {
                setOn(!on);
                props.onToggle(on);
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

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

export default Toggle;