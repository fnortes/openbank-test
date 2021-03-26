import React from "react";
import PropTypes from 'prop-types';
import "./form.scss";

/**
 * Common component to print a input.
 * 
 * @component
 * @example
 * const children = {}
 * const className = ""
 * const type = ""
 * const name = ""
 * const placeholder = ""
 * const value = ""
 * const onChange = () => {}
 * const icon = {}
 * const errors = {}
 * return (
 *  <InputField type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} errors={errors} icon={<i className="inside fa fa-eye" aria-hidden="true" onClick={handleOnClick}></i>}>
      {children}
    </InputField>
 * )
 */
const InputField = ({
  children,
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  icon,
  errors
}) => {

  return (<label className="field">
    {children}<br />
    <input
      className={`${className} ${errors && "error"}`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {icon}
    {errors}
  </label>);

};

InputField.propTypes = {
  /**
   * The label text.
   */
  children: PropTypes.any,
  /**
   * Suplementary css class names for input.
   */
  className: PropTypes.string,
  /**
   * The input type.
   */
  type: PropTypes.string.isRequired,
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
   * The icon element, if necessary.
   */
  icon: PropTypes.element,
  /**
   * The errors element, if necessary.
   */
  errors: PropTypes.element
};

InputField.defaultProps = {
  type: "text"
};

export default (InputField);