import styled from "@emotion/styled";

export const StyledInputField = styled.label`
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
  input:not([type="checkbox"]) {
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 4px;
    letter-spacing: 2px;
    font-size: 1.5em;
    outline: none;
    color: ${(props) => props.theme.colors.secondary};
    margin-top: 10px;
    &::placeholder {
      font-size: 0.6em;
    }
    &.max-fit {
      width: 100%;
      box-sizing: border-box;
    }
    &.error {
      color: ${(props) => props.theme.colors.error};
      border-color: ${(props) => props.theme.colors.error};
    }
  }
  p {
    color: ${(props) => props.theme.colors.error};
    font-size: 0.8em;
  }
  i.inside {
    position: relative;
    left: -1.5em;
    font-size: 1.5em;
    cursor: pointer;
  }
  &::before {
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 40px;
    top: 80px;
    background: transparent;
    will-change: transform, opacity;
    border-radius: 0 0 0 4px;
  }
  &:focus-within::before {
    background: ${(props) => props.theme.colors.highlightForm};
  }
`;
