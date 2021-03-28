const REACT_STYLED_TEMPLATE = `
import { action } from 'services/utils';

import { {CONSTANT}_ACTIONS } from './create-project.constants';

export const {COMPONENT}Actions = <const>{
  clear: () => action({CONSTANT}_ACTIONS.CLEAR),
};

export type T{COMPONENT}Actions = TActionCombiner<typeof {COMPONENT}Actions>;
`;

export default REACT_STYLED_TEMPLATE;
