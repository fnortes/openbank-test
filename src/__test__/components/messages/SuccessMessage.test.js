import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import SuccessMessage from "components/messages/SuccessMessage";

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

it("SuccessMessage work fine without props", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <SuccessMessage />
      </ThemeProvider>,
      container
    );
  });

  const title = container.querySelector("h1");
  const text = container.querySelector("p");

  expect(title.textContent).toEqual("feedback.success.title");
  expect(text.textContent).toEqual("feedback.success.paragraph");
});
