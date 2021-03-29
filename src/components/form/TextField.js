// @flow
import * as React from "react";
import InputField from "./InputField";

type Props = {
  children: React.Node,
  name: string,
  placeholder: string,
  value: any,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  maxLength: number | null,
  errors: React.MixedElement | null,
};

export default function TextField({
  children,
  name,
  placeholder,
  value,
  onChange,
  maxLength = null,
  errors,
}: Props): React.Node {
  return (
    <>
      <InputField
        className="max-fit"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        errors={errors}
      >
        {children}
      </InputField>
      {maxLength && (
        <div className="small right">{`${value.length}/${maxLength}`}</div>
      )}
    </>
  );
}
