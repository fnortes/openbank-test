// @flow
import * as React from "react";
import { useEffect } from "react";
import useWizard from "hooks/useWizard";
import useScrollTop from "hooks/useScrollTop";
import { submitForm, RESPONSE_OK } from "services/api";
import WizardHeader from "components/wizard/WizardHeader";
import { StyledWizardFooter } from "components/wizard/WizardFooter/StyledWizardFooter";

// Load ProductInformation step in lazy mode.
const LazyProductInformationStep = React.lazy(() =>
  import("./views/ProductInformationStep")
);

// Load Form step in lazy mode.
const LazyFormStep = React.lazy(() => import("./views/FormStep"));

// Load Feedback step in lazy mode.
const LazyFeedbackStep = React.lazy(() => import("./views/FeedbackStep"));

export default function Wizard(): React.Node {
  const {
    formValues,
    setPassMgrCreated,
    setLoading,
    isValid,
    activeStep,
    goToNextStep,
    reset,
  } = useWizard();

  useScrollTop(activeStep);

  useEffect(() => {
    reset();
  }, [reset]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (activeStep === 2 && isValid) {
      setLoading(true);
      submitForm(
        formValues.password,
        formValues.repeatPassword,
        formValues.hint
      )
        .then((res) => {
          setPassMgrCreated(res.status === RESPONSE_OK.status);
        })
        .catch(() => {
          setPassMgrCreated(false);
        })
        .finally(() => {
          setLoading(false);
          goToNextStep();
        });
    } else {
      goToNextStep();
    }
  };

  return (
    <>
      <WizardHeader />
      <form onSubmit={handleOnSubmit}>
        {activeStep === 1 && <LazyProductInformationStep />}
        {activeStep === 2 && <LazyFormStep />}
        {activeStep === 3 && <LazyFeedbackStep />}
        <StyledWizardFooter />
      </form>
    </>
  );
}
