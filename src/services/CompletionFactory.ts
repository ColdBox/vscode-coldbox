import * as vscode from "vscode";
import has from "lodash.has";
import keys from "lodash.keys";
import endsWith from "lodash.endswith";
import startsWith from "lodash.startswith";
import isEmpty from "lodash.isempty";
import { CompletionDataStore, CompletionInfo } from "../data/CompletionDataStore";

export class CompletionFactory {
	private static prefixes = keys( CompletionDataStore.completions )
		.filter( ( value: string ) => {
			return value !== "all";
		}
		);

	private document: vscode.TextDocument;
	private position: vscode.Position;

	constructor( document: vscode.TextDocument, position: vscode.Position ) {
		this.document = document;
		this.position = position;
	}

	public getCompletions(): vscode.CompletionItem[] {
		const line    = this.document.lineAt( this.position.line ).text;
		const prefix  = this.findPrefix( line );

		return prefix === null ? this.getAllCompletions() : this.getTargetCompletions( prefix );
	}

	/**
	 * Find the prefix o a line
	 *
	 * @param line A specified line from the document
	 * @returns the prefix of the line
	 */
	private findPrefix( line: string ): string {
		// If the line is null it doesn't continue
		if ( line === null ){ return null; }

		// Get the lower case line without spaces
		line = line.trim().toLocaleLowerCase();

		// If the line doesn't ends whit dot
		if ( !endsWith( line, "." ) ) { return null; }

		// Get the line from the first to the latest char
		line = line.substr( 0, line.length - 1 );

		// Search lines that ends with prefixes
		for ( const prefix of CompletionFactory.prefixes ) {
			if ( endsWith( line, prefix ) ) { return prefix; }
		}

		// Defaults return null
		return null;
	}

	/**
	 * Get all the completions
	 *
	 * @returns An array of completion results
	 */
	private getAllCompletions(): vscode.CompletionItem[] {
		const result = [];

		for ( const key in CompletionDataStore.completions ) {
			let prefix: string = null;

			if ( key !== "all" ) {
				result.push( this.createCompletionItem( key ) );
				prefix = key;
			}

			const items = CompletionDataStore.completions[ key ];

			for ( const item of items ) {
				result.push( this.createCompletionItem( item, prefix ) );
			}
		}

		return result;
	}

	private getTargetCompletions( prefix: string ): vscode.CompletionItem[] {
		if ( !has( CompletionDataStore.completions, prefix ) ) { return null; }

		const result  = [];
		const items   = CompletionDataStore.completions[ prefix ];

		for ( const item of items ) {
			const completionItem = this.createCompletionItem( item, null, prefix );
			result.push( completionItem );
		}

		return result;
	}

	private createCompletionItem(
		data: CompletionInfo | string,
		prefix?: string,
		filterOutPrefix?: string ): vscode.CompletionItem {

		if ( typeof data === "object" ) {
			const trigger     = isEmpty( prefix ) ? data.trigger : `${prefix}.${data.trigger}`;
			const item        = new vscode.CompletionItem( trigger, vscode.CompletionItemKind.Snippet );
			let snippetSrc  = data.snippet;

			if ( !isEmpty( filterOutPrefix ) && startsWith( snippetSrc, filterOutPrefix + "." ) ) {
				snippetSrc = snippetSrc.substring( filterOutPrefix.length + 1 );
			}

			const snippet = new vscode.SnippetString( snippetSrc );
			item.insertText = snippet;

			if ( !isEmpty( data.doc ) ) { item.documentation = data.doc; }

			return item;
		}

		else if ( typeof data === "string" ) {
			const trigger = isEmpty( prefix ) ? data : `${prefix}.${data}`;
			const item    = new vscode.CompletionItem( trigger, vscode.CompletionItemKind.Text );
			return item;
		}

		return null;
	}
}
