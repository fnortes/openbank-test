import styled from "@emotion/styled";

export const Nav = styled.nav`
  height: 100px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px -2px 4px -2px ${(props) => props.theme.shadow};
  position: fixed;
  overflow: hidden;
  z-index: 999;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    z-index: 1;
  }
`;
