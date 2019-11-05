"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const os = require("os");
const vscode_1 = require("vscode");
const vscode_languageclient_1 = require("vscode-languageclient");
let client;
function activate(context) {
    // The server is implemented with xtext
    let launcher = os.platform() === 'win32' ? 'ToscaYaml-standalone.bat' : 'ToscaYaml-standalone';
    let script = context.asAbsolutePath(path.join('language-server', 'bin', launcher));
    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    let serverOptions = {
        run: { command: script },
        debug: { command: script, args: [], options: { env: createDebugEnv() } }
    };
    // Options to control the language client
    let clientOptions = {
        documentSelector: ['yml'],
        synchronize: {
            fileEvents: vscode_1.workspace.createFileSystemWatcher('**/*.*')
        }
    };
    // Create the language client and start the client.
    client = new vscode_languageclient_1.LanguageClient('ToscaYaml', serverOptions, clientOptions);
    // Start the client. This will also launch the server
    let disposable = client.start();
    // Push the disposable to the context's subscriptions so that the 
    // client can be deactivated on extension deactivation
    context.subscriptions.push(disposable);
    function createDebugEnv() {
        return Object.assign({
            JAVA_OPTS: "-Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n,quiet=y"
        }, process.env);
    }
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map