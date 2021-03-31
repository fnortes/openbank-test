import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import TextField from "components/form/TextField";

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

it("TextField work fine without props", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <TextField />
      </ThemeProvider>,
      container
    );
  });

  const label = container.querySelector("label");
  const input = container.querySelector("input");
  const icon = container.querySelector("i");
  const error = container.querySelector("p");

  expect(label.textContent).toEqual("");
  expect(input.getAttribute("class")).toEqual("max-fit ");
  expect(input.getAttribute("type")).toEqual("text");
  expect(input.getAttribute("value")).toEqual("");
  expect(icon).toEqual(null);
  expect(error).toEqual(null);
});

it("TextField work fine with all props", () => {
  const value = "Test large text";
  const onChange = jest.fn();

  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <TextField
          name="hint"
          placeholder="Label"
          value={value}
          onChange={onChange}
          maxLength={10}
          errors={<p>Error message</p>}
        >
          Field
        </TextField>
      </ThemeProvider>,
      container
    );
  });

  const label = container.querySelector("label");
  const input = container.querySelector("input");
  const div = container.querySelector("div");
  const icon = container.querySelector("i");
  const error = container.querySelector("p");

  expect(label.textContent).toEqual("FieldError message");
  expect(input.getAttribute("class")).toEqual("max-fit error");
  expect(input.getAttribute("type")).toEqual("text");
  expect(input.getAttribute("name")).toEqual("hint");
  expect(input.getAttribute("placeholder")).toEqual("Label");
  expect(input.getAttribute("value")).toEqual("Test large text");
  expect(div.getAttribute("class")).toEqual("small right");
  expect(div.textContent).toEqual("15/10");
  expect(icon).toEqual(null);
  expect(error).not.toEqual(null);
});
