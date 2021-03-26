import React from "react";
import PropTypes from 'prop-types';
import "./buttons.scss";

/**
 * Common component to print a secondary button.
 * 
 * @component
 * @example
 * const children = {}
 * const onClick = () => {}
 * return (
 *   <ButtonSecondary onClick={onClick}>{children}</ButtonSecondary>
 * )
 */
const ButtonSecondary = ({ children, onClick }) => {

  return (<div>
    <button type="button" className="btn-terciary" onClick={onClick}>
      {children}
    </button>
  </div>);

};

ButtonSecondary.propTypes = {
  /**
   * Button content.
   */
  children: PropTypes.any,
  /**
   * Handler to onClick button event.
   */
  onClick: PropTypes.func,
};

ButtonSecondary.defaultProps = {};

export default (ButtonSecondary);