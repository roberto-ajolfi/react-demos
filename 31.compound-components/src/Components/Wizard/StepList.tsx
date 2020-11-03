import React, { Component } from 'react'
import WizardContext, { IWizardContext } from './WizardContext';

export default class StepList extends Component {
    render() {
        return (
            <WizardContext.Consumer>
                {(ctx: IWizardContext) => {
                    const children = React.Children.map(
                        this.props.children, 
                        (child: any, index: number) => {
                            return React.cloneElement(child, {
                                isActive: index === ctx.activeStepIndex
                            });
                        });

                    return (<div>{children}</div>)
                }}
            </WizardContext.Consumer>
        )
    }
}
