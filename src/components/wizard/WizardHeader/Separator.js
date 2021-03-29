import styled from "@emotion/styled";

export const Separator = styled.div`
  background-color: ${({ step, activeStep, theme }) =>
    activeStep > step ? theme.colors.primary : theme.colors.strongGray};
  height: 4px;
  width: 70px;
  position: fixed;
  z-index: 0;
  &:nth-of-type(1) {
    margin-left: -100px;
  }
  &:nth-of-type(2) {
    margin-left: 100px;
  }
`;
