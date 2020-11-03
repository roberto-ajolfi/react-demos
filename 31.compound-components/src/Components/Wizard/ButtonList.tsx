import React, { Component } from 'react'
import WizardContext, { IWizardContext } from './WizardContext';

export default class ButtonList extends Component {
    render() {
        return (
            <WizardContext.Consumer>
                {(ctx: IWizardContext) => {
                    const children = React.Children.map(
                        this.props.children, 
                        (child: any, index: number) => {
                            return React.cloneElement(child, {
                                isPreviousActive: ctx.activeStepIndex > 0,
                                isNextActive: ctx.activeStepIndex < ctx.totalSteps,
                                onPreviousStep: ctx.onPreviousStep,
                                onNextStep: ctx.onNextStep,
                                onSubmit: ctx.onSubmit
                            });
                        });

                    return (<div>{children}</div>)
                }}
            </WizardContext.Consumer>
        )
    }
}
