import styled from "styled-components";

export const Section = styled.section`
  max-width: 1200px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
`;

export const ContentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ mtop }) => mtop || "0"};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  color: ${({ Fcolor }) => Fcolor || "#272727"};
  line-height: 1.4;
  margin-bottom: 1.5rem;
  font-size: ${({ fsize }) => fsize || "40px"};
  text-align: ${({ talign }) => talign || "initial"};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  color: ${({ Fcolor }) => Fcolor || "#797979"};
  line-height: 1.4;
  margin-bottom: ${({ mbottom }) => mbottom || "1.5rem"};
  font-size: 18px;
  max-width: 550px;
  text-align: ${({ talign }) => talign || "initial"};
  margin-left: ${({ talign }) => (talign ? "auto" : "initial")};
  margin-right: ${({ talign }) => (talign ? "auto" : "initial")};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContainerB = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.a`
  display: block;
  color: ${({ Fcolor }) => Fcolor || "white"};
  padding: 0.6rem 1rem;
  text-decoration: ${({ decoration }) => decoration};
  background: ${({ Bcolor }) => Bcolor || "none"};
  font-weight: 600;
  font-size: 18px;
  margin: ${({ margin }) => margin};
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin: 0;
  }
`;

export const ButtonSecondary = styled.a`
  display: block;
  padding: 0.6rem 0;
  font-size: 18px;
  color: #272727;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const BoxWithColor = styled.div`
  padding: 16px;
  background: #272727;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  & img {
    transform: ${({ bshadow }) => bshadow || "translate3d(50px, 50px, 0)"};
    box-shadow: ${({ bshadow }) => bshadow || "-40px -48px 0 0 #272727"};
  }
  @media screen and (max-width: 1024px) {
    flex: 1.3;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
