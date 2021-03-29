// @flow
import * as React from "react";
import { useState } from "react";
import InputField from "./InputField";

const INPUT_TYPES = {
  PASSWORD: "password",
  TEXT: "text",
};
type Props = {
  children: React.Node,
  name: string,
  placeholder: string,
  value: any,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  errors: React.MixedElement | null,
};

export default function PasswordField({
  children,
  name,
  placeholder,
  value,
  onChange,
  errors,
}: Props): React.Node {
  const [type, setType] = useState(INPUT_TYPES.PASSWORD);

  const handleOnClick = (event: SyntheticEvent<HTMLElement>) => {
    setType((prevType) =>
      prevType === INPUT_TYPES.PASSWORD
        ? INPUT_TYPES.TEXT
        : INPUT_TYPES.PASSWORD
    );
  };

  return (
    <InputField
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      errors={errors}
      icon={
        <i
          className="inside fa fa-eye"
          aria-hidden="true"
          onClick={handleOnClick}
        ></i>
      }
    >
      {children}
    </InputField>
  );
}
