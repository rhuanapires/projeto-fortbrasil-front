import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: ${colors.secondary};
  }
  body html #root {
    height: 100%;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;
