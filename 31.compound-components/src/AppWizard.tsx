import React from 'react';
import './App.css';

import Wizard from './Components/Wizard/Wizard';
import Step, { FirstStep, SecondStep, ThirdStep } from './Components/Wizard/Steps';
import StepList from './Components/Wizard/StepList';
import ButtonList from './Components/Wizard/ButtonList';
import { Previous, Next, Submit, Help } from './Components/Wizard/Buttons';

const submitHandler = () => {
  alert("Completed!!!");
}

const toAnotherHandler = (fromIdx: number, toIdx: number) => {
  console.log(`Moving from ${fromIdx} to the ${toIdx} step`);
}

// STEP 1 - design del Compound Component
//
// STEP 2 - creazione dei component vuoti
//
function AppWizard() {
  return (
    <div className="App">
      <header className="App-header">
        <Wizard onSubmit={submitHandler} 
          onNextStep={toAnotherHandler}
          onPreviousStep={toAnotherHandler}>
            <StepList>
                <Step render={ <FirstStep /> } />
                <Step render={ <SecondStep /> } />
                <Step render={ <ThirdStep />} />
                <Step render={
                  <div>
                    <span>This is a test with an in-line defined Step</span>
                  </div>
                } />
            </StepList>
            <ButtonList>
                <Previous />
                {/* <Help /> */}
                <Next />
                <Submit />
            </ButtonList>
        </Wizard>
      </header>
    </div>
  );
}

export default AppWizard;
