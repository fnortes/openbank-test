// @flow
import * as React from "react";

type Props = {
  className: string,
  step: number,
  activeStep: number,
};

export default function NavItem({
  className,
  step,
  activeStep = 1,
}: Props): React.Node {
  return (
    <li className={className}>
      <span>
        {activeStep > step ? (
          <i className="fa fa-check" aria-hidden="true" />
        ) : (
          step
        )}
      </span>
    </li>
  );
}
