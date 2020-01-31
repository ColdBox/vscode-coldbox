import * as vscode from 'vscode';
import * as _ from 'lodash';
import { CompletionDataStore, CompletionInfo } from '../data/CompletionDataStore'
import { runInThisContext } from 'vm';

export class CompletionFactory {
    private static prefixes = _.keys( CompletionDataStore.completions )
        .filter( ( value: string ) => {
            return value !== 'all';
        }
    );

    private document: vscode.TextDocument;
    private position: vscode.Position;

    constructor( document: vscode.TextDocument, position: vscode.Position ) {
        this.document = document;
        this.position = position;
    }

    public getCompletions(): vscode.CompletionItem[] {
        let line    = this.document.lineAt( this.position.line ).text;
        let prefix  = this.findPrefix( line );

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
        if ( !_.endsWith( line, '.' ) ) { return null; }

        // Get the line from the first to the latest char
        line = line.substr( 0, line.length - 1 );

        // Search lines that ends with prefixes
        for ( let prefix of CompletionFactory.prefixes ) {
            if ( _.endsWith( line, prefix ) ) { return prefix; }
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
        let result = [];
        
        for ( let key in CompletionDataStore.completions ) {
            let prefix: string = null;
            
            if ( key !== 'all' ) {
                result.push( this.createCompletionItem( key ) );
                prefix = key;
            }

            let items = CompletionDataStore.completions[ key ];

            for ( let item of items ) {
                result.push( this.createCompletionItem( item, prefix ) );
            }
        }

        return result;
    }

    private getTargetCompletions( prefix: string ): vscode.CompletionItem[] {
        if ( !_.has( CompletionDataStore.completions, prefix ) ) { return null; }

        let result  = [];
        let items   = CompletionDataStore.completions[ prefix ];

        for ( let item of items ) {
            var completionItem = this.createCompletionItem( item, null, prefix );
            result.push( completionItem );
        }

        return result;
    }

    private createCompletionItem(
            data: CompletionInfo | string, 
            prefix?: string,
            filterOutPrefix?: string ): vscode.CompletionItem {

        if ( typeof data === 'object' ) {
            let trigger     = _.isEmpty( prefix ) ? data.trigger : `${prefix}.${data.trigger}`;
            let item        = new vscode.CompletionItem( trigger, vscode.CompletionItemKind.Snippet );
            let snippetSrc  = data.snippet;

            if ( !_.isEmpty( filterOutPrefix ) && _.startsWith( snippetSrc, filterOutPrefix + '.' ) ) {
                snippetSrc = snippetSrc.substring( filterOutPrefix.length + 1 );
            }

            let snippet = new vscode.SnippetString( snippetSrc );
            item.insertText = snippet;

            if ( !_.isEmpty( data.doc ) ) { item.documentation = data.doc; }

            return item;
        }

        else if ( typeof data === 'string' ) {
            let trigger = _.isEmpty( prefix ) ? data : `${prefix}.${data}`;
            let item    = new vscode.CompletionItem( trigger, vscode.CompletionItemKind.Text );
            return item;
        }

        return null;
    }
}