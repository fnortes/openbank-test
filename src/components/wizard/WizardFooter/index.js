// @flow
import * as React from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import useWizard from "hooks/useWizard";
import Button from "components/buttons";
import { PRIORITIES } from "components/buttons/StyledButton";
import { STEPS } from "contexts/constants";

type Props = {
  className: string,
};

export default function WizardFooter({ className }: Props): React.Node {
  const [, pushLocation] = useLocation();
  const { t } = useTranslation();

  const {
    activeStep,
    isValid,
    passMgrCreated,
    goToPreviousStep,
    setActiveStep,
  } = useWizard();

  const handleClickCancel = () => {
    if (activeStep === 1) {
      pushLocation("/");
    } else {
      goToPreviousStep();
    }
  };

  return (
    <footer className={`${className} grid small`}>
      {activeStep < 3 ? (
        <>
          <Button priority={PRIORITIES.TERCIARY} onClick={handleClickCancel}>
            {t("common.cancel")}
          </Button>
          <Button
            align="right"
            disabled={!isValid}
            iconClass="fa-chevron-right"
            type="submit"
          >
            {t("common.next")}
          </Button>
        </>
      ) : (
        <>
          {passMgrCreated ? (
            <Button
              align="right"
              priority={PRIORITIES.PRIMARY}
              iconClass="fa-chevron-right"
              to="/"
            >
              {t("common.access")}
            </Button>
          ) : (
            <Button
              align="right"
              onClick={() => setActiveStep(STEPS[0])}
              iconClass="fa-chevron-right"
              priority={PRIORITIES.PRIMARY}
            >
              {t("common.returnPasswordManager")}
            </Button>
          )}
        </>
      )}
    </footer>
  );
}
