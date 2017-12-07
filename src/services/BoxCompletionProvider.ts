import * as vscode from 'vscode';
import { CompletionFactory } from './CompletionFactory';

export class BoxCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument,
            position: vscode.Position,
            token: vscode.CancellationToken,
            context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

        return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
            let factory = new CompletionFactory(document, position);
            let completions = factory.getCompletions();
            if (completions === null) {
                completions = [];
            }

            return resolve(completions);
        });
    }
}