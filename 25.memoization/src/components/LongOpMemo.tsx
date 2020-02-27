import React, { Component, useState, useEffect } from 'react'
import measureTime from '../support';
import { longOpMemo } from '../longOp';

interface LongOpMemoProps {
    value: number;
}

export default class LongOpMemo extends Component<LongOpMemoProps> {

    constructor(props: LongOpMemoProps) {
        super(props);
    }

    render() {
        if(this.props.value === 0)
            return (<div>Wair for a value ...</div>);

        const [longOpMemoResult, longOpMemoResultDuration] = measureTime(longOpMemo, this.props.value);
        
        return (
            <div>longOpMemo:&nbsp;{longOpMemoResult}&nbsp;({longOpMemoResultDuration} ms)</div>
        )
    }
}
