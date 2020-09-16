import styled from 'styled-components';
import { colors } from '../../styles';

export const MainTitles = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  color: ${colors.primary};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 3em;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 1.8em;
  }
`;

export const Titles = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 2em;
  color: ${colors.background};
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const SubTitles = styled(Titles)`
  font-size: 1.5em;
`;

export const TextDetails = styled(Titles)`
  font-size: 0.8em;
  color: ${colors.mediumGray};
  text-transform: unset;
`;
