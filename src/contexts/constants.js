// @flow
import type { State } from "./types";

// Define de steps number.
export const STEPS: number[] = [1, 2, 3];

export const INITIAL_STATE: State = {
  formValues: {
    accept: false,
    password: "",
    repeatPassword: "",
    hint: "",
  },
  loading: false,
  isValid: false,
  passMgrCreated: false,
  activeStep: STEPS[0],
};

export const PASSWORD_MAX_LENGTH = 24;
export const PASSWORD_MIN_LENGTH = 8;
export const HINT_MAX_LENGTH = 250;
export const PASSWORD_PATTERN: RegExp = new RegExp(
  `(?=.*[A-Z])(?=.*[0-9])(?=.{${PASSWORD_MIN_LENGTH},${PASSWORD_MAX_LENGTH}}$)`
);
