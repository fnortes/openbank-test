import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import ErrorMessage from "components/messages/ErrorMessage";

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

it("ErrorMessage work fine without props", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <ErrorMessage />
      </ThemeProvider>,
      container
    );
  });

  const title = container.querySelector("h1");
  const text = container.querySelector("p");

  expect(title.textContent).toEqual("feedback.error.title");
  expect(text.textContent).toEqual("feedback.error.paragraph");
});
