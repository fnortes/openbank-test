import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import FormStep from "pages/Wizard/views/FormStep";
import * as hooks from "hooks/useWizard";

const updateStep2Values = jest.fn();
const contextMock = {
  formValues: {
    accept: false,
    password: "",
    repeatPassword: "Abcd1234",
    hint: "Test",
  },
  updateStep2Values,
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
      <FormStep />
    </ThemeProvider>,
    container
  );
};

it("Step 2 work fine", async () => {
  await act(async () => {
    customRender();
  });

  const h1 = container.querySelector("h1");
  const inputs = container.querySelectorAll("input");
  const [password, repeatPassword, hint] = inputs;

  expect(h1.textContent).toEqual("common.createPasswordManager");
  expect(password).not.toEqual(null);
  expect(repeatPassword).not.toEqual(null);
  expect(hint).not.toEqual(null);
});
