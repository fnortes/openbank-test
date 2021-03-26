import React from "react";
import PropTypes from 'prop-types';
import NavItem from "./NavItem";
import "./WizardHeader.scss";

/**
 * Used by Wizard component.
 * Header Navbar component used in the Wizard.
 * 
 * @component
 * @example
 * const steps = [1, 2, 3]
 * const activeStep = 1
 * return (
 *   <WizardHeader steps={steps} activeStep={activeStep} />
 * )
 */
const WizardHeader = ({ steps = [], activeStep = 1 }) => {

  return (<header>
    <nav>
      <ul>
        {steps.map(step => <NavItem key={step} step={step} activeStep={activeStep} />)}
      </ul>
      {steps.map((step, index) => index + 1 < steps.length
        ? <div key={step} className={`separator ${activeStep > step ? "filled" : ""}`} />
        : null)}
    </nav>
  </header>);

};

WizardHeader.propTypes = {
  /**
   * List of Wizard steps.
   */
  steps: PropTypes.array.isRequired,
  /**
   * Number value of active wizard step.
   */
  activeStep: PropTypes.number.isRequired,
};

WizardHeader.defaultProps = {
  steps: [],
  activeStep: 1,
};

export default WizardHeader;