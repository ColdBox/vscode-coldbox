const fs = require('fs');
const path = require('path');
const _ = require('lodash');

// script configuration. make sure that you have correct path here.
const SOURCE = path.resolve('./cbox-coldbox-sublime/completions/ColdBox.sublime-completions');
const DEST = path.resolve('./src/data/CompletionDataStore.ts');

const parser = {
    parse: function (data) {
        let lines = data.split('\n');
        lines = lines.filter((line) => {
            line = line.trim();
            return !_.startsWith(line, '//');
        });

        let obj = JSON.parse(lines.join(''));
        return obj;
    },
    createSnippet: function (sublime) {
        if ( _.isEmpty( sublime.trigger ) || sublime.trigger.indexOf( "BaseSpec" ) > 0 ) {
            console.log( " ==> Skipping " + sublime.trigger );
            return null;
        }

        let snippet = {};
        let trigger = sublime.trigger.split('\tfn.');
        if (trigger.length == 2) {
            // has documentation
            snippet.doc = trigger[1].trim();
        }

        let prefix = 'all';
        let sublimeCommand = trigger[0];
        if (sublimeCommand.indexOf('.') > -1) {
            // e.g. binder.asEagerInit, so binder is prefix
            let parts = sublimeCommand.split('.');
            prefix = parts[0];
            sublimeCommand = parts[1];
        }

        snippet.trigger = sublimeCommand;
        snippet.snippet = sublime.contents;
        return {
            prefix: prefix,
            snippet: snippet
        };
    },
    createDataSourceSrc: function (snippets) {
        let dataSource = JSON.stringify(snippets, null, '\t');
        let src = "export interface CompletionInfo { trigger: string;\n doc?: string;\n snippet: string;\n }\n\n";
        src += "export class CompletionDataStore { static completions: { [key: string]: CompletionInfo[] } = "
        src += dataSource;
        src += "; }";

        return src;
    }
};

function main() {
    fs.exists(SOURCE, (exists) => {
        if (!exists) {
            console.log(`Error: ${SOURCE} is not found`);
            process.exit(-1);
        }
    
        fs.readFile(SOURCE, 'utf8', (e, data) => {
            if (e) {
                console.log(e);
                process.exit(-1);
            }
    
            let obj = parser.parse(data);
            let dataSource = {};
            if (obj.completions) {
                for (let sublimeSnippet of obj.completions) {
                    let snippet = parser.createSnippet(sublimeSnippet);

                    if( snippet == null ){
                        continue;
                    }

                    if (!dataSource.hasOwnProperty(snippet.prefix)) {
                        dataSource[snippet.prefix] = [];
                    }

                    dataSource[snippet.prefix].push(snippet.snippet);
                }
            }

            let src = parser.createDataSourceSrc(dataSource);
            fs.writeFile(DEST, src, (e) => {
                console.log(e ? e : 'DONE.');
            })
        });
    });
}

main();