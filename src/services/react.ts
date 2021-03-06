import * as vscode from "vscode";

import { generateFileByTemplate, getDirection, parseTemplate } from "./folder";

export const generateReact = async (uri: any, isFullReactTemplate: boolean) => {
	const inputName = await vscode.window.showInputBox({
		prompt: "Enter component name",
	});

	if (!inputName || inputName.length === 0) {
		return await vscode.window.showErrorMessage(
			`Failed: Component name can not be empty!`
		);
	}

	const dir = getDirection(uri, inputName);
	const createFile = parseTemplate({ dir, folder: "react", name: inputName });

	await generateFileByTemplate({
		dir,
		folder: "react",
		rootComponentName: inputName,
		file: "react.index",
		fileName: "index.ts",
	});
	await createFile({
		file: isFullReactTemplate ? "react.full" : "react.simple",
		formate: "tsx",
	});

	if (isFullReactTemplate) {
		await createFile({ file: "react.state", formate: "state.ts" });
		await createFile({ file: "react.styled", formate: "styled.ts" });
	}
};
