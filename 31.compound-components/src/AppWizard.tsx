import React from 'react';
import './App.css';

import Wizard from './Components/Wizard/Wizard';
import Step, { FirstStep, SecondStep, ThirdStep } from './Components/Wizard/Steps';
import StepList from './Components/Wizard/StepList';
import ButtonList from './Components/Wizard/ButtonList';
import { Previous, Next, Submit } from './Components/Wizard/Buttons';

const submitHandler = () => {
  alert("Completed!!!");
}

// STEP 1 - design del Compound Component
//
// STEP 2 - creazione dei component vuoti
//
function AppWizard() {
  return (
    <div className="App">
      <header className="App-header">
        <Wizard onSubmit={submitHandler}>
            <StepList>
                <Step render={FirstStep} />
                <Step render={SecondStep} />
                <Step render={ThirdStep} />
            </StepList>
            <ButtonList>
                <Previous />
                <Next />
                <Submit />
            </ButtonList>
        </Wizard>
      </header>
    </div>
  );
}

export default AppWizard;
