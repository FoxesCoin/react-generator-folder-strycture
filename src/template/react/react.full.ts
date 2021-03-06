const REACT_FULL_TEMPLATE = `
import React, { FC } from 'react';

import { use{NAME}State } from './{COMPONENT}.state';

import { {NAME}Styled } from './{COMPONENT}.styled';

interface I{NAME}Props {

  className?: string;
}

export const {NAME}: FC<I{NAME}Props> = (props) => {
  const { className } = props;
  const {} = use{NAME}State();

  return <{NAME}Styled.Wrapper className={className}></{NAME}Styled.Wrapper>
};
`;
export default REACT_FULL_TEMPLATE;
