import React from "react";
import { withTranslation } from "react-i18next";
import "./messages.scss";

/**
 * Common component used by FeedbackStep when the password creation is successfully.
 * 
 * @component
 * @example
 * return (
 *   <SuccessMessage />
 * )
 */
const SuccessMessage = ({ t }) => {

  return (<>
    <div className="messageIcon">
      <i className="fa fa-check-circle-o" aria-hidden="true" />
      <h1>{t("feedback.success.title")}</h1>
      <p>{t("feedback.success.paragraph")}</p>
    </div>
  </>);

};

SuccessMessage.propTypes = {};

SuccessMessage.defaultProps = {};

export default withTranslation()(SuccessMessage);