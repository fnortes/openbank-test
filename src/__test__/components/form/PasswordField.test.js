import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "emotion-theming";
import { theme } from "styles";
import PasswordField from "components/form/PasswordField";

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

it("PasswordField work fine without props", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <PasswordField />
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
  expect(input.getAttribute("type")).toEqual("password");
  expect(input.getAttribute("value")).toEqual("");
  expect(icon).not.toEqual(null);
  expect(icon.getAttribute("class")).toEqual("inside fa fa-eye");
  expect(error).toEqual(null);
});

it("PasswordField work fine with all props", () => {
  const value = "Test";
  const onChange = jest.fn();

  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <PasswordField
          name="password"
          placeholder="Label"
          value={value}
          onChange={onChange}
          errors={<p>Error message</p>}
        >
          Field
        </PasswordField>
      </ThemeProvider>,
      container
    );
  });

  const label = container.querySelector("label");
  const input = container.querySelector("input");
  const icon = container.querySelector("i");
  const error = container.querySelector("p");

  expect(label.textContent).toEqual("FieldError message");
  expect(input.getAttribute("class")).toEqual(" error");
  expect(input.getAttribute("type")).toEqual("password");
  expect(input.getAttribute("value")).toEqual("Test");
  expect(input.getAttribute("name")).toEqual("password");
  expect(icon).not.toEqual(null);
  expect(icon.getAttribute("class")).toEqual("inside fa fa-eye");
  expect(error).not.toEqual(null);
  expect(error.textContent).toEqual("Error message");

  act(() => {
    icon.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(input.getAttribute("type")).toEqual("text");

  act(() => {
    icon.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(input.getAttribute("type")).toEqual("password");
});
