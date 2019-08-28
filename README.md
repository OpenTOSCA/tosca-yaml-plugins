# Tosca Yaml Plugins

A Theia application and an eclipse plugin. Both use an Xtext language server.  
This project is still work in progress.

## Building 

Building the language server
```
  cd xtext-dsl-language-server &&
  ./gradlew shadowJar &&
  cd ..
```

Build and start Theia
```
   yarn install &&
   cd app &&
   yarn start
```

## Limitations
As of right now "Description" key-value pairs do not work. And some parts of the TOSCA standard still have to be added to the grammar.
