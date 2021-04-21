const REDUX_REDUCER_TEMPLATE = `
import { T{NAME}Actions } from './{COMPONENT}.actions';

import {
  {CONSTANT}_ACTIONS as Action, {CONSTANT}_DEFAULT, I{NAME}Reducer
} from './{COMPONENT}.constants';

export const reducer{NAME} = (
  state: I{NAME}Reducer = {CONSTANT}_DEFAULT,
  action: T{NAME}Actions
): I{NAME}Reducer => {
  switch (action.type) {
    case Action.clear:
      return {CONSTANT}_DEFAULT;

    default:
      return state ?? {CONSTANT}_DEFAULT;
  }
};

`;

export default REDUX_REDUCER_TEMPLATE;
