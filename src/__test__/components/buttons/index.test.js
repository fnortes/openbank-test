import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import Button from "components/buttons";

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

it("Button work fine as button element without props", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Hello</Button>
      </ThemeProvider>,
      container
    );
  });

  const div = container.querySelector("div");
  const button = container.querySelector("button");
  const link = container.querySelector("a");
  const icon = container.querySelector("i");

  expect(container.textContent).toEqual("Hello");
  expect(div.getAttribute("class")).toEqual("left");
  expect(button.getAttribute("type")).toEqual("button");
  expect(button.getAttribute("disabled")).toEqual(null);
  expect(button).not.toEqual(null);
  expect(link).toEqual(null);
  expect(icon).toEqual(null);
});

it("Button work fine as button element with all props", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <Button
          align="right"
          type="submit"
          priority="primary"
          disabled
          iconClass="test"
        />
      </ThemeProvider>,
      container
    );
  });

  const div = container.querySelector("div");
  const button = container.querySelector("button");
  const link = container.querySelector("a");
  const icon = container.querySelector("i");

  expect(container.textContent).toEqual("");
  expect(div.getAttribute("class")).toEqual("right");
  expect(button.getAttribute("type")).toEqual("submit");
  expect(button.getAttribute("disabled")).toEqual("");
  expect(link).toEqual(null);
  expect(icon).not.toEqual(null);
});

it("Button work fine as link element with all props", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <Button align="right" to="/" priority="primary" iconClass="test">
          Link
        </Button>
      </ThemeProvider>,
      container
    );
  });

  const div = container.querySelector("div");
  const button = container.querySelector("button");
  const link = container.querySelector("a");
  const icon = container.querySelector("i");

  expect(container.textContent).toEqual("Link");
  expect(div.getAttribute("class")).toEqual("right");
  expect(button).toEqual(null);
  expect(link).not.toEqual(null);
  expect(icon).not.toEqual(null);
  expect(icon.getAttribute("class")).toEqual("fa test");
});
