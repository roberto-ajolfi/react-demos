import React, { Component, useState, useEffect } from 'react'
import measureTime from '../support';
import { longOp } from '../longOp';
import memoize from '../memoize';

const wrappedLongOp = memoize(longOp); 

interface LongOpWrappedProps {
    value: number;
}

export default class LongOpWrapped extends Component<LongOpWrappedProps>{

    constructor(props: LongOpWrappedProps) {
        super(props);
    }

    // const [wrappedLongOpMemoResult, setWrappedLongOpMemoResult] = useState(0);
    // const [wrappedLongOpMemoResultDuration, setWrappedLongOpMemoResultDuration] = useState(0);

    // useEffect(() => {
    //     if(props.value === 0)
    //         return;
    //     const [resultW, durationW] = measureTime(wrappedLongOp, props.value);
    //     setWrappedLongOpMemoResult(resultW);
    //     setWrappedLongOpMemoResultDuration(durationW);
    // }, [props.value]);

    render() {
        if(this.props.value === 0)
            return (<div>Wair for a value ...</div>);

        const [wrappedLongOpMemoResult, wrappedLongOpMemoResultDuration] = measureTime(wrappedLongOp, this.props.value);

        return (
            <div>wrappedLongOpMemo:&nbsp;{wrappedLongOpMemoResult}&nbsp;({wrappedLongOpMemoResultDuration} ms)</div>
        )
    }
}
