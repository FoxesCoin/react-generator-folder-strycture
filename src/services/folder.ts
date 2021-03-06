const vscode = require("vscode");
const fse = require("fs-extra");
const fs = require("fs");
const path = require("path");
import { pascalCase, paramCase } from "change-case";

import { ITemplate } from "../template";

interface IGenerateFileByTemplate<
	F extends keyof ITemplate,
	I extends keyof ITemplate[F]
> {
	dir: string;
	folder: F;
	file: I;
	fileName: string;
	rootComponentName: string;
}

type TParseTemplate = <
	F extends keyof ITemplate,
	I extends keyof ITemplate[F]
>(params1: {
	dir: string;
	name: string;
	folder: F;
}) => (params2: { formate: string; file: I }) => Promise<void>;

const generateFile = (file: string, data: string) =>
	new Promise((resolve) => {
		let output = fse.outputFile(file, data);
		resolve(output);
	});

export const getDirection = (uri: any, name: string) => {
	const COMPONENT = paramCase(name);
	let direction;

	if (uri && fs.lstatSync(uri.fsPath).isDirectory()) {
		direction = uri.fsPath;
	} else if (uri) {
		direction = path.dirname(uri.fsPath);
	} else {
		direction = vscode.workspace.rootPath;
	}

	const DIRECTION = `${direction}/${paramCase(COMPONENT)}`;
	fse.mkdirsSync(DIRECTION);

	return DIRECTION;
};

export const generateFileByTemplate = async <
	F extends keyof ITemplate,
	I extends keyof ITemplate[F]
>(
	params: IGenerateFileByTemplate<F, I>
) => {
	const { dir, folder, file, fileName, rootComponentName } = params;
	const importData = await import(`../template/${folder}/${file}`);

	const COMPONENT = paramCase(rootComponentName);
	const NAME = pascalCase(rootComponentName);

	const CONTENTS = importData.default
		.toString()
		.trim()
		.replace(/{COMPONENT}/g, COMPONENT)
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
