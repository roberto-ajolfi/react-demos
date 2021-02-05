import React, { Component } from 'react'
import WizardContext, { IWizardContext } from './WizardContext';

interface IStepProps {
    render: JSX.Element;
    isActive?: boolean;
}

export default class Step extends Component<IStepProps> {
    render() {
        return (
            <WizardContext.Consumer>
                { (ctx: IWizardContext) => {
                        return this.props.isActive ? 
                            (<div>{this.props.render}</div>) : 
                            null;
                    }
                } 
            </WizardContext.Consumer>
        )
    }
}

export class FirstStep extends Component {
    render() {
        return (
            <div>
                FIRST
            </div>
        )
    }
}

export class SecondStep extends Component {
    render() {
        return (
            <div>
                SECOND
            </div>
        )
    }
}

export class ThirdStep extends Component {
    render() {
        return (
            <div>
                THIRD
            </div>
        )
    }
}