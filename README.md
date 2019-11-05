# TOSCA Yaml Plugins

Theia, VSCode and Eclipse Plugin for the TOSCA Yaml langugage. Both use an Xtext language server.  
This project is still work in progress.

## Building 

Building the language server
```
  cd xtext-dsl-language-server
  ./gradlew shadowJar
  ./gradlew installDist
  cd ..
```

Build and start Theia
```
   yarn install
   cd app
   yarn start
```

Build and install self contained VSCode extension
```
   cd vs-code-extension/
   yarn install
   vsce package
   code --install-extension ToscaYaml-1.0.0.vsix
```
The VSCode package includes the language server

## Limitations
As of right now "Description" key-value pairs do not work. And some parts of the TOSCA standard still have to be added to the grammar in the language server.
