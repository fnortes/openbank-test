import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import { WizardContextProvider } from "contexts/WizardContext";
import useWizard from "hooks/useWizard";

function UseWizardTest() {
  const {
    formValues,
    isValid,
    passMgrCreated,
    activeStep,
    updateStep1Values,
    updateStep2Values,
    goToNextStep,
    goToPreviousStep,
  } = useWizard();

  return (
    <div>
      <span>{activeStep}</span>
      <span>{JSON.stringify(formValues)}</span>
      <span>{isValid.toString()}</span>
      <span>{passMgrCreated.toString()}</span>
      <button onClick={() => updateStep1Values(true)}></button>
      <button
        onClick={() => updateStep2Values("password", "Abcd1234")}
      ></button>
      <button onClick={() => goToNextStep()}></button>
      <button onClick={() => goToPreviousStep()}></button>
    </div>
  );
}

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

// let contextData = {};
const customRender = () => {
  render(
    <ThemeProvider theme={theme}>
      <WizardContextProvider>
        <UseWizardTest />
      </WizardContextProvider>
    </ThemeProvider>,
    container
  );
};

it("All context data and api Work fine", async () => {
  await act(async () => {
    customRender();
  });

  const spans = container.querySelectorAll("span");
  const buttons = container.querySelectorAll("button");

  expect(spans[0].textContent).toEqual("1");
  expect(spans[1].textContent).toEqual(
    '{"accept":false,"password":"","repeatPassword":"","hint":""}'
  );
  expect(spans[2].textContent).toEqual("false");
  expect(spans[3].textContent).toEqual("false");

  await act(async () => {
    buttons[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(spans[1].textContent).toEqual(
    '{"accept":true,"password":"","repeatPassword":"","hint":""}'
  );
  expect(spans[2].textContent).toEqual("true");

  await act(async () => {
    buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(spans[1].textContent).toEqual(
    '{"accept":true,"password":"Abcd1234","repeatPassword":"","hint":""}'
  );

  await act(async () => {
    buttons[2].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(spans[0].textContent).toEqual("2");
  expect(spans[2].textContent).toEqual("false");

  await act(async () => {
    buttons[3].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(spans[0].textContent).toEqual("1");
  expect(spans[2].textContent).toEqual("true");
});
