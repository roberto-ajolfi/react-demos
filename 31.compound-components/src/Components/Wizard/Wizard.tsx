import React, { Component } from 'react';
import WizardContext from './WizardContext';

interface IWizardProps {
    onSubmit: () => void;
}

export default class Wizard extends Component<IWizardProps> {
    state = {
        totalSteps: 0,
        activeStepIndex: 0,
        onNextStep: () => {
            this.setState({
                activeStepIndex: this.state.activeStepIndex + 1
            });
        },
        onPreviousStep: () => {
            this.setState({
                activeStepIndex: this.state.activeStepIndex - 1
            });
        },
        onSubmit: () => this.props.onSubmit()
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
                //console.log("Examining " + child.type.name);
                if(child.type.name === "StepList") {
                    React.Children.forEach(child.props.children, (c: any) => {
                        if(React.isValidElement(c))
                            totalSteps++;
                    });
                    //totalSteps = child.props.children.length;
                    //React.Children.forEach(child.props.children, (c: any) => 
                    //    React.isValidElement(c) ? console.log(c) : console.log("Not an Element"));
                    //console.log(child.type.name + " Found: " + totalSteps);
                }
            });

        //console.log("Total Steps: " + totalSteps);
        this.setState({ totalSteps });
    }
}
