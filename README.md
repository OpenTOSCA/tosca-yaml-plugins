# Tosca Yaml Plugins

A theia application and an eclipse plugin. Both use an Xtext language server.  
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
Build and start VSCode extension
```
   cd vs-code-extension/
   yarn install
   code .
```
Press F5 in the VSCode instance to launch the extension

## Limitations
As of right now "Description" key-value pairs do not work. And some parts of the TOSCA standard still have to be added to the grammar.
