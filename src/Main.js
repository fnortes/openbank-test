import styled from "@emotion/styled";

export const Main = styled.main`
  color: ${(props) => props.theme.colors.secondary};
  a {
    font-weight: bold;
    text-decoration: none;
  }
  section,
  footer {
    padding: 1rem 4rem;
  }
  h1::after {
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 40px;
    margin-top: 10px;
    background: ${(props) => props.theme.colors.highlight};
    will-change: transform, opacity;
    color: ${(props) => props.theme.colors.secondary};
  }
  h3 {
    color: ${(props) => props.theme.colors.primary};
  }
  p,
  h4 {
    color: ${(props) => props.theme.colors.secondary};
  }
  .bye-bye {
    margin: 4rem 0 0;
    text-align: center;
    background: ${(props) => props.theme.colors.terciary};
    border: 1px solid #ddd;
    color: #ababab;
    padding: 1rem;
    border-radius: 4px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(${(props) => props.theme.widths.normal}, 1fr)
    );
    gap: 16px;
    img {
      height: 250px;
      object-fit: cover;
    }
    &.small {
      grid-template-columns: repeat(
        auto-fit,
        minmax(${(props) => props.theme.widths.small}, 1fr)
      );
    }
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  .small {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.strongGray};
  }
`;
