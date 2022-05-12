import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.footer`
  background: #f9f9f9;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 1fr 1fr;
  max-width: 1200px;
  margin-top: 160px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 24px;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LogoContainer = styled(LinkS)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterItem = styled.ul`
  list-style: none;
  color: #272727;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FooterLink = styled.li`
  line-height: 2;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  & a {
    color: #272727;
    text-decoration: none;
  }
`;

export const SubTitle = styled.li`
  font-weight: bolder;
  line-height: 2;
`;
