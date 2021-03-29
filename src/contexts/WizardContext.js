// @flow
import * as React from "react";
import { useReducer, useEffect, useCallback } from "react";
import type { FormValues } from "./types";
import { ACTIONS } from "./types";
import { INITIAL_STATE } from "./constants";
import { reducer } from "./reducer";
import Spinner from "components/Spinner";
import { STEPS } from "contexts/constants";
import { PASSWORD_PATTERN, HINT_MAX_LENGTH } from "contexts/constants";

interface ContextProps {
  formValues: FormValues;
  isValid: boolean;
  passMgrCreated: boolean;
  activeStep: number;
  setFormValues: (formValues: FormValues) => void;
  setPassMgrCreated: (passMgrCreated: boolean) => void;
  setLoading: (loading: boolean) => void;
  setActiveStep: (activeStep: number) => void;
  reset: () => void;
}

const Context: React$Context<ContextProps> = React.createContext<ContextProps>({
  formValues: INITIAL_STATE.formValues,
  isValid: INITIAL_STATE.isValid,
  passMgrCreated: INITIAL_STATE.passMgrCreated,
  activeStep: INITIAL_STATE.activeStep,
  setFormValues: () => {},
  setPassMgrCreated: () => {},
  setLoading: () => {},
  setActiveStep: () => {},
  reset: () => {},
});

type Props = {
  children: React.Node,
};

export function WizardContextProvider({ children }: Props): React.Node {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { formValues, isValid, loading, passMgrCreated, activeStep } = state;

  useEffect(() => {
    let newIsValidValue = false;

    switch (activeStep) {
      case STEPS[0]:
        newIsValidValue = formValues.accept;
        break;
      case STEPS[1]:
        newIsValidValue =
          PASSWORD_PATTERN.test(formValues.password) &&
          formValues.password === formValues.repeatPassword &&
          formValues.hint.length <= HINT_MAX_LENGTH;
        break;
      default:
        newIsValidValue = false;
        break;
    }

    setIsValid(newIsValidValue);
  }, [activeStep, formValues]);

  const reset = useCallback(() => {
    dispatch({ type: ACTIONS.RESET, payload: {} });
  }, []);

  const setLoading = (loading: boolean) => {
    dispatch({ type: ACTIONS.UPDATE_LOADING, payload: { loading } });
  };

  const setPassMgrCreated = (passMgrCreated: boolean) => {
    dispatch({
      type: ACTIONS.UPDATE_PASS_MGR_CREATED,
      payload: { passMgrCreated },
    });
  };

  const setIsValid = (isValid: boolean) => {
    dispatch({ type: ACTIONS.UPDATE_IS_VALID, payload: { isValid } });
  };

  const setFormValues = (formValues: FormValues) => {
    dispatch({ type: ACTIONS.UPDATE_FORM_VALUES, payload: { formValues } });
  };

  const setActiveStep = (activeStep: number) => {
    dispatch({ type: ACTIONS.UPDATE_ACTIVE_STEP, payload: { activeStep } });
  };

  return (
    <Context.Provider
      value={{
        formValues,
        isValid,
        passMgrCreated,
        activeStep,
        setFormValues,
        setPassMgrCreated,
        setLoading,
        setActiveStep,
        reset,
      }}
    >
      <Spinner loading={loading} />
      {children}
    </Context.Provider>
  );
}

export default Context;
