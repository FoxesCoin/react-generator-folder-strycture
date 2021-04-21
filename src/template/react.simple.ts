const REACT_SIMPLE_TEMPLATE = `
import styled from 'styled-components';

import { TComponent } from 'typings/react';

interface IProps {

}

const Wrapper = styled.div\`\`;

export const {NAME}: TComponent<IProps> = (props) => {
  const { className } = props;

  return <Wrapper className={className}></Wrapper>
};
`;

export default REACT_SIMPLE_TEMPLATE;
