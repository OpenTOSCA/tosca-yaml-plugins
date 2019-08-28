"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
const inversify_1 = require("inversify");
const browser_1 = require("@theia/languages/lib/browser");
const language_contribution_1 = require("./language-contribution");
exports.default = new inversify_1.ContainerModule(bind => {
    bind(browser_1.LanguageClientContribution).to(language_contribution_1.DslClientContribution).inSingletonScope();
});
//# sourceMappingURL=frontend-extension.js.map