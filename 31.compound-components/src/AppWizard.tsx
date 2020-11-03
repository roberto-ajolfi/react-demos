import React from 'react';
import './App.css';

import FirstStep from './Components/Wizard/FirstStep';
import SecondStep from './Components/Wizard/SecondStep';
import Wizard from './Components/Wizard/Wizard';
import Step from './Components/Wizard/Step';
import StepList from './Components/Wizard/StepList';
import ButtonList from './Components/Wizard/ButtonList';
import { Previous, Next, Submit} from './Components/Wizard/Buttons';

// STEP 1 - design del Compound Component
//
// STEP 2 - creazione dei component vuoti
//
function AppWizard() {
  return (
    <div className="App">
      <header className="App-header">
        <Wizard>
            <StepList> {/* activeStepIndex, totalSteps props */}
                 <Step render={FirstStep} /> {/* isActive prop */}
                <Step render={SecondStep} /> {/* isActive prop */}
            </StepList>
            <ButtonList>
                <Previous /> {/* isPreviousActive, onPreviousStep props */}
                <Next /> {/* isNextActive, onNextStep props */}
                <Submit /> {/* isLastStep, onSubmit props */}
            </ButtonList>
        </Wizard>
      </header>
    </div>
  );
}

export default AppWizard;
