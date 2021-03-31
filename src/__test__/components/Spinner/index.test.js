import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import Spinner from "components/Spinner";

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

it("Spinner work fine when it is not visible", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>,
      container
    );
  });

  const div = container.querySelector("div");

  expect(container.innerHTML).toEqual("");
  expect(div).toEqual(null);
});

it("Spinner work fine when it is visible", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner loading />
      </ThemeProvider>,
      container
    );
  });

  const div = container.querySelector("div");

  expect(container.innerHTML).not.toEqual("");
  expect(div).not.toEqual(null);
});
