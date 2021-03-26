import React, { useContext, useEffect, useState } from "react";
import WizardContext from "contexts/WizardContext";
import useScrollTop from "hooks/useScrollTop";
import { submitForm, RESPONSE_OK } from "services/api";
import WizardHeader from "components/wizard/WizardHeader";
import WizardFooter from "components/wizard/WizardFooter";

// Define de steps number.
const STEPS = [1, 2, 3];

// Load ProductInformation step in lazy mode.
const LazyProductInformationStep = React.lazy(
  () => import("./views/ProductInformationStep")
);

// Load Form step in lazy mode.
const LazyFormStep = React.lazy(
  () => import("./views/FormStep")
);

// Load Feedback step in lazy mode.
const LazyFeedbackStep = React.lazy(
  () => import("./views/FeedbackStep")
);

/**
 * Component wrapper of all Wizard functionality 
 * (Header navigation, footer buttons and all steps).
 * 
 * @component
 * @example
 * return (
 *   <Wizard />
 * )
 */
const Wizard = () => {

  const [activeStep, setActiveStep] = useState(STEPS[0]);

  const { formValues,
    isValid,
    setPassMgrCreated,
    setLoading,
    reset
  } = useContext(WizardContext);

  useScrollTop(activeStep);

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToNextStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  const handleOnSubmit = event => {
    event.preventDefault();

    if (activeStep === 2 && isValid) {
      setLoading(true);
      submitForm(formValues.password, formValues.repeatPassword, formValues.hint)
        .then(res => setPassMgrCreated(res.status === RESPONSE_OK.status))
        .catch(() => setPassMgrCreated(false))
        .finally(() => {
          setLoading(false);
          goToNextStep();
        });
    } else {
      goToNextStep();
    }
  }

  return (<>
    <WizardHeader steps={STEPS} activeStep={activeStep} />
    <form onSubmit={handleOnSubmit}>
      {activeStep === 1 && (
        <LazyProductInformationStep />
      )}
      {activeStep === 2 && (
        <LazyFormStep />
      )}
      {activeStep === 3 && (
        <LazyFeedbackStep />
      )}
      <WizardFooter activeStep={activeStep} setActiveStep={setActiveStep} />
    </form>
  </>);

};

Wizard.propTypes = {};

Wizard.defaultProps = {};

export default (Wizard);