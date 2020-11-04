import React, { Component } from 'react'
import WizardContext, { IWizardContext } from './WizardContext';
import styled from 'styled-components';

const WizardStep = styled.div`
    display: inline-block;
    border-radius: 10px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: lightgray;
    color: black;
    border: 4px double black;
    width: 500px;
    height: 300px;
`;

export default class StepList extends Component {
    render() {
        return (
            <WizardContext.Consumer>
                {(ctx: IWizardContext) => {
                    const children = React.Children.map(
                        this.props.children, 
                        (child: any, index: number) => {
                            return React.cloneElement(child, {
                                isActive: (index + 1) === ctx.activeStepIndex
                            });
                        });

                    return (<WizardStep>{children}</WizardStep>)
                }}
            </WizardContext.Consumer>
        )
    }
}
