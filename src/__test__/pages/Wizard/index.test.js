import React from "react";
import { Suspense } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import Wizard from "pages/Wizard";
import * as hooks from "hooks/useWizard";
import * as api from "services/api";

window.scrollTo = jest.fn();

const reset = jest.fn();
const goToNextStep = jest.fn();
const setLoading = jest.fn();
const setPassMgrCreated = jest.fn();
const updateStep1Values = jest.fn();
const contextMock = {
  formValues: {
    accept: false,
    password: "",
    repeatPassword: "",
    hint: "",
  },
  passMgrCreated: false,
  setPassMgrCreated,
  setLoading,
  isValid: true,
  activeStep: 1,
  goToNextStep,
  reset,
  updateStep1Values,
};
jest.spyOn(hooks, "default").mockImplementation(() => contextMock);

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

const customRender = () => {
  render(
    <ThemeProvider theme={theme}>
      <Suspense fallback={"loading ..."}>
        <Wizard />
      </Suspense>
    </ThemeProvider>,
    container
  );
};

it("Wizard work fine when step 1 is active and valid", async () => {
  await act(async () => {
    customRender();
  });

  const stepsList = container.querySelectorAll("li");
  const form = container.querySelector("form");
  const check = container.querySelector("input");
  const buttonCancel = form
    .querySelector("[class='left']")
    .querySelector("button");
  const buttonNext = form
    .querySelector("[class='right']")
    .querySelector("button");

  expect(reset).toHaveBeenCalledTimes(1);
  expect(window.scrollTo).toHaveBeenCalledTimes(1);

  expect(stepsList[0].querySelector("i")).toEqual(null);
  expect(stepsList[1].querySelector("i")).toEqual(null);
  expect(stepsList[2].querySelector("i")).toEqual(null);

  expect(form).not.toEqual(null);

  expect(buttonCancel.textContent).toEqual("common.cancel");
  expect(buttonNext.textContent).toEqual("common.next");
  expect(buttonNext.getAttribute("disabled")).toEqual(null);

  act(() => {
    check.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    buttonNext.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(updateStep1Values).toHaveBeenCalledTimes(1);
  expect(goToNextStep).toHaveBeenCalledTimes(1);
});

it("Wizard work fine when step 2 is active and valid", async () => {
  contextMock.activeStep = 2;
  contextMock.formValues.accept = true;
  contextMock.formValues.password = "Abcd1234";
  contextMock.formValues.repeatPassword = "Abcd1234";
  contextMock.formValues.hint = "Test";

  jest
    .spyOn(api, "submitForm")
    .mockImplementation((pass, repass, optionalQuestion) =>
      Promise.resolve(api.RESPONSE_OK)
    );

  await act(async () => {
    customRender();
  });

  const stepsList = container.querySelectorAll("li");
  const form = container.querySelector("form");
  const buttonCancel = form
    .querySelector("[class='left']")
    .querySelector("button");
  const buttonNext = form
    .querySelector("[class='right']")
    .querySelector("button");

  expect(stepsList[0].querySelector("i")).not.toEqual(null);
  expect(stepsList[1].querySelector("i")).toEqual(null);
  expect(stepsList[2].querySelector("i")).toEqual(null);

  expect(form).not.toEqual(null);

  expect(buttonCancel.textContent).toEqual("common.cancel");
  expect(buttonNext.textContent).toEqual("common.next");
  expect(buttonNext.getAttribute("disabled")).toEqual(null);

  await act(async () => {
    buttonNext.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(setLoading).toHaveBeenCalledTimes(2);
  expect(setPassMgrCreated).toHaveBeenCalledTimes(1);
  expect(goToNextStep).toHaveBeenCalledTimes(2);
});

it("Wizard work fine when step 2 is active and valid, but service fail", async () => {
  contextMock.activeStep = 2;
  contextMock.formValues.accept = true;
  contextMock.formValues.password = "Abcd1234";
  contextMock.formValues.repeatPassword = "Abcd1234";
  contextMock.formValues.hint = "Test";

  jest
    .spyOn(api, "submitForm")
    .mockImplementation((pass, repass, optionalQuestion) =>
      Promise.resolve(api.RESPONSE_KO)
    );

  await act(async () => {
    customRender();
  });

  const form = container.querySelector("form");
  const buttonNext = form
    .querySelector("[class='right']")
    .querySelector("button");

  await act(async () => {
    buttonNext.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(setLoading).toHaveBeenCalledTimes(4);
  expect(setPassMgrCreated).toHaveBeenCalledTimes(2);
  expect(goToNextStep).toHaveBeenCalledTimes(3);
});

it("Wizard work fine when step 3 is active and success", async () => {
  contextMock.activeStep = 3;
  contextMock.passMgrCreated = true;

  await act(async () => {
    customRender();
  });

  const h1 = container.querySelector("h1");

  expect(h1.textContent).toEqual("feedback.success.title");
});

it("Wizard work fine when step 3 is active and fail", async () => {
  contextMock.activeStep = 3;
  contextMock.passMgrCreated = false;

  await act(async () => {
    customRender();
  });

  const h1 = container.querySelector("h1");

  expect(h1.textContent).toEqual("feedback.error.title");
});
