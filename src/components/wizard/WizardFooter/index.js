import React, { useContext } from "react";
import { withTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { useLocation } from "wouter";
import WizardContext from "contexts/WizardContext";
import ButtonSecondary from "components/buttons/ButtonSecondary";
import ButtonMain from "components/buttons/ButtonMain";
import ButtonTerciary from "components/buttons/ButtonTerciary";
import LinkTerciary from "components/buttons/LinkTerciary";
import "./WizardFooter.scss";

/**
 * Used by Wizard component.
 * Represent the footer of Wizard.
 * 
 * @component
 * @example
 * const activeStep = 1
 * const setActiveStep = () => {}
 * return (
 *   <WizardFooter activeStep={activeStep} setActiveStep={setActiveStep}  />
 * )
 */
const WizardFooter = ({ t, activeStep, setActiveStep }) => {

  const [, pushLocation] = useLocation();

  const { isValid, passMgrCreated } = useContext(WizardContext);

  const goToPreviousStep = () => {
    if (activeStep === 1) {
      pushLocation("/");
    } else {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  }

  return (<footer className="grid small">
    {activeStep < 3
      ? <>
        <ButtonSecondary onClick={goToPreviousStep}>{t("common.cancel")}</ButtonSecondary>
        <ButtonMain align="right" disabled={!isValid}>{t("common.next")}</ButtonMain>
      </>
      : <>
        <div></div>
        {passMgrCreated
          ? <LinkTerciary align="right" to="/">{t("common.access")}</LinkTerciary>
          : <ButtonTerciary align="right"
            onClick={() => setActiveStep(1)}>{t("common.returnPasswordManager")}</ButtonTerciary>}
      </>}
  </footer>);

};

WizardFooter.propTypes = {
  /**
   * Active step number.
   */
  activeStep: PropTypes.number.isRequired,
  /**
   * Callback to update the currentactive step.
   */
  setActiveStep: PropTypes.func.isRequired,
};

WizardFooter.defaultProps = {
  activeStep: 1,
};

export default withTranslation()(WizardFooter);