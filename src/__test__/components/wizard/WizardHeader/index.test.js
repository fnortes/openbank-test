import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import * as wouter from "wouter";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import WizardHeader from "components/wizard/WizardHeader";
import * as hooks from "hooks/useWizard";
import { STEPS } from "contexts/constants";

const contextMock = {
  activeStep: 1,
};
jest.spyOn(hooks, "default").mockImplementation(() => contextMock);

// const pushLocation = jest.fn();
// jest
//   .spyOn(wouter, "useLocation")
//   .mockImplementation(() => [null, pushLocation]);

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
      <WizardHeader />
    </ThemeProvider>,
    container
  );

it("WizardHeader work fine when step 1 is active", () => {
  act(() => {
    customRender();
  });

  const stepsList = container.querySelectorAll("li");

  expect(stepsList.length).toEqual(STEPS.length);
  expect(stepsList[0].getAttribute("class")).not.toEqual(
    stepsList[1].getAttribute("class")
  );
  expect(stepsList[1].getAttribute("class")).toEqual(
    stepsList[2].getAttribute("class")
  );
  expect(stepsList[0].querySelector("i")).toEqual(null);
  expect(stepsList[1].querySelector("i")).toEqual(null);
  expect(stepsList[2].querySelector("i")).toEqual(null);
});

it("WizardHeader work fine when step 2 is active", () => {
  contextMock.activeStep = 2;

  act(() => {
    customRender();
  });

  const stepsList = container.querySelectorAll("li");

  expect(stepsList[1].getAttribute("class")).not.toEqual(
    stepsList[0].getAttribute("class")
  );
  expect(stepsList[0].getAttribute("class")).not.toEqual(
    stepsList[2].getAttribute("class")
  );
  expect(stepsList[0].querySelector("i")).not.toEqual(null);
  expect(stepsList[1].querySelector("i")).toEqual(null);
  expect(stepsList[2].querySelector("i")).toEqual(null);
});

it("WizardHeader work fine when step 3 is active", () => {
  contextMock.activeStep = 3;

  act(() => {
    customRender();
  });

  const stepsList = container.querySelectorAll("li");

  expect(stepsList[0].getAttribute("class")).toEqual(
    stepsList[1].getAttribute("class")
  );
  expect(stepsList[1].getAttribute("class")).not.toEqual(
    stepsList[2].getAttribute("class")
  );
  expect(stepsList[0].querySelector("i")).not.toEqual(null);
  expect(stepsList[1].querySelector("i")).not.toEqual(null);
  expect(stepsList[2].querySelector("i")).toEqual(null);
});
