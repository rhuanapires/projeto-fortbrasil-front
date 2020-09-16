import styled from 'styled-components';
import { colors, metrics } from '../../../styles';

export const Banner = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  background-color: ${colors.heroesBg};
`;

export const SearchInput = styled.input`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1em;
  height: 5vh;
  width: 30%;
  border: ${(props) => (props.hasError ? '2px solid red' : '0px')};
  background-color: ${colors.white};
  padding: 1em;
  color: ${colors.mediumGray};
  display: block;
  &:focus {
    outline: none;
    border: 1px solid ${colors.primary};
    box-shadow: 0 0 15px ${colors.primary};
    -moz-box-shadow: 0px 0px 15px ${colors.primary};
    -webkit-box-shadow: 0px 0px 15px ${colors.primary};
  }
  @media (max-width: 800px) {
    width: 60%;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    justify-content: space-around;
  }
`;

export const HeroesList = styled.div`
  padding: 2vw 3vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3vh;
  align-items: center;
`;

export const HeroPicture = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: cover;
  width: 250px;
  height: 250px;
  margin: 1.5vh auto;
  position: relative;
  transition: 0.6;
  cursor: pointer;
  &:hover {
    -webkit-filter: grayscale(100);
    filter: grayscale(100);
    transition: 0.6s;
  }
  &:active {
    transition: 0.6s;
    opacity: 0.5;
  }
`;

export const HeroCardName = styled.div`
  background-color: ${colors.secondary}dd;
  height: 40px;
  width: 250px;
  bottom: 0;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const HeroName = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: ${colors.white};
  margin: auto;
`;

export const PaginationButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  background: transparent;
  font-size: 1.4vh;
  padding: 0vh 0.5vh;
  border: ${metrics.border};
  color: ${colors.white};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1em;
  font-weight: 400;
  text-transform: uppercase;
  transition: 0.5s;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:active {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    opacity: 0.2;
    transition: 0.5s;
  }
  &:disabled {
    color: ${colors.white}80;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    opacity: 0.5;
  }
`;

export const PaginationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2vh;
`;

export const LoadDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 56vh;
  @media (max-width: 500px) {
    max-height: 100vh;
  }
`;
export const LoadGif = styled.img`
  width: 15vh;
  margin: 2vh;
`;

export const LoadText = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.5em;
  color: ${colors.background};
  text-transform: uppercase;
  text-align: center;
`;
export const MessageIcon = styled.img`
  width: 50vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ErrorText = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1em;
  margin: 0.5em 2em;
  color: ${colors.background};
  text-align: center;
`;

export const GridHeroes = styled.div``;
