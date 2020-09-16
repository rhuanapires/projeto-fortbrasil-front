import React from 'react';
import { StatusCard, StatusNumber, StatusName, CharDetails } from './Styled';

// Componente que exibe o nome do detalhe e o valor
function HeroCard({ number, name }) {
  return (
    <CharDetails>
      <StatusCard>
        <StatusNumber>{number}</StatusNumber>
      </StatusCard>
      <StatusName>{name}</StatusName>
    </CharDetails>
  );
}

export default HeroCard;
