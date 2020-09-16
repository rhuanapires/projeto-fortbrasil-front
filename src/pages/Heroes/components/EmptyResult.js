import React from 'react';
import EmptyIcon from '../../../assets/empty-icon.png';
import ErrorIcon from '../../../assets/error-icon.png';

import { LoadDiv, MessageIcon } from './Styled';

function EmptyResult({ isError }) {
  return (
    <LoadDiv>
      <MessageIcon src={isError ? ErrorIcon : EmptyIcon} />
    </LoadDiv>
  );
}

export default EmptyResult;
