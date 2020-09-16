import React from 'react';
import LoadingGif from '../../../assets/loading.gif';
import { LoadDiv, LoadGif, LoadText } from './Styled';

function Loading() {
  return (
    <LoadDiv>
      <LoadGif src={LoadingGif} />
      <LoadText>Loading</LoadText>
    </LoadDiv>
  );
}

export default Loading;
