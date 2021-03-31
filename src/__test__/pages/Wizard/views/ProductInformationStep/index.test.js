import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import ProductInformationStep from "pages/Wizard/views/ProductInformationStep";
import * as hooks from "hooks/useWizard";

const updateStep1Values = jest.fn();
const contextMock = {
  formValues: {
    accept: false,
  },
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
      <ProductInformationStep />
    </ThemeProvider>,
    container
  );
};

it("Step 1 work fine", async () => {
  await act(async () => {
    customRender();
  });

  const h1 = container.querySelector("h1");
  const check = container.querySelector("input");

  expect(h1.textContent).toEqual("common.createPasswordManager");

  act(() => {
    check.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(updateStep1Values).toHaveBeenCalledTimes(1);
});
