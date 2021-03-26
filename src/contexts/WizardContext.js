import React, { useState } from "react";
import Spinner from "components/Spinner";

const DEFAULT_FORM_VALUES = {
  accept: false,
  password: "",
  repeatPassword: "",
  hint: "",
};

const Context = React.createContext({});

export function WizardContextProvider({ children }) {

  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
  const [isValid, setIsValid] = useState(false);
  const [passMgrCreated, setPassMgrCreated] = useState(false);
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setFormValues(DEFAULT_FORM_VALUES);
    setIsValid(false);
    setPassMgrCreated(false);
  }

  return (<Context.Provider value={{
    formValues,
    setFormValues,
    isValid,
    setIsValid,
    passMgrCreated,
    setPassMgrCreated,
    setLoading,
    reset
  }}>
    <Spinner loading={loading} />
    {children}
  </Context.Provider>);

}

export default Context;