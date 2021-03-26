import React from "react";
import { withTranslation } from "react-i18next";
import "./messages.scss";

/**
 * Common component used by FeedbackStep when an error occurred in the password creation.
 * 
 * @component
 * @example
 * return (
 *   <ErrorMessage />
 * )
 */
const ErrorMessage = ({ t }) => {

  return (<>
    <div className="messageIcon error">
      <i className="fa fa-exclamation-triangle" aria-hidden="true" />
      <h1>{t("feedback.error.title")}</h1>
      <p>{t("feedback.error.paragraph")}</p>
    </div>
  </>);

};

ErrorMessage.propTypes = {};

ErrorMessage.defaultProps = {};

export default withTranslation()(ErrorMessage);