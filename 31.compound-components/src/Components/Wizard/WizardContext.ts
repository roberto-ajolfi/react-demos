// STEP 3 - creazione del contesto
//

import { createContext } from "react";

export interface IWizardContext {
    totalSteps: number;
    activeStepIndex: number;
    onNextStep: () => void;
    onPreviousStep: () => void;
    onSubmit: () => void;
}

const WizardContext = createContext({} as IWizardContext);

export default WizardContext;