import React, { useContext, useEffect } from "react";
import { withTranslation } from "react-i18next";
import WizardContext from "contexts/WizardContext";
import PasswordField from "components/form/PasswordField";
import TextField from "components/form/TextField";

const PASSWORD_MAX_LENGTH = 24;
const PASSWORD_MIN_LENGTH = 8;
const HINT_MAX_LENGTH = 250;
const PASSWORD_PATTERN = new RegExp(`(?=.*[A-Z])(?=.*[0-9])(?=.{${PASSWORD_MIN_LENGTH},${PASSWORD_MAX_LENGTH}}$)`);

/**
 * Second Wizard step.
 * 
 * @component
 * @example
 * return (
 *   <FormStep />
 * )
 */
const FormStep = ({ t }) => {

  const { formValues, setFormValues, setIsValid } = useContext(WizardContext);

  useEffect(() => {
    setIsValid(
      PASSWORD_PATTERN.test(formValues.password) &&
      formValues.password === formValues.repeatPassword &&
      formValues.hint.length <= HINT_MAX_LENGTH
    );
  }, [formValues, setIsValid]);

  const handleOnChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormValues({
      ...formValues,
      [fieldName]: fieldValue
    });
  }

  return (<section>
    <h1>{t("common.createPasswordManager")}</h1>
    <p>{t("productInformation.howItWorks.paragraph")}</p>
    <div className="grid">
      <PasswordField
        name="password"
        placeholder={t("form.password.placeholder")}
        value={formValues.password}
        onChange={handleOnChange}
        errors={formValues.password.length > 0 && !PASSWORD_PATTERN.test(formValues.password)
          ? <p>{t("form.password.error", { maxlength: PASSWORD_MAX_LENGTH, minlength: PASSWORD_MIN_LENGTH })}</p>
          : null
        }
      >
        {t("form.password.label")}
      </PasswordField>
      <PasswordField
        name="repeatPassword"
        placeholder={t("form.repeatPassword.placeholder")}
        value={formValues.repeatPassword}
        onChange={handleOnChange}
        errors={formValues.repeatPassword.length > 0 && formValues.repeatPassword !== formValues.password
          ? <p>{t("form.repeatPassword.error")}</p>
          : null
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
      errors={formValues.hint.length > HINT_MAX_LENGTH
        ? <p>{t("form.hint.error", { maxlength: HINT_MAX_LENGTH })}</p>
        : null
      }
    >
      {t("form.hint.label")}
      &nbsp;<i className="fa fa-info-circle" aria-hidden="true" />
    </TextField>
  </section>);

};

FormStep.propTypes = {};

FormStep.defaultProps = {};

export default withTranslation()(FormStep);