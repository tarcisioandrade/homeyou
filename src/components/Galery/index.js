import React from "react";
import { ContentFlex, Text, Title } from "../Intro/IntroElements";
import Galery1 from "../../assets/imgs/photo-galery1.jpg";
import Galery2 from "../../assets/imgs/photo-galery2.jpg";
import Galery3 from "../../assets/imgs/photo-galery3.jpg";
import { GaleryItem, GalerySec } from "./GaleryElements";

const Galery = () => {
  return (
    <>
      <GalerySec id="galery">
        <Title talign="center">Galeria</Title>
        <Text talign="center">
          Se você está entediado com a aparência da decoração de interiores da
          casa comuns, trabalhamos com designs diferentes e inovadores.
        </Text>
        <ContentFlex>
          <GaleryItem>
            <img src={Galery1} alt="Galery1" />
          </GaleryItem>
          <GaleryItem>
            <img src={Galery2} alt="Galery2" />
          </GaleryItem>
          <GaleryItem>
            <img src={Galery3} alt="Galery3" />
          </GaleryItem>
        </ContentFlex>
      </GalerySec>
    </>
  );
};

export default Galery;
