import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import InputField from "components/form/InputField";

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

it("InputField work fine without props", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <InputField />
      </ThemeProvider>,
      container
    );
  });

  const label = container.querySelector("label");
  const input = container.querySelector("input");
  const icon = container.querySelector("i");
  const error = container.querySelector("p");

  expect(label.textContent).toEqual("");
  expect(input.getAttribute("class")).toEqual(" ");
  expect(input.getAttribute("type")).toEqual("text");
  expect(input.getAttribute("value")).toEqual("");
  expect(icon).toEqual(null);
  expect(error).toEqual(null);
});

it("InputField work fine without props", () => {
  const value = "Test";
  const onChange = jest.fn();

  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <InputField
          className="max-fit"
          type="text"
          name="name"
          placeholder="Label"
          value={value}
          onChange={onChange}
          icon={<i className="inside fa fa-eye" aria-hidden="true"></i>}
          errors={<p>Error message</p>}
        >
          Field
        </InputField>
      </ThemeProvider>,
      container
    );
  });

  const label = container.querySelector("label");
  const input = container.querySelector("input");
  const icon = container.querySelector("i");
  const error = container.querySelector("p");

  expect(label.textContent).toEqual("FieldError message");
  expect(input.getAttribute("class")).toEqual("max-fit error");
  expect(input.getAttribute("type")).toEqual("text");
  expect(input.getAttribute("value")).toEqual("Test");
  expect(input.getAttribute("name")).toEqual("name");
  expect(icon).not.toEqual(null);
  expect(icon.getAttribute("class")).toEqual("inside fa fa-eye");
  expect(error).not.toEqual(null);
  expect(error.textContent).toEqual("Error message");
});
