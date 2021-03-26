import React from "react";
import { Link } from "wouter";
import PropTypes from 'prop-types';
import "./buttons.scss";

/**
 * Common component to print a terciary link.
 * 
 * @component
 * @example
 * const children = {}
 * const align = "right"
 * const to = "/"
 * return (
 *   <LinkTerciary align={align} to={to}>{children}</LinkTerciary>
 * )
 */
const LinkTerciary = ({ children, align, to }) => {

  return (<div className={align}>
    <Link className="btn-primary" to={to}>
      {children}&nbsp;<i className="fa fa-chevron-right" aria-hidden="true" />
    </Link>
  </div>);

};

LinkTerciary.propTypes = {
  /**
   * Button content.
   */
  children: PropTypes.any,
  /**
   * Button alignment inside container.
   */
  align: PropTypes.string,
  /**
   * Path to redirect.
   */
  to: PropTypes.string.isRequired
};

LinkTerciary.defaultProps = {};

export default (LinkTerciary);