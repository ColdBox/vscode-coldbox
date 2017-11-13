'use strict';
import * as vscode from 'vscode';
import { BoxCompletionProvider } from './services/BoxCompletionProvider';

const SUPPORTED_LANGUAGES = [
    'lang-cfml',
    'cfml'
];

export function activate(context: vscode.ExtensionContext) {
    let boxCompletionProvider = new BoxCompletionProvider();
    for (let languageId of SUPPORTED_LANGUAGES) {
        let provider = vscode.languages.registerCompletionItemProvider(
            languageId, boxCompletionProvider, '.');
        context.subscriptions.push(provider);
    }
}

export function deactivate() {
}