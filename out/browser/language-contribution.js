"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const browser_1 = require("@theia/languages/lib/browser");
let DslClientContribution = class DslClientContribution extends browser_1.BaseLanguageClientContribution {
    constructor(workspace, languages, languageClientFactory) {
        super(workspace, languages, languageClientFactory);
        this.workspace = workspace;
        this.languages = languages;
        this.languageClientFactory = languageClientFactory;
        this.id = "yml";
        this.name = "ToscaYaml";
    }
    get globPatterns() {
        return [
            '**/*.yml'
        ];
    }
};
DslClientContribution = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(browser_1.Workspace)),
    __param(1, inversify_1.inject(browser_1.Languages)),
    __param(2, inversify_1.inject(browser_1.LanguageClientFactory))
], DslClientContribution);
exports.DslClientContribution = DslClientContribution;
// register language with monaco on first load
registerDSL();
function registerDSL() {
    // initialize monaco
    monaco.languages.register({
        id: 'yml',
        aliases: ['ToscaYaml', 'yml'],
        extensions: ['.yml'],
        mimetypes: ['text/yml']
    });
    monaco.languages.setLanguageConfiguration('yml', {
        comments: {
            lineComment: "#"
        },
        brackets: [['{', '}'], ['(', ')']],
        autoClosingPairs: [
            {
                open: '{',
                close: '}'
            },
            {
                open: '(',
                close: ')'
            }
        ]
    });
    monaco.languages.setMonarchTokensProvider('yml', {
        // Set defaultToken to invalid to see what you do not tokenize yet
        // defaultToken: 'invalid',
        keywords: [
            'protocol', 'type', 'request', 'notification', 'extends'
        ],
        typeKeywords: [
            'boolean', 'number', 'string'
        ],
        operators: [
            ':'
        ],
        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-z_$][\w$]*/, {
                        cases: {
                            '@typeKeywords': 'keyword',
                            '@keywords': 'keyword',
                            '@default': 'identifier'
                        }
                    }],
                [/[A-Z][\w\$]*/, 'type.identifier'],
                // whitespace
                { include: '@whitespace' },
                // delimiters and operators
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                        cases: {
                            '@operators': 'operator',
                            '@default': ''
                        }
                    }]
            ],
            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
            comment: [
                [/[^\/*]+/, 'comment'],
                [/\/\*/, 'comment.invalid'],
                ["\\*/", 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, 'string', '@pop']
            ],
        },
    });
}
exports.registerDSL = registerDSL;
//# sourceMappingURL=language-contribution.js.map