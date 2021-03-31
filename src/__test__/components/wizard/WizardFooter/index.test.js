import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import * as wouter from "wouter";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import WizardFooter from "components/wizard/WizardFooter";
import * as hooks from "hooks/useWizard";

const goToPreviousStep = jest.fn();
const contextMock = {
  activeStep: 1,
  isValid: false,
  passMgrCreated: false,
  goToPreviousStep,
  setActiveStep: jest.fn(),
};
jest.spyOn(hooks, "default").mockImplementation(() => contextMock);

const pushLocation = jest.fn();
jest
  .spyOn(wouter, "useLocation")
  .mockImplementation(() => [null, pushLocation]);

let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const customRender = () =>
  render(
    <ThemeProvider theme={theme}>
      <WizardFooter />
    </ThemeProvider>,
    container
  );

it("WizardFooter work fine invalid first or second step", () => {
  act(() => {
    customRender();
  });

  const footer = container.querySelector("footer");
  const buttonCancel = container
    .querySelector("[class='left']")
    .querySelector("button");
  const buttonNext = container
    .querySelector("[class='right']")
    .querySelector("button");

  expect(footer.getAttribute("class")).toEqual("undefined grid small");
  expect(buttonCancel.textContent).toEqual("common.cancel");
  expect(buttonNext.textContent).toEqual("common.next");
  expect(buttonNext.getAttribute("disabled")).toEqual("");

  act(() => {
    buttonCancel.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(pushLocation).toHaveBeenCalledTimes(1);
});

it("WizardFooter work fine valid first or second step", () => {
  contextMock.activeStep = 2;
  contextMock.isValid = true;

  act(() => {
    customRender();
  });

  const buttonNext = container
    .querySelector("[class='right']")
    .querySelector("button");
  const buttonCancel = container
    .querySelector("[class='left']")
    .querySelector("button");

  expect(buttonNext.getAttribute("disabled")).toEqual(null);

  act(() => {
    buttonCancel.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(goToPreviousStep).toHaveBeenCalledTimes(1);
});

it("WizardFooter work fine with wrong third step", () => {
  contextMock.activeStep = 3;

  act(() => {
    customRender();
  });

  const button = container
    .querySelector("[class='right']")
    .querySelector("button");

  expect(button.textContent).toEqual("common.returnPasswordManager");
});

it("WizardFooter work fine with success third step", () => {
  contextMock.passMgrCreated = true;

  act(() => {
    customRender();
  });

  const link = container.querySelector("[class='right']").querySelector("a");

  expect(link.textContent).toEqual("common.access");
});
