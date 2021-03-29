import styled from "@emotion/styled";
import { Link as LinkWouter } from "wouter";

export const PRIORITIES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERCIARY: "terciary",
};

const getPriorityStyle = ({ priority, theme }) => {
  let [background, color] = ["", ""];

  switch (priority) {
    case PRIORITIES.PRIMARY:
      background = theme.colors.white;
      color = theme.colors.primary;
      break;
    case PRIORITIES.TERCIARY:
      background = theme.colors.white;
      color = theme.colors.secondary;
      break;
    case PRIORITIES.SECONDARY:
    default:
      background = theme.colors.secondary;
      color = theme.colors.white;
      break;
  }

  return `
    background-color: ${background};
    color: ${color};
    padding: ${theme.paddings.all};
    border-radius: ${theme.borders.radius.normal};
    &:disabled {
      background-color: ${theme.colors.strongGray};
    }
  `;
};

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  ${getPriorityStyle}
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: not-allowed;
  }
  i {
    margin-left: 4px;
  }
`;

export const StyledLink = StyledButton.withComponent(LinkWouter);
