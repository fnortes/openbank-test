import React from "react";
import PropTypes from 'prop-types';
import "./Spinner.scss";

/**
 * Common component to manage the loading actions.
 * 
 * @component
 * @example
 * const loading = true
 * return (
 *   <Spinner loading={loading}  />
 * )
 */
const Spinner = ({ loading }) => {

  return loading
    ? (<div id="loader-wrapper">
      <div id="loader"></div>
    </div>)
    : null;

};

Spinner.propTypes = {
  /**
   * If the spinner should be should shown.
   */
  loading: PropTypes.bool,
};

Spinner.defaultProps = {};

export default (Spinner);