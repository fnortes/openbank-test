// @flow
import * as React from "react";
import { StyledButton, StyledLink } from "./StyledButton";

type Props = {
  children: React.Node,
  align?: string,
  disabled?: boolean,
  priority?: string,
  iconClass?: string,
  type?: string,
  onClick?: null | ((event: SyntheticEvent<HTMLButtonElement>) => void),
  to?: string,
};

export default function Button({
  children,
  align = "left",
  disabled = false,
  priority = "secondary",
  iconClass = "",
  type = "button",
  onClick = null,
  to = "",
}: Props): React.Node {
  const icon: React.Node =
    iconClass !== "" ? (
      <i className={`fa ${iconClass}`} aria-hidden="true" />
    ) : null;

  return (
    <div className={align}>
      {to !== "" ? (
        <StyledLink priority={priority} to={to}>
          {children}
          {icon}
        </StyledLink>
      ) : (
        <StyledButton
          type={type}
          priority={priority}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
          {icon}
        </StyledButton>
      )}
    </div>
  );
}
