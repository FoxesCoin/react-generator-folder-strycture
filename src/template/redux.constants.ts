const REDUX_CONSTANTS_TEMPLATE = `
export interface I{NAME}Reducer {};

export const {CONSTANT}_ACTIONS = <const>{
  clear: '@{NAME}/clear',
};

export const {CONSTANT}_DEFAULT: I{NAME}Reducer  = {};
`;

export default REDUX_CONSTANTS_TEMPLATE;
