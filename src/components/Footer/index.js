import React from "react";
import {
  FooterContainer,
  FooterGrid,
  LogoContainer,
  FooterItem,
  FooterLink,
  SubTitle,
} from "./FooterElements";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterGrid>
          <LogoContainer href="#" to="home" smooth={true}>
            <Logo />
          </LogoContainer>

          <FooterItem>
            <SubTitle>Produtos</SubTitle>
            <FooterLink>
              <a href=".">Mobilia</a>
            </FooterLink>
            <FooterLink>
              <a href=".">Segurança</a>
            </FooterLink>
            <FooterLink>
              <a href=".">Design Interior</a>
            </FooterLink>
          </FooterItem>

          <FooterItem>
            <SubTitle>Mais Informações</SubTitle>
            <FooterLink>
              <a href=".">Contrato</a>
            </FooterLink>
            <FooterLink>
              <a href=".">Sobre nós</a>
            </FooterLink>
            <FooterLink>
              <a href=".">Termos e Condições</a>
            </FooterLink>
          </FooterItem>

          <FooterItem>
            <SubTitle>Redes Sociais</SubTitle>
            <FooterLink>
              <a href=".">Pinterest</a>
            </FooterLink>
            <FooterLink>
              <a href=".">Facebook</a>
            </FooterLink>
            <FooterLink>
              <a href=".">Instagram</a>
            </FooterLink>
          </FooterItem>
        </FooterGrid>
      </FooterContainer>
    </>
  );
};

export default Footer;
