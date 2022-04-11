# Boilerplate repo

Following the example from here:
https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

Does not include tests and linting, but you should add them

## Usage
`npm install @unegma/template-typescript-npm-utilities`

And then in your code:

```
import { ExampleClass } from "@unegma/template-typescript-npm-utilities";`

let exampleClass = new ExampleClass('Tim');
console.log(exampleClass.sayHello());
```
