# TypeScript Loves You, Man

## Steps to create the project
1. create
```
mkdir tsloveu && cd tsloveu
npm init -y
```
2. update package.json
    1. add `"private":true` to `package.json` to prevent warnings
    2. add `"buildrun": "tsc-watch --onsuccess && node dist/index.js"` to build and run
    3. install packages
        - compiler
        ```
        npm install typescript -D
        npm install tsc-watch -D
        ```
        - typecheck `npm install tslint -D`
        - unittest
        ```
        npm install jest -D
        npm install @types/jest -D
        npm install ts-jest -D
        ```
    4. add `"test": "jest --watchAll"` to run unit tests
3. create TypeScript compiler configuration settings file named `tsconfig.js`
    - `"rootDir": "./src"` means the project's TypeScript files can be found in the `src` folder
    - `"outDir": "./dist"` means the output the project produces should be placed in the `dist` folder
    - `"module": "commonjs"` means use `commonjs` standard for loading code from separate files
    - `"noImplicitAny": true` means not allowed to use type `any`, use specific type instead
    - `"strictNullChecks": true` means not allowed `null` or `undefined` values to be assigned to other types 
    - `"noImplicitReturns": true` means require all paths in a function to return a result
    - `"noUnusedParameters": true` means all parameters in a function must be used or a warning occured

4. run js file: `npm run buildrun`

5. run tests: `npm run test`

6. use `bundler` to resolve the dependencies during compilation and packages all the files 
that the application uses into a single file. One `HTTP` request delivers all the JavaScript required to run the
application, and other content types, such as CSS, can be included in the file produced by the bundler. Duing the
bundling process, the code and content can be minified and compressed, reducing the amount of bandwidth required
to deliver the application to the client. Large applications can be split into multiple bundles so that optional
code or content can be loaded separately and only when it is requred. The most widely used bundler is `webpack`.
    - update `package.json`
        ```
        The webpack package contains the main bundler features, and the webpack-cli packages adds command-line support.
        Webpack uses packages known as `loaders` to deal with different contetnt types.
        The `ts-loader` package is used to add support for compiling TypeScript files and feeding the compiled code into the bundle created byt the `webpack`.
        ```
        - npm install webpack -D
        - npm install webpack-cli -D
        - npm install ts-loader -D

7. Add `bundle` features in `webpack.config.js`
- This file is used to configure webpack
- If no this file and no `webpack` packages installed, all the files are procedured to the `outDir` setting in `tsconfig.json`
    - `entry` and `output` settings tell `webpack` to start with the `src/index.ts` file when resolving the application's dependencies and to give the bundle file the name `bundle.js`.
    - `module:rules` tell `webpack` to use `ts-loader` package to process files with the `ts` file extension.
- run `npx webpack` to do the bundle process,



