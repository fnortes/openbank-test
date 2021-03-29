// @flow
import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyledMessageOk } from "./StyledMessage";

export default function SuccessMessage(): React.Node {
  const { t } = useTranslation();

  return (
    <StyledMessageOk>
      <i className="fa fa-check-circle-o" aria-hidden="true" />
      <h1>{t("feedback.success.title")}</h1>
      <p>{t("feedback.success.paragraph")}</p>
    </StyledMessageOk>
  );
}
