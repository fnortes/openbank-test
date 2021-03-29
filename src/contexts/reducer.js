// @flow
import type { Action, State } from "./types";
import { ACTIONS } from "./types";
import { INITIAL_STATE } from "./constants";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.RESET:
      return INITIAL_STATE;
    case ACTIONS.UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload.loading || INITIAL_STATE.loading,
      };
    case ACTIONS.UPDATE_PASS_MGR_CREATED:
      return {
        ...state,
        passMgrCreated:
          action.payload.passMgrCreated || INITIAL_STATE.passMgrCreated,
      };
    case ACTIONS.UPDATE_IS_VALID:
      return {
        ...state,
        isValid: action.payload.isValid || INITIAL_STATE.isValid,
      };
    case ACTIONS.UPDATE_FORM_VALUES:
      return {
        ...state,
        formValues: action.payload.formValues || INITIAL_STATE.formValues,
      };
    case ACTIONS.UPDATE_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.payload.activeStep || INITIAL_STATE.activeStep,
      };
    default:
      return state;
  }
};
