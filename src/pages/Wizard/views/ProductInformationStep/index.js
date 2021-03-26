import React, { useContext, useEffect } from "react";
import { withTranslation } from "react-i18next";
import WizardContext from "contexts/WizardContext";
import img1 from 'assets/img/group.svg';
import img2 from 'assets/img/group-3.svg';

/**
 * First Wizard step.
 * 
 * @component
 * @example
 * return (
 *   <ProductInformationStep />
 * )
 */
const ProductInformationStep = ({ t }) => {

  const { formValues: { accept }, setFormValues, setIsValid } = useContext(WizardContext);

  useEffect(() => {
    setIsValid(accept);
  }, [accept, setIsValid]);

  const handleOnChange = event => {
    const ischecked = event.target.checked;
    setFormValues(prevFormValues => ({ ...prevFormValues, accept: ischecked }));
    setIsValid(ischecked);
  }

  return (<section>
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
      /> <strong>{t("productInformation.accept")}</strong>
    </label>
  </section>);

};

ProductInformationStep.propTypes = {};

ProductInformationStep.defaultProps = {};

export default withTranslation()(ProductInformationStep);