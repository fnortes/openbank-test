// @flow
import * as React from "react";
import useWizard from "hooks/useWizard";
import SuccessMessage from "components/messages/SuccessMessage";
import ErrorMessage from "components/messages/ErrorMessage";

export default function FeedbackStep(): React.Node {
  const { passMgrCreated } = useWizard();

  return (
    <section>{passMgrCreated ? <SuccessMessage /> : <ErrorMessage />}</section>
  );
}
