import styled from "@emotion/styled";
import NavItem from "./NavItem";

const getStatus = ({ activeStep, step, theme }) => {
  let [background, size, shadow, extra] = [
    theme.colors.strongGray,
    "40px",
    "none",
    "",
  ];

  if (step === activeStep) {
    background = theme.colors.secondary;
    size = "50px";
    shadow = `0px 0px 4px 1px ${theme.shadow}`;
    extra = `
      span:after {
        content: " ";
        display: block;
        position: relative;
        left: 0px;
        top: -15px;
        border: 25px solid;
        border-color: transparent transparent ${theme.colors.white} transparent;
      }
    `;
  }

  if (activeStep > step) {
    background = theme.colors.primary;
    extra = `
      span {
        font-family: FontAwesome;
        content: $fa-var-exclamation-triangle;
      }
    `;
  }

  return `
    background-color: ${background};
    width: ${size};
    height: ${size};
    box-shadow: ${shadow};
    span {
      line-height: ${size};
    }
    ${extra}
  `;
};

export const StyledNavItem = styled(NavItem)`
  border-radius: 50%;
  display: inline-flex;
  ${getStatus}
  margin-right: 50px;
  span {
    width: 100%;
    text-align: center;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
