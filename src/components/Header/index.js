// Libs
import React from 'react';
import { useHistory } from 'react-router-dom';
// Icons
import { FaChevronLeft } from 'react-icons/fa';
// Styled Components
import {
  HeaderButton,
  HeaderContainer,
  MiniLogoContainer,
} from './components/Styled';
// Images
import MiniLogo from '../../assets/minilogo2.png';

function Header({ style = {} }) {
  const history = useHistory();

  return (
    // Cabeçalho da Página
    <HeaderContainer style={style}>
      <HeaderButton onClick={() => history.goBack()}>
        <FaChevronLeft size={20} />
        back
      </HeaderButton>
      <MiniLogoContainer src={MiniLogo} alt="Logo List of Heroes" />
    </HeaderContainer>
  );
}

export default Header;
