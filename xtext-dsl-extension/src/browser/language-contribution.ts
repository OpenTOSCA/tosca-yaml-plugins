import { injectable, inject } from 'inversify';
import { Workspace, Languages, LanguageClientFactory, BaseLanguageClientContribution } from '@theia/languages/lib/browser';

@injectable()
export class DslClientContribution extends BaseLanguageClientContribution {

    readonly id = "yml";
    readonly name = "ToscaYaml";

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory
    ) {
        super(workspace, languages, languageClientFactory);
    }

    protected get globPatterns() {
        return [
            '**/*.yml'
        ];
    }
}

// register language with monaco on first load
registerDSL();

export function registerDSL() {
    // initialize monaco
    monaco.languages.register({
        id: 'yml',
        aliases: ['ToscaYaml', 'yml'],
        extensions: ['.yml'],
        mimetypes: ['text/yml']
    })
    monaco.languages.setLanguageConfiguration('yml', {
        comments: {
            lineComment: "#"
        }
    })
    monaco.languages.setMonarchTokensProvider('yml', <any>{
        // The main tokenizer for our languages
        tokenizer: { }
    })
}