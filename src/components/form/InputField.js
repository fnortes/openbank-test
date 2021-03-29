// @flow
import * as React from "react";
import { StyledInputField } from "./StyledInputField";

type Props = {
  children: React.Node,
  className?: string,
  type: string,
  name: string,
  placeholder: string,
  value: any,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  icon?: React.MixedElement | null,
  errors: React.MixedElement | null,
};

export default function InputField({
  children,
  className = "",
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  icon = null,
  errors = null,
}: Props): React.Node {
  return (
    <StyledInputField>
      {children}
      <br />
      <input
        className={`${className} ${errors !== null ? "error" : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon}
      {errors}
    </StyledInputField>
  );
}
