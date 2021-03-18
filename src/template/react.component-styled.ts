const REACT_COMPONENT_STYLED_TEMPLATE = `
import { TComponent } from 'typings/react';

import { {NAME}Styled as Styled } from './{COMPONENT}.styled';

interface I{NAME}Props {
}

export const {NAME}: TComponent<I{NAME}Props> = (props) => {
  const { className } = props;

  return <Styled.Wrapper className={className}></Styled.Wrapper>
};
`;
export default REACT_COMPONENT_STYLED_TEMPLATE;
