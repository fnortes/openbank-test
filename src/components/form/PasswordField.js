import React, { useState } from "react";
import PropTypes from 'prop-types';
import InputField from "./InputField";

/**
 * Common component to print a password input.
 * 
 * @component
 * @example
 * const children = {}
 * const name = ""
 * const placeholder = ""
 * const value = ""
 * const onChange = () => {}
 * const errors = {}
 * return (
 *  <PasswordField name={name} placeholder={placeholder} value={value} onChange={onChange} errors={errors}>
      {children}
    </PasswordField>
 * )
 */
const PasswordField = ({
  children,
  name,
  placeholder,
  value,
  onChange,
  errors
}) => {

  const [type, setType] = useState("password");

  const handleOnClick = () => {
    setType(prevType => prevType === "password" ? "text" : "password");
  }

  return (
    <InputField
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      errors={errors}
      icon={<i className="inside fa fa-eye" aria-hidden="true" onClick={handleOnClick}></i>}
    >
      {children}
    </InputField>
  );

};

PasswordField.propTypes = {
  /**
   * The label text.
   */
  children: PropTypes.any,
  /**
   * The input name.
   */
  name: PropTypes.string,
  /**
   * The input placeholder.
   */
  placeholder: PropTypes.string,
  /**
   * The input value.
   */
  value: PropTypes.any,
  /**
   * The handler for the onChange input event.
   */
  onChange: PropTypes.func,
  /**
   * The errors element, if necessary.
   */
  errors: PropTypes.element
};

PasswordField.defaultProps = {};

export default (PasswordField);