import styled from 'styled-components';
import { colors } from '../../../../styles';

export const MainDiv = styled.div`
  background-color: ${colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 92vh;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    justify-content: space-around;
    max-height: 150vh;
  }
`;

export const LeftDiv = styled.div`
  text-align: center;
  display: block;
`;

export const RightDiv = styled.div`
  text-align: center;
  display: block;
`;

export const ImgCharacters = styled.img`
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ImgBrand = styled.img`
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
