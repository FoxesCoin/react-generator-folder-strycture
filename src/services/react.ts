import { paramCase } from 'param-case';
import * as vscode from 'vscode';

import { generateFileByTemplate, getDirection, getFolderDirection, parseTemplate } from './folder';

export type TGenerateType = "simple" | "styled" | "full";
export const generateReact = async (uri: any, type: TGenerateType) => {
	const inputName = await vscode.window.showInputBox({
		prompt: "Enter component name",
	});

	if (!inputName || inputName.length === 0) {
		return await vscode.window.showErrorMessage(
			`Failed: Component name can not be empty!`
		);
	}

	if (type === "simple") {
		const dir = getDirection(uri);
		return generateFileByTemplate({
			dir,
			file: "react.simple",
			fileName: `${paramCase(inputName)}.tsx`,
			rootComponentName: inputName,
		});
	}

	const dir = getFolderDirection(uri, inputName);
	const createFile = parseTemplate({ dir, name: inputName });
	await generateFileByTemplate({
		dir,
		rootComponentName: inputName,
		file: "react.index",
		fileName: "index.ts",
	});
	await createFile({
		file: type === "styled" ? "react.component-styled" : "react.full",
		formate: "tsx",
	});
	await createFile({ file: "react.styled", formate: "styled.ts" });
	if (type === "full") {
		await createFile({ file: "react.state", formate: "state.ts" });
	}
};
