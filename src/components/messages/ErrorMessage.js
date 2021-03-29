// @flow
import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyledMessageKo } from "./StyledMessage";

export default function ErrorMessage(): React.Node {
  const { t } = useTranslation();

  return (
    <StyledMessageKo>
      <i className="fa fa-exclamation-triangle" aria-hidden="true" />
      <h1>{t("feedback.error.title")}</h1>
      <p>{t("feedback.error.paragraph")}</p>
    </StyledMessageKo>
  );
}
