import React from 'react'
import WizardContext, { IWizardContext } from './WizardContext'
import styled from 'styled-components';

const WizardButton = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: lightgray;
        color: black;
    }
`;

const SubmitButton = styled(WizardButton)`
    background: darkred;
    &:hover {
        background: red;
        color: white;
        opacity: 0.3;
    }
`;

const Previous: React.FC = () => {
    return (
        <WizardContext.Consumer>
            {(ctx: IWizardContext) => 
                ctx.activeStepIndex > 1 ?
                (<WizardButton href="#" onClick={ctx.onPreviousStep}>
                    Previous
                </WizardButton>) :
                null
            }
        </WizardContext.Consumer>
    )
}

const Next: React.FC = () => {
    return (
        <WizardContext.Consumer>
            {(ctx: IWizardContext) => 
                ctx.activeStepIndex < ctx.totalSteps ?
                (<WizardButton href="#" onClick={ctx.onNextStep}>
                    Next
                </WizardButton>) :
                null
            }
        </WizardContext.Consumer>
    )
}

const Submit: React.FC = () => {
    return (
        <WizardContext.Consumer>
            {(ctx: IWizardContext) => 
                ctx.activeStepIndex === ctx.totalSteps ?
                (<SubmitButton href="#" onClick={ctx.onSubmit}>
                    Submit
                </SubmitButton>) :
                null
            }
        </WizardContext.Consumer>
    )
}

// STEP n - Extra Button

const HelpButton = styled(WizardButton)`
    border-radius: 10px;
    background: darkred;
    width: 3rem;
    background: green;
    color: white;
    &:hover {
        background: darkgreen;
        color: white;
    }
`;

const Help: React.FC = () => {
    return (
        <WizardContext.Consumer>
            {(ctx: IWizardContext) => 
                (<HelpButton href="#" onClick={() => alert("Opening Help ...")}>
                    ?
                </HelpButton>)
            }
        </WizardContext.Consumer>
    )
}

export { Previous, Next, Submit, Help }
