import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import { WizardContextProvider } from "contexts/WizardContext";
import Context from "contexts/WizardContext";

window.scrollTo = jest.fn();

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

let contextData = {};
const customRender = () => {
  render(
    <ThemeProvider theme={theme}>
      <WizardContextProvider>
        <Context.Consumer>
          {(values) => {
            contextData = values;
          }}
        </Context.Consumer>
      </WizardContextProvider>
    </ThemeProvider>,
    container
  );
};

it("All context data and api Work fine", async () => {
  await act(async () => {
    customRender();
  });

  expect(contextData.formValues.accept).toEqual(false);
  expect(contextData.isValid).toEqual(false);
  expect(contextData.activeStep).toEqual(1);

  await act(async () => {
    contextData.setFormValues({
      ...contextData.formValues,
      accept: true,
    });
  });

  expect(contextData.formValues.accept).toEqual(true);
  expect(contextData.isValid).toEqual(true);

  await act(async () => {
    contextData.setActiveStep(2);
  });

  expect(contextData.activeStep).toEqual(2);

  await act(async () => {
    contextData.setFormValues({
      accept: true,
      password: "Abcd1234",
      repeatPassword: "Abcd1234",
      hint: "Test",
    });
  });

  expect(contextData.formValues.accept).toEqual(true);
  expect(contextData.formValues.password).toEqual("Abcd1234");
  expect(contextData.formValues.repeatPassword).toEqual("Abcd1234");
  expect(contextData.formValues.hint).toEqual("Test");

  await act(async () => {
    contextData.setLoading(true);
  });

  await act(async () => {
    contextData.setActiveStep(3);
    contextData.setPassMgrCreated(true);
  });

  expect(contextData.activeStep).toEqual(3);
  expect(contextData.passMgrCreated).toEqual(true);

  await act(async () => {
    contextData.reset();
  });

  expect(contextData.formValues.accept).toEqual(false);
  expect(contextData.formValues.password).toEqual("");
  expect(contextData.formValues.repeatPassword).toEqual("");
  expect(contextData.formValues.hint).toEqual("");
  expect(contextData.isValid).toEqual(false);
  expect(contextData.activeStep).toEqual(1);
  expect(contextData.passMgrCreated).toEqual(false);
});
