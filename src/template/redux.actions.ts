const REACT_STYLED_TEMPLATE = `
import { action } from 'services/utils';

import { {CONSTANT}_ACTIONS as Action } from './{COMPONENT}.constants';

export const {NAME}Actions = <const>{
  clear: () => action(Action.clear),
};

export type T{NAME}Actions = TActionCombiner<typeof {NAME}Actions>;
`;

export default REACT_STYLED_TEMPLATE;
