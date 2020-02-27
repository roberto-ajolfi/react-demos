import React, { Component } from 'react'

import measureTime from '../support';
import { factorial } from '../fact';

interface FactProps {
    value: number;
}

export default class Fact extends Component<FactProps, any> {

    constructor(props: FactProps) {
        super(props);
        this.state = { nbr: this.props.value, factorial: 0, duration: 0 };
    }

    static getDerivedStateFromProps(nextProp: FactProps, prevState: any) {
        const [result, duration] = measureTime(factorial, nextProp.value);
        return { 
            nbr: nextProp.value, 
            factorial: result, 
            duration
        };
    }

    render() {
        return (
            <div style={{ border: "1px solid red", padding: "5px", margin: "5px" }}>
                {this.state.nbr}!&nbsp;= &nbsp;<span>{this.state.factorial}</span><br />
                Time:&nbsp;<span>{this.state.duration}</span>
            </div>
        )
    }
}
