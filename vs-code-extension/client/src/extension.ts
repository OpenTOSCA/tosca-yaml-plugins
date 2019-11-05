/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as os from 'os';
import { workspace, ExtensionContext, commands, window, Uri } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions
} from 'vscode-languageclient';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	// The server is implemented with xtext
	let launcher = os.platform() === 'win32' ? 'ToscaYaml-standalone.bat' : 'ToscaYaml-standalone';
    let script = context.asAbsolutePath(path.join('language-server', 'bin', launcher));

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
        run : { command: script },
        debug: { command: script, args: [], options: { env: createDebugEnv() } }
    };

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		documentSelector: ['yml'],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/*.*')
        }
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'ToscaYaml',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	let disposable = client.start();

	 // Push the disposable to the context's subscriptions so that the 
    // client can be deactivated on extension deactivation
    context.subscriptions.push(disposable);

	function createDebugEnv() {
		return Object.assign({
			JAVA_OPTS:"-Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n,quiet=y"
		}, process.env)
	}
}


