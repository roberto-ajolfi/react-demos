import React, { Component } from 'react'

export interface InfoProps {
    hover: boolean;
}

export default class Info extends Component<InfoProps> {
    render() {
        const { hover } = this.props;

        return (
            <div style={{position: "relative", backgroundColor: "lightred", width: 300, border: "1px solid red"}}>
                These are infos.
                {hover && <div style={{
                    position: "absolute", 
                    top: "-30px",
                    right: "30px",
                    width: 100, 
                    backgroundColor: "orange",
                    zIndex: 1000, 
                    border: "2px solid red"
                    }}>And here's my Tooltip</div>}
            </div> 
        )
    }
}
