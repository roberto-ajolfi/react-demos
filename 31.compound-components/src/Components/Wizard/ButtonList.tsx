import React, { Component } from 'react'
import WizardContext, { IWizardContext } from './WizardContext';

export default class ButtonList extends Component {
    render() {
        return (
            <WizardContext.Consumer>
                {(ctx: IWizardContext) => {
                    const children = React.Children.map(
                        this.props.children, 
                        (child: any) => {
                            return React.cloneElement(child, {
                                onPreviousStep: ctx.onPreviousStep,
                                onNextStep: ctx.onNextStep,
                                onSubmit: ctx.onSubmit
                            });
                        });

                    return (<div>
                        <div>{ctx.activeStepIndex}/{ctx.totalSteps}</div>
                        <div>{children}</div>
                    </div>)
                }}
            </WizardContext.Consumer>
        )
    }
}
