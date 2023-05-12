"use strict";

import { workspace, TextDocument, Uri, WorkspaceConfiguration } from "vscode";
import * as fs from "fs";
import * as path from "path";

export function getFilePath( text: string, document: TextDocument ): Uri | null {
	const paths = getFilePaths( text, document );
	return paths.length > 0 ? paths[ 0 ] : null;
}

export function getFilePaths( text: string, document: TextDocument ): Uri[] {
	const workspaceFolder = workspace.getWorkspaceFolder( document.uri )?.uri.fsPath || "";
	const config = workspace.getConfiguration( "coldbox_goto_view" );
	const paths = scanViewPaths( workspaceFolder, config );
	// TODO: Update
	const file = text.replace( /\"|\'/g, "" ).replace( /\./g, "/" );
	const result = [];

	for ( const item in paths ) {
		let showPath = paths[ item ] + `/${file[ 0 ]}`;
		if ( file.length > 1 ) {
			if ( item !== file[0] ) {
				continue;
			} else {
				showPath = paths[item] + `/${file[ 1 ]}`;
			}
		}
		for ( const extension of config.extensions ) {
			const filePath = workspaceFolder + showPath + extension;

			if ( fs.existsSync( filePath ) ) {
				result.push( {
					"name"     : item,
					"showPath" : showPath,
					"fileUri"  : Uri.file( filePath )
				} );
			}
		}
	}

	return result;
}

function scanViewPaths( workspaceFolder: string, config: WorkspaceConfiguration ): any {
	const folders = Object.assign( {}, config.folders );

	// Modules - First Level For now
	const modulePath = path.join( workspaceFolder, "modules_app" );
	if ( fs.existsSync( modulePath ) ) {
		fs.readdirSync( modulePath ).forEach( element => {
			const file = path.join( modulePath, element );
			if ( fs.statSync( file ).isDirectory() ) {
				folders[ element.toLocaleLowerCase() ] = "/modules_app/" + element + "/views";
			}
		} );
	}

	// Convention
	const conventionPath = path.join( workspaceFolder, "views" );
	if ( fs.existsSync( conventionPath ) ) {
		fs.readdirSync( conventionPath ).forEach( element => {
			const file = path.join( conventionPath, element );
			if ( fs.statSync( file ).isDirectory() ) {
				folders[ element.toLocaleLowerCase() ] = "/views/" + element;
			}
		} );
	}

	return folders;
}
