// Libs
import React from 'react';
import { useHistory } from 'react-router-dom';

// Styled
import { Container } from '../../components/Container';
import { ButtonContainer } from '../../components/Button';
import {
  MainDiv,
  LeftDiv,
  RightDiv,
  ImgCharacters,
  ImgBrand,
} from './components/Container';
import { MainTitles } from '../../components/Text';

// Graphics
import Logo from '../../assets/logo-marvel.png';
import Characters from '../../assets/main-image.png';

function Main() {
  const history = useHistory();

  // Chama a tela que exibe a lista de heróis
  const callRoute = () => {
    history.push('/heroes');
  };

  return (
    <Container>
      <MainDiv>
        <LeftDiv>
          <ImgCharacters src={Characters} alt="Characters" />
        </LeftDiv>
        <RightDiv>
          <MainTitles>List of Heroes</MainTitles>
          <ImgBrand src={Logo} alt="Logo" />
          <ButtonContainer onClick={callRoute}>Pick ur Hero</ButtonContainer>
        </RightDiv>
      </MainDiv>
    </Container>
  );
}

export { Main };
