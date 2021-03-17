const REACT_SIMPLE_TEMPLATE = `
import { TComponent } from 'typings/react';

interface I{NAME}Props {

}

export const {NAME}: TComponent<I{NAME}Props> = (props) => {
  const { className } = props;

  return <div className={className}></div>
};
`;

export default REACT_SIMPLE_TEMPLATE;
