// @flow
export type FormValues = {
  accept: boolean,
  password: string,
  repeatPassword: string,
  hint: string,
};

export const ACTIONS = {
  RESET: "RESET",
  UPDATE_LOADING: "UPDATE_LOADING",
  UPDATE_PASS_MGR_CREATED: "UPDATE_PASS_MGR_CREATED",
  UPDATE_IS_VALID: "UPDATE_IS_VALID",
  UPDATE_FORM_VALUES: "UPDATE_FORM_VALUES",
  UPDATE_ACTIVE_STEP: "UPDATE_ACTIVE_STEP",
};

export type ACTION = $Keys<typeof ACTIONS>;

export type State = {
  formValues: FormValues,
  loading: boolean,
  isValid: boolean,
  passMgrCreated: boolean,
  activeStep: number,
};

export type Action = {
  type: ACTION,
  payload: {
    formValues?: FormValues,
    loading?: boolean,
    isValid?: boolean,
    passMgrCreated?: boolean,
    activeStep?: number,
  },
};
