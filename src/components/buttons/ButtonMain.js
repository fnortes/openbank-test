import React from "react";
import PropTypes from "prop-types";
import "./buttons.scss";

/**
 * Common component to print a main button.
 *
 * @component
 * @example
 * const children = {}
 * const align = "right"
 * const disabled = false
 * return (
 *   <ButtonMain align={align} disabled={disabled}>{children}</ButtonMain>
 * )
 */
const ButtonMain = ({ children, align, disabled = false }) => {
  return (
    <div className={align}>
      <button type="submit" className="btn-secondary" disabled={disabled}>
        {children}&nbsp;
        <i className="fa fa-chevron-right" aria-hidden="true" />
      </button>
    </div>
  );
};

ButtonMain.propTypes = {
  /**
   * Button content.
   */
  children: PropTypes.any,
  /**
   * Button alignment inside container.
   */
  align: PropTypes.string,
  /**
   * If the button should be disabled.
   */
  disabled: PropTypes.bool,
};

ButtonMain.defaultProps = {
  disabled: false,
};

export default ButtonMain;
