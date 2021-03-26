import React from "react";
import PropTypes from 'prop-types';
import InputField from "./InputField";

/**
 * Common component to print a text input.
 * 
 * @component
 * @example
 * const children = {}
 * const name = ""
 * const placeholder = ""
 * const value = ""
 * const onChange = () => {}
 * const maxLength = 0
 * const errors = {}
 * return (
 *  <TextField name={name} placeholder={placeholder} value={value} onChange={onChange} errors={errors} maxLength={maxLength}>
      {children}
    </TextField>
 * )
 */
const TextField = ({
  children,
  name,
  placeholder,
  value,
  onChange,
  maxLength = null,
  errors
}) => {

  return (<>
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
      <div className="small right">
        {`${value.length}/${maxLength}`}
      </div>
    )}
  </>);

}

TextField.propTypes = {
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
   * The maxlength value of the input.
   */
  maxLength: PropTypes.number,
  /**
   * The errors element, if necessary.
   */
  errors: PropTypes.element
};

TextField.defaultProps = {};

export default (TextField);