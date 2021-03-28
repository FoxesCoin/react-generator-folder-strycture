import { getDirection, parseTemplate } from './folder';

export const generateRedux = (uri: any) => {
	const dir = getDirection(uri);
	const name = dir.slice(dir.lastIndexOf("\\") + 1);
	const createFile = parseTemplate({ dir, name });

	createFile({ file: "redux.actions", formate: "actions.ts" });
	createFile({ file: "redux.constants", formate: "constants.ts" });
	createFile({ file: "redux.reducer", formate: "reducer.ts" });
};
