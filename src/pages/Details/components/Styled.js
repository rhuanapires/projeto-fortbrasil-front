import styled from 'styled-components';
import { colors } from '../../../styles';
import { Titles } from '../../../components/Text';

export const HeroDetailImage = styled.img`
  border-radius: 1em;
  margin: 0vh 0vh 0vh;
  width: 500px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const HeroTexts = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 60%;
  padding-left: 3vw;
  @media (max-width: 800px) {
    width: 100vw;
    max-width: unset;
    margin-left: 0vw;
    justify-content: flex-start;
  }
`;

export const HeroName = styled(Titles)`
  color: ${colors.white};
  text-align: ${(props) => (props.hasDescription ? 'left' : 'center')};
  font-size: ${(props) => (props.hasDescription ? '4em' : '5em')};
  margin: 0vw 0vw 2vw;
  @media (max-width: 800px) {
    margin: 2vw 0vw;
    font-size: ${(props) => (props.hasDescription ? '3em' : '4em')};
  }
  @media (max-width: 600px) {
    margin: 2vw 0vw;
    font-size: ${(props) => (props.hasDescription ? '2em' : '3em')};
  }
`;
export const HeroDescriptionBold = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  color: ${colors.white};
  font-size: 1.6em;
  font-weight: bold;
  margin: 1vh 0vh;
  @media (max-width: 800px) {
    font-size: 1.4em;
  }
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

export const HeroDescription = styled(HeroDescriptionBold)`
  color: ${colors.white};
  font-size: 1.3em;
  line-height: 1.4;
  font-weight: normal;
  @media (max-width: 800px) {
    font-size: 1.2em;
  }
  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

export const HeroInfo = styled.div`
  background-color: ${colors.heroesBg};
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 9vh 3vw 2vh;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const HeroDetails = styled(HeroTexts)`
  background-color: ${colors.secondary};
  max-width: none;
  margin: 0;
  padding: 3vw;
  text-align: left;
`;

export const TitleDetails = styled(Titles)`
  text-align: left;
  padding-bottom: 3vh;
`;

export const HeroStatus = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const StatusCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vh;
  height: 20vh;
  border-radius: 100vh;
  border: 0.6vw solid ${colors.white};
  align-self: center;
  text-align: center;
  justify-content: center;
  @media (max-width: 800px) {
    max-width: 100%;
    margin-left: 0vw;
  }
`;

export const StatusNumber = styled(Titles)`
  font-size: 6vh;
  margin-left: 0;
`;

export const StatusName = styled(Titles)`
  font-size: 3vh;
  font-weight: normal;
  margin-left: 0;
  text-transform: none;
  padding: 1vh 0vh;
`;

export const CharDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 3vw 1vw;
`;
