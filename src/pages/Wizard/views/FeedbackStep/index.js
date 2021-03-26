import React, { useContext } from "react";
import WizardContext from "contexts/WizardContext";
import SuccessMessage from "components/messages/SuccessMessage";
import ErrorMessage from "components/messages/ErrorMessage";

/**
 * Last Wizard step.
 * 
 * @component
 * @example
 * return (
 *   <FeedbackStep />
 * )
 */
const FeedbackStep = () => {

  const { passMgrCreated } = useContext(WizardContext);

  return (<section>
    {passMgrCreated
      ? <SuccessMessage />
      : <ErrorMessage />}
  </section>);

};

FeedbackStep.propTypes = {};

FeedbackStep.defaultProps = {};

export default (FeedbackStep);