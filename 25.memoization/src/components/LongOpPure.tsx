import React, { Component, PureComponent } from 'react'

export default class LongOpPure extends Component<{input: number}, any> {
    constructor(props: {input: number}) {
        super(props)
    }

    longOp = (input : number) => {
        // simulating expensive operation
        console.log('starting ...')
        var now = Date.now()
        var end = now + 1000
        while (now < end) {
            now = Date.now()
        }
        console.log('... stopping')

        return input * 90
    }

    handleInput = (evt: any) => {
        console.log('handling input', evt)
        this.setState({ input: evt.target.value })
    }

    render() {
        console.log('Rendering with value = ' + this.props.input)

        return ( 
            <div>
                <h2> { this.longOp(this.props.input) } </h2> 
            </div>
        )
    }
}
