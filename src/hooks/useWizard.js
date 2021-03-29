// @flow
import { useContext } from "react";
import WizardContext from "contexts/WizardContext";
import type { FormValues } from "contexts/types";

type WizardHook = {
  formValues: FormValues,
  isValid: boolean,
  passMgrCreated: boolean,
  activeStep: number,
  setPassMgrCreated: (passMgrCreated: boolean) => void,
  setLoading: (loading: boolean) => void,
  setActiveStep: (step: number) => void,
  reset: () => void,
  updateStep1Values: (accept: boolean) => void,
  updateStep2Values: (fieldValue: string, fieldName: string) => void,
  goToNextStep: () => void,
  goToPreviousStep: () => void,
};

export default function useWizard(): WizardHook {
  const {
    formValues,
    isValid,
    passMgrCreated,
    activeStep,
    setFormValues,
    setPassMgrCreated,
    setLoading,
    setActiveStep,
    reset,
  } = useContext(WizardContext);

  const updateStep1Values = (accept: boolean) => {
    setFormValues({ ...formValues, accept });
  };

  const updateStep2Values = (fieldName: string, fieldValue: string) => {
    setFormValues({ ...formValues, [fieldName]: fieldValue });
  };

  const goToNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const goToPreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  return {
    formValues,
    isValid,
    passMgrCreated,
    activeStep,
    setPassMgrCreated,
    setLoading,
    setActiveStep,
    reset,
    updateStep1Values,
    updateStep2Values,
    goToNextStep,
    goToPreviousStep,
  };
}
