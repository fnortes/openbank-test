import styled from "@emotion/styled";

const getBorderRadius = ({ theme }) => {
  return `border-radius: ${theme.borders.radius.circle};`;
};

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.strongGray};
  opacity: 0.5;
`;

export const Loader = styled.div`
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  ${getBorderRadius}
  border: 3px solid transparent;
  border-top-color: ${(props) => props.theme.colors.primary};
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    ${getBorderRadius}
    border: 3px solid transparent;
    border-top-color: ${(props) => props.theme.colors.secondary};
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
  }
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    ${getBorderRadius}
    border: 3px solid transparent;
    border-top-color: ${(props) => props.theme.colors.highlight};
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
