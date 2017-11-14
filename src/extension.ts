'use strict';
import * as vscode from 'vscode';
import { BoxCompletionProvider } from './services/BoxCompletionProvider';

const SUPPORTED_LANGUAGES = [
    'lang-cfml',
    'cfml'
];

function isEnabled(): boolean {
    let enabled: boolean;
    let config = vscode.workspace.getConfiguration('coldbox');
    if (config === null) {
        enabled = true;
    }
    else {
        enabled = config.get('autocomplete');
    }

    return enabled;
}

export function activate(context: vscode.ExtensionContext) {
    if (!isEnabled()) {
        return;
    }

    let boxCompletionProvider = new BoxCompletionProvider();
    for (let languageId of SUPPORTED_LANGUAGES) {
        let provider = vscode.languages.registerCompletionItemProvider(
            languageId, boxCompletionProvider, '.');
        context.subscriptions.push(provider);
    }
}

export function deactivate() {
}