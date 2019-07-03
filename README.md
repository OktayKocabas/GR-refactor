# Javascript/JSX Style Guide

## General tips

- Your job is to write code that is easy to read, understand and maintain.
- Quality over Quantity. It's easy to write a lot of messy CSS. It's a nightmare to maintain it.
- Write your code starting from Concrete level to Interface level . Folow KISS (Keep Simple, Stupid) Concept
- Avoid duplication of functions , definitions , objects etc. Follow DRY (Dont Repeat Yourself) Concept

## Table of contents

1. [General Rules](#general-rules)
1. [Naming Conventions](#Naming-Conventions)
1. [Syntax & Formatting](#Syntax-&-Formatting)
    - [Commas](#commas)
    - [Semicolons](#semicolons)
    - [Type Casting & Coercion](#type-casting--coercion)
    - [Objects](#Objects)
    - [Arrays](#Arrays)
    - [Destructuring](#Destructuring)
    - [Functions](#Functions)
    - [Modules](#Modules)
    - [Whitespace](#whitespace)

1. [JSX](#JSX)

1. [HOOKS](#HOOKS)
---

## General Rules

1. Semicolons ARE required.Every statement must be terminated with a semicolon. Relying on      automatic semicolon insertion is forbidden.
2. Don't use Iuse var anymore.
3. Arrow functions are preferred.Prefer arrow functions over the function keyword, particularly for nested functions.
4. Use template strings instead of concatenation.
5. Have a plan for class/component/property naming.
6. Don’t use line continuations for long strings.
7. One Logic per Functions.
8. Do not use eval or the Function(...string) constructor (except for code loaders). These features are potentially dangerous and simply do not work in CSP environments.
9. List related properties together.
10. Modularise for Maintainability.
12. “for… of” is the preferred type of ‘for loop’.
13. Constants should be named in ALL_UPPERCASE separated by underscores.
14. Use single quotes, not double quotes.
16. Keep in mind that sometimes KISS is better than DRY.
17. Use shorthand properties

## Naming Conventions

- **Use  for constants within a file. It should be used for exported constants however.**

```js
// bad
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad
export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// allowed but does not supply semantic value
export const apiKey = 'SOMEKEY';

// better in most cases
export const API_KEY = 'SOMEKEY';

// bad - unnecessarily uppercases key while adding no semantic value
export const MAPPING = {
  KEY: 'value'
};

// good
export const MAPPING = {
  key: 'value'
};
```

- **Use camelCase when naming objects, functions, and instances. eslint: camelcase.**

```js
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function a() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

- **Use PascalCase only when naming constructors or classes. eslint: new-cap.**

```js
// bad
function member(options) {
  this.name = options.name;
}

const bad = new member({
  name: 'nope',
});

// good
class Member {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new Member({
  name: 'gamesysguide',
});
```

- **Do not use trailing or leading underscores. eslint: no-underscore-dangle.**
JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean “private”, in fact, these properties are fully public.If you want something to be “private”, it must not be observably present.

```js
// bad
this.__styleGuide__ = 'Gamesys';
this.styleGuide_ = 'Gamesys';
this._styleGuide = 'Gamesys';

// good
this.styleGuide = 'Gamesys';

// good, in environments where WeakMaps are available
const styleGuides = new WeakMap();
styleGuides.set(this, 'Gamesys');
```

- **Filename should exactly match the name of its default export.**

```js
// file 1 contents
class CheckBox {
  // ...
}
export default CheckBox;

// file 2 contents
export default function fortyTwo() { return 42; }

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad
import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
```

- **Use camelCase when you export-default a function. Your filename should be identical to your function’s name.**
```js
function makeStyleGuide() {
  // ...
}

export default makeStyleGuide;
```

- **Use PascalCase when you export a constructor / class / singleton / function library / bare object.**

```js
const GameSysGuide = {
  es6: {
  },
};

export default GameSysGuide;
```

- **Acronyms and initialisms should always be all uppercased, or all lowercased.**

```js
// bad
const HttpRequests = [
  // ...
];
// good
const HTTPRequests = [
  // ...
];

// also good
const httpRequests = [
  // ...
];

// best
import TextMessageContainer from './containers/TextMessageContainer';

// best
const requests = [
  // ...
];
```

- **If the property/method is a boolean, use isVal() or hasVal().**
```js
// bad
if (!member.age()) {
  return false;
}

// good
if (!member.hasAge()) {
  return false;
}
```
- **If the property/method is a returning value, use getVal() or retrieveVal().**
```js

// bad
function name(){
    return 'gamesys'
}

// good
function getName(){
    return 'gamesys'
}
```
- **If the method is setting/assigning values, use setVal() or saveVal().**
```js

let date = '';
// bad
function date(val){
    date = val;
}

// good
function setDate(val){
    date = val;
}
```


**[⬆ back to top](#table-of-contents)**
## Syntax-Formatting

### Objects
- **Prefer the object spread operator over Object.assign to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.**

```js
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original`
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

- **Use the literal syntax for object creation. eslint: no-new-object**

```js
// bad
const item = new Object();

// good
const item = {};
```

- **Use computed property names when creating objects with dynamic property names.**
```js
function getKey(k) {
  return `a key changes ${k}`;
}

// bad
const obj = {
  id: 12345,
  name: 'Gamesys',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 12345,
  name: 'Gamesys',
  [getKey('enabled')]: true,
};
```

- **Use object method shorthand. eslint: object-shorthand.**

```js
/ bad
const gamesys = {
  value: 1,

  addValue: function (value) {
    return gamesys.value + value;
  },
};

// good
const gamesys = {
  value: 1,

  addValue(value) {
    return gamesys.value + value;
  },
};
```
- **Use property value shorthand. eslint: object-shorthand.**
```js
// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

- **Only quote properties that are invalid identifiers. eslint: quote-props.**
In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

```js
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'bla-bla': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'bla-bla': 5,
};
```
**[⬆ back to top](#table-of-contents)**

### Arrays

- **Use the literal syntax for array creation. eslint: no-array-constructor.**

```js
// bad
const items = new Array();

// good
const items = [];
```
- **Use array spreads ... to copy arrays..**

```js
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```
- **To convert an iterable object to an array, use spreads ... instead of Array.from.**

```js
const foo = document.querySelectorAll('.foo');
// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```
- **Use Array.from for converting an array-like object to an array.**

```js
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// bad
const arr = Array.prototype.slice.call(arrLike);
// good
const arr = Array.from(arrLike);
```
- **Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.**

```js
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```
**[⬆ back to top](#table-of-contents)**

### Destructuring

- **Use object destructuring when accessing and using multiple properties of an object. eslint: prefer-destructuring.**
Why? Destructuring saves you from creating temporary references for those properties.

```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```
- **Use array destructuring. eslint: prefer-destructuring.**
```js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```
- **Use object destructuring for multiple return values, not array destructuring.**
Why? You can add new properties over time or change the order of things without breaking call sites.

```js
// bad
function processInput(input) {
  // then 
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then 
  return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input);
```
**[⬆ back to top](#table-of-contents)**

### Functions

- **Use named function expressions instead of function declarations. eslint: func-style**
Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack.

```js
// bad
function foo() {
  // ...
}

// bad
const foo = function () {
  // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```
- **Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: no-loop-func**

- **Never use arguments, opt to use rest syntax ... instead. eslint: prefer-rest-params.**
... is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like arguments.

```js
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```
- **Use default parameter syntax rather than mutating function arguments.**
```js
// really bad
function doSomething(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function doSomething(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function doSomething(opts = {}) {
  // ...
}
```

- **Always put default parameters last.**

```js
// bad
function doSomething(opts = {}, name) {
  // ...
}

// good
function doSomething(name, opts = {}) {
  // ...
}
```
- **Never mutate parameters. eslint: no-param-reassign.**
Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```js
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}.**
```
- **Never mutate parameters. eslint: no-param-reassign.**
Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```js
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}.**
```

- **Prefer the use of the spread operator ... to call variadic functions. eslint: prefer-spread**
It’s cleaner, you don’t need to supply a context, and you can not easily compose new with apply.

```js
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// good
new Date(...[2016, 8, 5]);
```
**[⬆ back to top](#table-of-contents)**

### Modules
- **Do not use wildcard imports.**
This makes sure you have a single default export.

```js
// bad
import * as GamesysGuide from './GamesysGuide';

// good
import GamesysGuide from './GamesysGuide';
```
- **Do not export directly from an import.**
Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

```js
// bad
// filename es6.js
export { es6 as default } from './GamesysGuide';

// good
// filename es6.js
import { es6 } from './GamesysGuide';
export default es6;
```
**[⬆ back to top](#table-of-contents)**