import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  color: #272727;
  text-transform: uppercase;
  font-weight: bolder;
  text-decoration: none;

  & svg {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    & svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const NavHamb = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    position: fixed;
    right: ${({ active }) => (active ? "0" : "-100%")};
    opacity: ${({ active }) => (active ? "1" : "0")};
    top: 0;
    padding: 24px 16px 0;
    background-color: #e7e4e4;
    height: 100vh;
    min-width: 200px;
    transition: 0.3s ease-in;
  }
`;

export const NavClose = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
    & svg {
      display: block;
      color: #272727;
      width: 30px;
      height: 30px;
      margin-left: auto;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    display: initial;
  }
  list-style: none;
`;

export const NavItem = styled.li`
  @media screen and (max-width: 768px) {
    line-height: 80px;
    text-align: center;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #272727;
  text-decoration: none;
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 2rem;
  & li:nth-child(2) {
    margin: 0 16px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0rem;
  }
`;
