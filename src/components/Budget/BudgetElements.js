import styled from "styled-components";

export const ButtonBorder = styled.a`
  display: block;
  text-align: center;
  font-size: 18px;
  padding: 0.6rem 1rem;
  border: 1px solid currentColor;
  color: #272727;
  font-weight: bold;
  max-width: 225px;
  margin: 0 auto;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`;
