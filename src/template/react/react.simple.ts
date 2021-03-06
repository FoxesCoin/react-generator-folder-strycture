const REACT_SIMPLE_TEMPLATE = `
import React, { FC } from 'react';

interface I{NAME}Props {

  className?: string;
}

export const {NAME}: FC<I{NAME}Props> = (props) => {
  const { className } = props;

  return <div className={className}></div>
};
`;

export default REACT_SIMPLE_TEMPLATE;
