import React, { Component, PureComponent } from 'react'
import measureTime from '../support';
import { longOp } from '../longOp';
import { render } from '@testing-library/react';

interface LongOpProps {
    value: number;
}

export default class LongOp extends Component<LongOpProps> {

    constructor(props: LongOpProps) {
        super(props);
    }

    render() {
        if(this.props.value === 0)
            return (<div>Wair for a value ...</div>);
            
        const [longOpResult, longOpResultDuration] = measureTime(longOp, this.props.value);

        return (
            <div>longOp:&nbsp;{longOpResult}&nbsp;({longOpResultDuration} ms)</div>
        )
    }
}