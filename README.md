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


