import * as vscode from "vscode";

import { generateReact } from "./services/react";

interface IReactCommand {
  isFullReactTemplate: boolean;
  id: string;
}

const COMMAND_LIST: IReactCommand[] = [
  {
    isFullReactTemplate: false,
    id: "extension.generateReactTemplate",
  },
  {
    isFullReactTemplate: true,
    id: "extension.generateReactFullTemplate",
  },
];

export function activate(context: vscode.ExtensionContext) {
  COMMAND_LIST.forEach((command) => {
    const disposable = vscode.commands.registerCommand(command.id, (uri) => {
      generateReact(uri, command.isFullReactTemplate);
    });
    context.subscriptions.push(disposable);
  });
}

export function deactivate() {}
