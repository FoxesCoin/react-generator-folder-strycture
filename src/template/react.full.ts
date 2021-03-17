const REACT_FULL_TEMPLATE = `
import { TComponent } from 'typings/react';

import { use{NAME}State } from './{COMPONENT}.state';

import { {NAME}Styled as Styled } from './{COMPONENT}.styled';

interface I{NAME}Props {
}

export const {NAME}: TComponent<I{NAME}Props> = (props) => {
  const { className } = props;
  const {} = use{NAME}State();

  return <Styled.Wrapper className={className}></Styled.Wrapper>
};
`;
export default REACT_FULL_TEMPLATE;
