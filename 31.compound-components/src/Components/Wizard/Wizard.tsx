import React, { Component } from 'react';
import WizardContext from './WizardContext';

interface IWizardProps {
    onPreviousStep?: (fromIdx: number, toIdx: number) => void;
    onNextStep?: (fromIdx: number, toIdx: number) => void;
    onSubmit: () => void;
}

export default class Wizard extends Component<IWizardProps> {
    state = {
        totalSteps: 0,
        activeStepIndex: 1,
        onNextStep: () => {
            console.log("OnNextStep");
            if(this.props.onNextStep !== undefined)
                this.props.onNextStep(
                    this.state.activeStepIndex,
                    this.state.activeStepIndex + 1,
                );
            this.setState({
                activeStepIndex: this.state.activeStepIndex + 1
            });
        },
        onPreviousStep: () => {
            console.log("OnNextStep");
            if(this.props.onPreviousStep !== undefined)
                this.props.onPreviousStep(
                    this.state.activeStepIndex,
                    this.state.activeStepIndex - 1,
                );
            this.setState({
                activeStepIndex: this.state.activeStepIndex - 1
            });
        },
        onSubmit: () => {
            console.log("OnSubmit");
            this.props.onSubmit();
        }
    };

    componentDidMount() {
        this.getTotalSteps(this.props.children);
    }

    render() {
        return (
            <WizardContext.Provider value={this.state}>
                <div>{this.props.children}</div>
            </WizardContext.Provider>
        )
    }

    getTotalSteps = (children: React.ReactNode) => {
        let totalSteps = 0;

        if(children === null)
            return;

        React.Children.forEach(
            children, 
            (child: any) => {
                console.log("Examining " + child.type.name);
                if(child.type.name === "StepList") {
                    React.Children.forEach(child.props.children, (c: any) => {
                        if(React.isValidElement(c)) {
                            console.log(c);
                            totalSteps++;
                        } else {
                            console.log("Not an Element");
                        }
                    });
                }
            });

        console.log("Total Steps: " + totalSteps);
        this.setState({ totalSteps });
    }
}
