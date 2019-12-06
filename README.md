## async-nmbr

### Very useful JavaScript Number operator overloading for asynchronous math operations

#### Getting Started

1. `npm install --save-dev @babel/core @babel/cli babel-plugin-overload babel-template`
1. Create a file called `.babelrc` in your projects root directory
1. Place the following content inside: `{ "plugins": ["overload"] }`
1. Find out [how you can build/compile your project](https://babeljs.io/docs/en/babel-cli#usage), e.g.: `npx babel src -d lib`

#### Usage

Once the initial setup is completed you'll need to actually overload the operators for the `Number` type.

You can do this by simply requiring this package and passing your `Number` object, like this:

```javascript
require('async-nmbr')(Number);
```

Now that the operators are overloaded, you can do awesome calculations like:

```javascript
await (1 + 1); // 2
await (100 - 1); // 99
await (2 * 2); // 4
await (Math.PI / 3); // 1.0471975511965976

(Math.PI * 3).then(res => res / 3).then(pi => console.log(pi));
```

Please note: when using this package you'll always have to await your math calculations (isn't that awesome?)
