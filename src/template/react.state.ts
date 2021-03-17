const REACT_STATE_TEMPLATE = `
import { useState } from 'react';

interface I{NAME}State {}

const INITIAL_STATE: I{NAME}State = {};

export const use{NAME}State = () => {
  const [state, setState] = useState(INITIAL_STATE);

  return { ...state };
};
`;

export default REACT_STATE_TEMPLATE;
