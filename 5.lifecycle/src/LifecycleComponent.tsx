import React, { Component } from 'react'

export default class LifecycleComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { company: 'iCubed' };
    }

    toggleCompany = () => {
        const newValue = this.state.company == 'iCubed' ? 'ZeusLab' : 'iCubed';
        this.setState((prevState: any) => {
            return {company: newValue };
        });
    }
    
    render() {
        return (
            <div>
                <h2>Hello {this.props.name} from {this.state.company}.<br/>
                Please, check the Console in the Development Tools (F12)</h2>
                <button onClick={this.toggleCompany}>Switch Company</button>
            </div>
        )
    }

    componentWillMount() {
        console.log("[componentWillMount] l’istanza di un componente sta per essere agganciata o ridisegnata.");
    }

    componentDidMount() {
        console.log("[componentDidMount] l’istanza di un componente è stata agganciata o ridisegnata.");
    }

    componentWillUnmount() {
        console.log("[componentWillUnmount] l'istanza di un component sta per essere sganciata o rimossa.");
    }

    componentWillReceiveProps(nextProps: any) {
        console.log(
            "[componentWillReceiveProps] l'istanza di un component sta per" + 
            " ricevere un aggiornamento delle props => " +
            nextProps.name
        );
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log(
            "[shouldComponentUpdate] l'istanza di un component sta per essere aggiornata." + 
            " Props: " + nextProps.name + 
            " State: " + nextState.company
        );

        return true;
    }

    componentWillUpdate() {
        console.log("[componentWillUpdate] l'istanza di un component sta per essere aggiornata.");
    }

    componentDidUpdate() {
        console.log("[componentDidUpdate] l'istanza di un component è stata aggiornata.");
    }
}
