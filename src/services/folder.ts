const vscode = require("vscode");
const fse = require("fs-extra");
const fs = require("fs");
const path = require("path");
import { constantCase, paramCase, pascalCase } from 'change-case';

import { TTemplate } from '../template';

interface IGenerateFile {
	dir: string;
	file: TTemplate;
	fileName: string;
	rootComponentName: string;
}

type TParseTemplate = (utils: {
	dir: string;
	name: string;
}) => (params: { formate: string; file: TTemplate }) => Promise<void>;

const generateFile = (file: string, data: string) =>
	new Promise((resolve) => {
		let output = fse.outputFile(file, data);
		resolve(output);
	});

export const getDirection = (uri: any): string => {
	if (uri && fs.lstatSync(uri.fsPath).isDirectory()) {
		return uri.fsPath;
	} else if (uri) {
		return path.dirname(uri.fsPath);
	}
	return vscode.workspace.rootPath;
};

export const getFolderDirection = (uri: any, name: string) => {
	const DIRECTION = getDirection(uri);
	const COMPONENT = paramCase(name);
	const PATH = `${DIRECTION}/${paramCase(COMPONENT)}`;
	fse.mkdirsSync(PATH);

	return PATH;
};

export const generateFileByTemplate = async (params: IGenerateFile) => {
	const { dir, file, fileName, rootComponentName } = params;
	const importData = await import(`../template/${file}`);

	const COMPONENT = paramCase(rootComponentName);
	const NAME = pascalCase(rootComponentName);

	const CONTENTS = importData.default
		.toString()
		.trim()
		.replace(/{COMPONENT}/g, COMPONENT)
		.replace(/{CONSTANT}/g, constantCase(rootComponentName))
		.replace(/{NAME}/g, NAME);

	const PATH = `${dir}/${fileName}`;

	await generateFile(PATH, CONTENTS);
};

export const parseTemplate: TParseTemplate = (utils) => (parameters) =>
	generateFileByTemplate({
		...utils,
		...parameters,
		rootComponentName: utils.name,
		fileName: `${paramCase(utils.name)}.${parameters.formate}`,
	});
