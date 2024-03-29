# AngularProtobufExample
This example demonstrates how to use Google Protobuf generated JavaScript classes within an Angular TypeScript project.

## Steps to make google protobuf work with your angular app
> The as-is state of this repo reflects the outcome of the following steps. If you simply wanna run this project, skip to the next section.

Assuming that you start with a seed project generated by `ng new <project-name>`, as a first step it the google protocol buffers runtime library has to be installed: `npm install google-protobuf --save`. This will allow you to use your generated `_pb.js` classes within your project. Next, you create your protobuf schema file. Please take the file located at `./src/proto/schemas.proto` as example. 

Importing protobuf in TypeScript using `import * as goog from 'google-protobuf';` initially causes a transpiler error. Declaring the module in `./src/typings.d.ts` like so `declare module 'google-protobuf';` resolves this issue.

If you do not have the protobuf compiler installed, find the latest version through [Google Developers](https://developers.google.com/protocol-buffers/docs/downloads) and make it available in your PATH so it can be used as `protoc` from your shell. At the time of writing, this is [protoc-3.0.0-win32.zip](https://github.com/google/protobuf/releases/download/v3.0.0/protoc-3.0.0-win32.zip) if you're developing on a Windows machine, [protoc-3.0.0-linux-x86_64.zip](https://github.com/google/protobuf/releases/download/v3.0.0/protoc-3.0.0-linux-x86_64.zip) for Linux, and [protoc-3.0.0-osx-x86_64.zip](https://github.com/google/protobuf/releases/download/v3.0.0/protoc-3.0.0-osx-x86_64.zip) for MacOS.

Before we actually touch our angular code, we need to generate our protobuf classes.

Windows

```ps1
protoc --proto_path=src\proto\ --js_out=import_style=commonjs,binary:src\assets\js src\proto\schemas.proto
```

Unix

```sh
protoc --proto_path=./src/proto/ --js_out=import_style=commonjs,binary:./src/assets/js ./src/proto/schemas.proto
```

As the generated files are plain old JavaScript, we need to instruct TypeScript to allow JavaScript imports. We do so by setting `allowJs` in the compilerOptions of `./src/tsconfig.json` to `true`. Doing so also stops your IDE from ranting about the JS imports.

The component `./src/app/app.component.ts` and the protobuf service `./src/app/core/protobuf.service.ts` should make clear how to use protobuf. 

Use require to import the generated protbuf classes (has to be declared first):

```ts
declare function require(path: string) : any;
let proto = require('../../assets/js/schemas_pb.js');

```

## Run the project
```sh
npm install
ng serve
```