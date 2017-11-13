export interface CompletionInfo {
    trigger: string;
    doc?: string;
    snippet: string;
}

export class CompletionDataStore {
    static completions: { [key: string]: CompletionInfo[] } = {
        'all': [
            {
                trigger: "addAssertions",
                doc: "(ColdBox BaseSpec)",
                snippet: "addAssertions( assertions=${1:any} )"
            },
            {
                trigger: "runRemote",
                doc: "(ColdBox BaseSpec)",
                snippet: "runRemote( testSpecs=\"${1:}\", testSuites=\"${2:}\", reporter=\"${3:}\", labels=\"${4:}\" )"
            }
        ],
        "logbox": [
            {
                trigger: "getAppendersMap",
                snippet: "logbox.getAppendersMap( appenders=${1:any} )"
            },
            {
                trigger: "registerAppender",
                doc: "(TestBox logbox)",
                snippet: "logbox.registerAppender( name=${1:any}, class=${2:any}, properties=${3:any}, layout=${4:any}, levelMin=${5:any}, levelMax=${6:any} )"
            }
        ],
        "wirebox": [
            {
                trigger: "getInjectorID",
                snippet: "wirebox.getInjectorID()"
            },
            {
                trigger: "registerNewInstance",
                snippet: "wirebox.registerNewInstance( name=${1:any}, instancePath=${2:any} )"
            },
        ]
    };
}