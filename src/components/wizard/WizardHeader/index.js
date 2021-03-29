// @flow
import * as React from "react";
import useWizard from "hooks/useWizard";
import { STEPS } from "contexts/constants";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { StyledNavItem } from "./StyledNavItem";
import { Separator } from "./Separator";

export default function WizardHeader(): React.Node {
  const { activeStep } = useWizard();

  return (
    <Header>
      <Nav>
        <ul>
          {STEPS.map((step) => (
            <StyledNavItem key={step} step={step} activeStep={activeStep} />
          ))}
        </ul>
        {STEPS.map((step, index) =>
          index + 1 < STEPS.length ? (
            <Separator key={step} step={step} activeStep={activeStep} />
          ) : null
        )}
      </Nav>
    </Header>
  );
}
