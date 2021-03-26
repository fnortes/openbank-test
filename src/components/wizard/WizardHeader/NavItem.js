import React from "react";
import PropTypes from 'prop-types';

const CLASS_NAME_ACTIVE_STEP = "active";
const CLASS_NAME_COMPLETED_STEP = "filled";

/**
 * Used by WizardHeader.
 * Represent each item of the wizard navbar.
 * 
 * @component
 * @example
 * const step = 1
 * const activeStep = 1
 * return (
 *   <NavItem step={step} activeStep={activeStep} />
 * )
 */
const NavItem = ({ step, activeStep = 1 }) => {

  const buildClassNameToNavigator = step => {
    if (step === activeStep) {
      return CLASS_NAME_ACTIVE_STEP;
    }

    if (activeStep > step) {
      return CLASS_NAME_COMPLETED_STEP;
    }

    return "";
  }

  return (<li className={buildClassNameToNavigator(step)}>
    <span>
      {activeStep > step
        ? <i className="fa fa-check" aria-hidden="true" />
        : step}
    </span>
  </li>);

};

NavItem.propTypes = {
  /**
   * Step number.
   */
  step: PropTypes.number.isRequired,
  /**
   * Number value of active wizard step.
   */
  activeStep: PropTypes.number.isRequired,
};

NavItem.defaultProps = {
  activeStep: 1,
};

export default NavItem;