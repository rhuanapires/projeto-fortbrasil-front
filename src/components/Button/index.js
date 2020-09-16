import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const ButtonContainer = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  background: linear-gradient(
    0deg,
    ${colors.textButtonSecondary},
    ${colors.textButtonPrimary}
  );
  font-size: 1em;
  margin: 1em;
  padding: 0em 3.4em;
  height: 5vh;
  border: ${metrics.border};
  color: ${colors.white};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${colors.primary};
    border-color: ${colors.primary};
    border-width: 1px;
    border-style: solid;
    transition: 0.5s;
  }
  &:active {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    opacity: 0.5;
    transition: 0.5s;
  }
`;
