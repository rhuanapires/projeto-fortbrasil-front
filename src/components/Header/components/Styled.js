import styled from 'styled-components';
import { colors, metrics } from '../../../styles';

export const HeaderButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  background: transparent;
  font-size: 1em;
  padding: 0.5em 0em;
  border: ${metrics.border};
  color: ${colors.white};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    opacity: 0.2;
  }
  &:active {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    opacity: 0.5;
    transition: 0.5s;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7%;
  background-color: ${colors.secondary}cc;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  flex: 1;
  align-items: center;
  padding: 0em 3vw;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 600px) {
    height: 5%;
  }
`;

export const MiniLogoContainer = styled.img`
  height: 90%;
  display: block;
  margin-left: auto;
`;
