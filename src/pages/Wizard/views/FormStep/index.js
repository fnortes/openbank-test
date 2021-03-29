// @flow
import * as React from "react";
import { useTranslation } from "react-i18next";
import useWizard from "hooks/useWizard";
import PasswordField from "components/form/PasswordField";
import TextField from "components/form/TextField";
import {
  PASSWORD_PATTERN,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  HINT_MAX_LENGTH,
} from "contexts/constants";

export default function FormStep(): React.Node {
  const { t } = useTranslation();
  const { formValues, updateStep2Values } = useWizard();

  const handleOnChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    updateStep2Values(fieldName, fieldValue);
  };

  return (
    <section>
      <h1>{t("common.createPasswordManager")}</h1>
      <p>{t("productInformation.howItWorks.paragraph")}</p>
      <div className="grid">
        <PasswordField
          name="password"
          placeholder={t("form.password.placeholder")}
          value={formValues.password}
          onChange={handleOnChange}
          errors={
            formValues.password.length > 0 &&
            !PASSWORD_PATTERN.test(formValues.password) ? (
              <p>
                {t("form.password.error", {
                  maxlength: PASSWORD_MAX_LENGTH,
                  minlength: PASSWORD_MIN_LENGTH,
                })}
              </p>
            ) : null
          }
        >
          {t("form.password.label")}
        </PasswordField>
        <PasswordField
          name="repeatPassword"
          placeholder={t("form.repeatPassword.placeholder")}
          value={formValues.repeatPassword}
          onChange={handleOnChange}
          errors={
            formValues.repeatPassword.length > 0 &&
            formValues.repeatPassword !== formValues.password ? (
              <p>{t("form.repeatPassword.error")}</p>
            ) : null
          }
        >
          {t("form.repeatPassword.label")}
        </PasswordField>
      </div>
      <p>{t("form.hint.paragraph")}</p>
      <TextField
        className="max-fit"
        type="text"
        name="hint"
        placeholder={t("form.hint.placeholder")}
        value={formValues.hint}
        onChange={handleOnChange}
        maxLength={HINT_MAX_LENGTH}
        errors={
          formValues.hint.length > HINT_MAX_LENGTH ? (
            <p>{t("form.hint.error", { maxlength: HINT_MAX_LENGTH })}</p>
          ) : null
        }
      >
        {t("form.hint.label")}
        &nbsp;
        <i className="fa fa-info-circle" aria-hidden="true" />
      </TextField>
    </section>
  );
}
