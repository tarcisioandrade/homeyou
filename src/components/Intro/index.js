import React from "react";
import {
  Section,
  Title,
  Text,
  Button,
  ContainerB,
  BoxWithColor,
  ImgContainer,
  ContentFlex,
  Content,
  ButtonSecondary,
} from "./IntroElements";
import IntroIMG1 from "../../assets/imgs/photo-intro.jpg";
import IntroIMG2 from "../../assets/imgs/photo-intro2.jpg";

const Intro = () => {
  return (
    <>
      <Section>
        <ContentFlex>
          <Content>
            <Title>
              Ajudar você a encontrar o melhor conforto, é nossa prioridade.
            </Title>
            <Text>
              Encontre uma variedade de propriedades que combinam com você.
              Esqueça todas as dificuldades em encontrar uma residência
            </Text>
            <ContainerB>
              <Button href="#" decoration="none" Bcolor="#272727">
                Entre em Contato
              </Button>
              <Button margin="0 0 0 30px" href="#" Fcolor="#272727">
                Mais sobre nós
              </Button>
            </ContainerB>
          </Content>
          <ImgContainer bshadow="none">
            <img src={IntroIMG1} alt="Intro" />
          </ImgContainer>
        </ContentFlex>

        <ContentFlex mtop="100px">
          <ImgContainer>
            <img src={IntroIMG2} alt="Intro2" />
          </ImgContainer>
          <Content>
            <BoxWithColor>
              <Title Fcolor="#fff" fsize="28px">
                Design Minimalista
              </Title>
              <Text Fcolor="#fff" mbottom="0">
                Móveis apenas essenciais e com design moderno, além de
                revestimentos bonitos e em cores neutras para manter a casa
                sempre com um estilo clean e suave.
              </Text>
            </BoxWithColor>
            <ButtonSecondary href="#" decoration="underline" Fcolor="#272727">
              Quero saber mais sobre os designs
            </ButtonSecondary>
          </Content>
        </ContentFlex>
      </Section>
    </>
  );
};

export default Intro;
