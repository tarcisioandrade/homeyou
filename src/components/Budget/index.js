import React from "react";
import { GalerySec } from "../Galery/GaleryElements";
import { Text, Title } from "../Intro/IntroElements";
import { ButtonBorder } from "./BudgetElements";

const Budget = () => {
  return (
    <>
      <GalerySec id="budget">
        <Title talign="center">Orçamento</Title>
        <Text talign="center">
          Interessado em entrar em contato com um de nossos profissionais?
        </Text>
        <ButtonBorder href="#">Entre em Contato</ButtonBorder>
      </GalerySec>
    </>
  );
};

export default Budget;
