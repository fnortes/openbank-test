// @flow
import * as React from "react";
import { useTranslation } from "react-i18next";
import useWizard from "hooks/useWizard";
import img1 from "assets/img/group.svg";
import img2 from "assets/img/group-3.svg";

export default function ProductInformationStep(): React.Node {
  const { t } = useTranslation();

  const {
    formValues: { accept },
    updateStep1Values,
  } = useWizard();

  const handleOnChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const ischecked = event.target.checked;

    updateStep1Values(ischecked);
  };

  return (
    <section>
      <h1>{t("common.createPasswordManager")}</h1>
      <article className="grid center">
        <div>
          <img src={img1} alt={t("productInformation.saveAnyInfo.title")} />
          <p>{t("productInformation.saveAnyInfo.paragraph")}</p>
        </div>
        <div>
          <img src={img2} alt={t("productInformation.masterKey.title")} />
          <p>{t("productInformation.masterKey.paragraph")}</p>
        </div>
      </article>
      <article>
        <h4>{t("productInformation.howItWorks.title")}</h4>
        <p>{t("productInformation.howItWorks.paragraph")}</p>
        <h4>{t("productInformation.infoToSave.title")}</h4>
        <p>{t("productInformation.infoToSave.paragraph")}</p>
      </article>
      <label>
        <input
          type="checkbox"
          name="accept"
          checked={accept}
          onChange={handleOnChange}
        />{" "}
        <strong>{t("productInformation.accept")}</strong>
      </label>
    </section>
  );
}
