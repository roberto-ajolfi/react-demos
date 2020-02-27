import React, { Component } from 'react'

import measureTime from '../support';
import { memoFactorial } from '../memoFact';

export default class MemoFact extends Component<{value: number}, any> {

    constructor(props: {value: number}) {
        super(props);
        this.state = { nbr: this.props.value, factorial: 0, duration: 0 };
    }

    handleChange = (e: any) => {
        this.setState({ nbr: e.target.value as number })
    }

    calculateFact = () => {
        const [ result, duration ]= measureTime(memoFactorial, this.state.nbr);

        this.setState({factorial: result, duration });
    };

    render() {
        return (
            <div style={{ border: "1px solid white", padding: "5px", margin: "5px" }}>
                {this.state.nbr}!&nbsp;= &nbsp;<span>{this.state.factorial}</span><br />
                Time:&nbsp;<span>{this.state.duration}</span>
            </div>
        )
    }
}
