# Javascript/JSX Style Guide

## General tips

- Your job is to write code that is easy to read, understand and maintain.
- Quality over Quantity. It's a nightmare to maintain it.
- Write your code starting from Concrete level to Interface level . Folow KISS (Keep Simple, Stupid) Concept
- Avoid duplication of functions , definitions , objects etc. Follow DRY (Dont Repeat Yourself) Concept

## Table of contents

1. [General Rules](#general-rules)
1. [Naming Conventions](#Naming-Conventions)
1. [JS Syntax & Formatting](#JS-Syntax-&-Formatting)
    - [Commas](#commas)
    - [Whitespace](#whitespace)
    - [Semicolons](#semicolons)
    - [Type Casting & Coercion](#type-casting--coercion)
    - [Objects](#Objects)
    - [Arrays](#Arrays)
    - [Destructuring](#Destructuring)
    - [Functions](#Functions)
    - [Modules](#Modules)

1. [JSX](#JSX)
    - [Syntax & Formatting](#Syntax-&-Formatting)
   
1. [HOOKS](#HOOKS)
---

## General Rules

- Semicolons are required.Every statement must be terminated with a semicolon. Relying on      automatic semicolon insertion is forbidden.
- Don't use Iuse var anymore.
- Arrow functions are preferred.Prefer arrow functions over the function keyword, particularly for nested functions.
- Use template strings instead of concatenation.
- Use Property destructuring
- Split render elements into readable helper function()
- Use the meaningful name for variables
- Define proptypes
- Separate lifecycle, methods and render Elements in the component
- Don’t use line continuations for long strings.
- One Logic per Functions.
- Do not use eval or the Function(...string) constructor (except for code loaders). These features are potentially dangerous and simply do not work in CSP environments.
- List related properties together.
- Modularise for Maintainability.
- “for… of” is the preferred type of ‘for loop’.
- Keep in mind that sometimes KISS is better than DRY.


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
## JS Syntax-Formatting

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

- **Use Array.includes instead of Array.indexOf to check if an array contains a value or not**
If you’re looking for something in your Array, use Array.indexOf.
Array.indexOf “returns the first index at which a given element can be found,” says the MDN documentation. So, if we use the returned index later in our code, and Array.indexOf is the solution.

But, what if we only need to know if our array contains a value or not? Seems like a yes/no question, a boolean question I would say. For this case, I recommend using Array.includes which returns a boolean.

- **Use Array.some instead of Array.find whether an array contains a value or not.**
This is very similar to Array.indexOf/Array.includes.In the previous case, we saw Array.find requires a callback as an argument and returns an element. Is Array.find the best solution if we need to know whether our array contains a value or not? Probably not, because it returns a value, not a boolean.

For this case, using Array.some which returns the needed boolean is better. Also, semantically, using Array.some highlights the fact that we don’t need the found item.

- **Use Array.reduce instead of chaining Array.filter and Array.map.**
If we run Array.filter, then Array.map the first time to filter and create a shorter array, the second time to create a new array (again!) containing new values based on the ones we obtained from Array.filter. To get our new array, we used two Array methods. Each method has its own callback function and an array that we cannot use later — the one created by Array.filter.

To avoid low performances on this subject, advice is to use Array.reduce instead. Same result, better code! Array.reduce allows us to filter and add the satisfying items into an accumulator.

In our case, since we’ve been using Array.map, using Array.reduce with an array to concat as an accumulator.


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

## JSX

### Syntax & Formatting
 - **Always use double quotes (") for JSX attributes, but single quotes (') for all other JS. eslint: jsx-quotes.**
```js
// bad
<Foo bar='bar' />
// good
<Foo bar="bar" />
// bad
<Foo style={{ left: "20px" }} />
// good
<Foo style={{ left: '20px' }} />
```
- **Always include a single space in your self-closing tag. eslint: no-multi-spaces, react/jsx-tag-spacing**
```js
// bad
<Foo/>
// very bad
<Foo                 />
// bad
<Foo
 />
// good
<Foo />
```
- **Do pad JSX curly braces with spaces. eslint: react/jsx-curly-spacing**
```js
    // bad
<Foo bar={baz} />

// good
<Foo bar={ baz } />
```
- **Always use camelCase for prop names.**
```js
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```
- **Omit the value of the prop when it is explicitly true. eslint: react/jsx-boolean-value.**
```js
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

- **Always include an alt prop on <img> tags. If the image is presentational, alt can be an empty string or the <img> must have role="presentation". eslint: jsx-a11y/alt-text.**

```js
// bad
<img src="gamesys.jpg" />

// good
<img src="gamesys.jpg" alt="welcome to gamesys" />

// good
<img src="gamesys.jpg" alt="" />

// good
<img src="gamesys.jpg" role="presentation" />
```

- **Avoid using an array index as key prop, prefer a stable ID. eslint: react/no-array-index-key.**
Not using a stable ID is an anti-pattern because it can negatively impact performance and cause issues with component state.

Not recommend using indexes for keys if the order of items may change.

```js
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```

- **Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha’s beforeEach construct.**

```js
export default function Foo {
  const props = {
    text: '',
    isPublished: false
  }

  return (<div {...props} />);
}
```

- **Notes for use: Filter out unnecessary props when possible. Also, use prop-types-exact to help prevent bugs.**

```js
// bad
render() {
  const { irrelevantProp, ...relevantProps } = this.props;
  return <WrappedComponent {...this.props} />
}

// good
render() {
  const { irrelevantProp, ...relevantProps } = this.props;
  return <WrappedComponent {...relevantProps} />
}
```

- **Always use ref callbacks. eslint: react/no-string-refs.**

```js
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```

- **Always self-close tags that have no children. eslint: react/self-closing-comp.**

```js
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

- **If your component has multi-line properties, close its tag on a new line. eslint: react/jsx-closing-bracket-location.**

```js
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

- **Bind event handlers for the render method in the constructor. eslint: react/jsx-no-bind.**
A bind call in the render path creates a brand new function on every single render. Do not use arrow functions in class fields, because it makes them [challenging to test and debug, and can negatively impact performance](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1), and because conceptually, class fields are for data, not logic.
```js
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// very bad
class extends React.Component {
  onClickDiv = () => {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```

- **Be sure to return a value in your `render` methods. eslint: react/require-render-return.**

    ```jsx
    // bad
    render() {
      (<div />);
    }

    // good
    render() {
      return (<div />);
    }
    ```

**[⬆ back to top](#table-of-contents)**