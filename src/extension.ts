import * as vscode from 'vscode';

import { generateReact, TGenerateType } from './services/react';
import { generateRedux } from './services/redux';

interface IReactCommand {
	type: TGenerateType;
	id: string;
}

const COMMAND_LIST: IReactCommand[] = [
	{
		type: "simple",
		id: "extension.generateReactTemplate",
	},
	{
		type: "full",
		id: "extension.generateReactFullTemplate",
	},
	{
		type: "styled",
		id: "extension.generateReactStyledTemplate",
	},
];

export function activate(context: vscode.ExtensionContext) {
	COMMAND_LIST.forEach((command) => {
		const disposable = vscode.commands.registerCommand(command.id, (uri) => {
			generateReact(uri, command.type);
		});
		context.subscriptions.push(disposable);
	});
	vscode.commands.registerCommand("extension.generateRedux", generateRedux);
}

export function deactivate() {}
