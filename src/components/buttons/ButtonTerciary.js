import React from "react";
import PropTypes from 'prop-types';
import "./buttons.scss";

/**
 * Common component to print a terciary button.
 * 
 * @component
 * @example
 * const children = {}
 * const align = "right"
 * const onClick = () => {}
 * return (
 *   <ButtonTerciary align={align} onClick={onClick}>{children}</ButtonTerciary>
 * )
 */
const ButtonTerciary = ({ children, align, onClick }) => {

  return (<div className={align}>
    <button type="button" className="btn-primary" onClick={onClick}>
      {children}&nbsp;<i className="fa fa-chevron-right" aria-hidden="true" />
    </button>
  </div>);

};

ButtonTerciary.propTypes = {
  /**
   * Button content.
   */
  children: PropTypes.any,
  /**
   * Button alignment inside container.
   */
  align: PropTypes.string,
  /**
   * Handler to onClick button event.
   */
  onClick: PropTypes.func,
};

ButtonTerciary.defaultProps = {};

export default (ButtonTerciary);