import React, { Suspense } from "react";
import { Route } from "wouter";
import { WizardContextProvider } from "contexts/WizardContext";
import Spinner from "components/Spinner";
import "App.scss";

// Load Home page in lazy mode.
const LazyHome = React.lazy(() => import("pages/Home"));

// Load Wizard page in lazy mode.
const LazyWizard = React.lazy(() => import("pages/Wizard"));

/**
 * Application main component.
 */
const App = () => {
  return (
    <div className="App">
      <main className="App-content">
        <WizardContextProvider>
          <Suspense fallback={<Spinner loading />}>
            <Route component={LazyHome} path="/" />
            <Route component={LazyWizard} path="/wizard" />
          </Suspense>
        </WizardContextProvider>
      </main>
    </div>
  );
};

App.propTypes = {};

App.defaultProps = {};

export default App;
