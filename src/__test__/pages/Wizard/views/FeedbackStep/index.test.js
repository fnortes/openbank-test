import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import FeedbackStep from "pages/Wizard/views/FeedbackStep";
import * as hooks from "hooks/useWizard";

const contextMock = {
  passMgrCreated: false,
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
      <FeedbackStep />
    </ThemeProvider>,
    container
  );
};

it("Step 3 work fine when OK", async () => {
  await act(async () => {
    customRender();
  });

  const h1 = container.querySelector("h1");

  expect(h1.textContent).toEqual("feedback.error.title");
});

it("Step 3 work fine when KO", async () => {
  contextMock.passMgrCreated = true;

  await act(async () => {
    customRender();
  });

  const h1 = container.querySelector("h1");

  expect(h1.textContent).toEqual("feedback.success.title");
});
