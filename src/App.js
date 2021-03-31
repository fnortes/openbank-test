// @flow
import * as React from "react";
import { Suspense } from "react";
import { Route } from "wouter";
import { WizardContextProvider } from "contexts/WizardContext";
import { Main } from "./Main";
import Spinner from "components/Spinner";
import { AppTheme } from "./AppTheme";

// Load Home page in lazy mode.
const LazyHome = React.lazy(() => import("pages/Home"));

// Load Wizard page in lazy mode.
const LazyWizard = React.lazy(() => import("pages/Wizard"));

export default function App(): React.Node {
  return (
    <AppTheme>
      <Main>
        <WizardContextProvider>
          <Suspense fallback={<Spinner loading />}>
            <Route component={LazyHome} path="/" />
            <Route component={LazyWizard} path="/wizard" />
          </Suspense>
        </WizardContextProvider>
      </Main>
    </AppTheme>
  );
}
