import styled from "@emotion/styled";

export const StyledMessageOk = styled.div`
  i {
    font-size: 5em;
    text-align: center;
    color: ${(props) => props.theme.colors.highlight};
    display: inline-grid;
    padding-right: 10px;
  }
  h1 {
    display: inline-grid;
    vertical-align: top;
  }
`;

export const StyledMessageKo = styled(StyledMessageOk)`
  i {
    color: ${(props) => props.theme.colors.error};
  }
`;
