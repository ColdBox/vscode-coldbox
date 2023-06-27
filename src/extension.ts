"use strict";
import * as vscode from "vscode";
import { BoxCompletionProvider } from "./services/BoxCompletionProvider";

const SUPPORTED_LANGUAGES = [
	"lang-cfml",
	"cfml"
];

/**
 * Verifies if ColdBox configuration is enabled
 *
 * @returns Boolean if is enabled or not
 */
function isEnabled(): boolean {
	const config = vscode.workspace.getConfiguration( "coldbox" );

	const enabled: boolean = ( config === null ) ? true : config.get( "autocomplete" );

	return enabled;
}

/**
 * Add the providers to the suscriptions context
 *
 * @param context the context
 */
export function activate( context: vscode.ExtensionContext ): void {
	if ( !isEnabled() ) { return; }

	const boxCompletionProvider = new BoxCompletionProvider();

	for ( const languageId of SUPPORTED_LANGUAGES ) {
		const provider = vscode.languages.registerCompletionItemProvider( languageId, boxCompletionProvider, "." );
		context.subscriptions.push( provider );
	}
}

export function deactivate(): void { /* TODO document why this function 'deactivate' is empty */ }
