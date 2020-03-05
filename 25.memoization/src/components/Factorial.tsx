import React, { Component } from 'react';
import memoize from '../memoize';
import { factorialR } from '../fact';

const memoFactorialR = memoize(factorialR);

interface FactResult {
    result: number; 
    message: string;
}

export default class Factorial extends Component {
    state = { number: 0, results: [] as FactResult[] };

    handleInput = (e: any) => {
        this.setState({ number: Number(e.target.value) });
    }

    handleCalculate = () => {
        const { result, message } = memoFactorialR(this.state.number);
        let newResults = [...this.state.results, { result, message }];

        this.setState({ results: newResults });
    }

    render() {
        const { number, results } = this.state;

        return (<>
            <h1>Factorial</h1>
            <input type="text" value={number} onChange={this.handleInput} />&nbsp;
            <button onClick={this.handleCalculate}>Calculate</button>
            <ul style={{ listStyle: 'none' }}>
                {results.map((item, index) => <li key={index}>{item.result} [{item.message}]</li>)}
            </ul>
        </>
        );
    }
}