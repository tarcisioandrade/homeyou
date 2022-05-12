import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as Hamb } from "../../assets/svgs/hamb.svg";
import { ReactComponent as Search } from "../../assets/svgs/search.svg";
import { ReactComponent as User } from "../../assets/svgs/user.svg";
import { ReactComponent as Heart } from "../../assets/svgs/heart.svg";
import { ReactComponent as Close } from "../../assets/svgs/close.svg";
import {
  Header,
  Nav,
  NavClose,
  NavHamb,
  NavIcons,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({ active, setActive }) => {
  return (
    <>
      <Header id="home">
        <NavLogo to="/">
          <Logo />
          Homeyou
        </NavLogo>
        <NavHamb>
          <Hamb onClick={setActive} />
        </NavHamb>
        <Nav active={active}>
          <NavMenu>
            <NavClose>
              <Close onClick={setActive} />
            </NavClose>
            <NavItem>
              <NavLinks href="#" to="/">
                Inicio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} href="#" to="galery">
                Galeria
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} href="#" to="budget">
                Orçamento
              </NavLinks>
            </NavItem>
            <NavIcons>
              <NavItem>
                <NavLinks href="#" to="/">
                  <User />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#" to="galery">
                  <Heart />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#" to="contact">
                  <Search />
                </NavLinks>
              </NavItem>
            </NavIcons>
          </NavMenu>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
