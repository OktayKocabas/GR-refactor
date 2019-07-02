# GUIDELINES

## CSS Style Guide

### All code in any code-base should look like a single person typed it, no matter how many people contributed.

## General tips

- Your job is to write code that is easy to read, understand and maintain.
- Don't try to optimize your code. There are tools out there that will do it for you and do it much better.
- If in doubt when deciding upon a style, ask other developers, there's no shame in asking questions.
- Quality over Quantity. It's easy to write a lot of messy CSS. It's a nightmare to maintain it.
- Refrain from using _over-qualified selectors_, `div.container` can simply be stated as `.container`
- Avoid the use of `!important`. This might be okay for state differentiation (`.checked`, `.unchecked`), but it's best to avoid it altogether.
- Don't over engineer CSS.

# Preface

The following sections outline a _highly_ _opinionated_ style guide for **CSS development within Client platform at Gamesys**. The most important take-away is the **law of code style consistency**. Gamesys' style should be considered a law. Link to this document as a statement of your project's commitment to code style consistency, readability and maintainability.

---

> The chosen code formating options ensure that code is easy to read, easy to comment, minimizes the chance of accidentally introducing errors, results in useful diffs and blames (Git).

---

## Table of contents

1. [General Rules](#general-rules)
1. [Semantic-HTML](#Semantic-HTML)
1. [Naming conventions](#naming-conventions)
   - [Variables, Placeholders, Mixins, Functions & SASS Maps Naming of Foreground and Background color variables]()
   - [Classes](#Classes)
1. [Syntax & Formatting](#Syntax-Formatting)

   - [Numeric-Values](#Numeric-Values)
   - [String-Values](#String-Values)
   - [Colors](#Colors)
   - [Bangs](#Bangs)
   - [Group-Shared-Styles](#Group-Shared-Styles)
   - [Pseudo Classes & Pseudo Elements](#Pseudo-Classes-&-Pseudo-Elements)
   - [Ampersand](#Ampersand)
   - [One-Line-&-One-Selector](#One-Line-&-One-Selector)
   - [Unnecessary Nesting & Selectors](#Unnecessary-Nesting-&-Selectors)
   - [Mixin-Parameters & SASS-Maps](#Mixin-Parameters-&-SASS-Maps)
   - [Imports](#Imports)
   - [Interpolation](#Interpolation)
   - [Statements & Expressions](#Statements-&-Expressions)

1. [Ordering-Grouping](#Ordering-Grouping)
   - [Ordering Extends & Imports & Selectors](#Ordering-Extends-&-Imports-&-Selectors)
1. [Mixins & Placeholders & Functions](#Mixins-&-Placeholders-&-Functions)
   - [Mixins](#Mixins)
   - [Placeholders](#Placeholders)
   - [Functions](#Functions)
1. [Styled Components Tips](#Styled-Components-Tips)

---

## General Rules

1. Limit nesting up to 3 levels.
2. Don't use ID's #.
3. Don't use !important.
4. Don't use vendor prefixes.
5. Have a plan for class name naming.
6. Use tabs as indentation.
7. One selector per line, One rule per line.
8. Order your SASS (@extend, @include, Properties, Pseudo Classes and Pseudo Elements, Nestled Selectors).
9. List related properties together.
10. Modularise CSS/SASS for Maintainability.
11. Trailing zeros (0) should be omitted. However, leading zeros (0) help readability and should be added.
12. A zero (0) length should not have a unit.
13. Colors should be expressed RGB, HSL or hexadecimal in a lowercase and shortened form. Color keywords are to be avoided.
14. Strings values should be quoted using double quotes.URLs should also be quoted.
15. Use extend on %placeholders primarily, not on actual selectors.
16. Keep in mind that sometimes KISS is better than DRY.
17. Use shorthand properties

## Semantic-HTML

### What does it look like?

Examples of semantic HTML tags include <nav>, <footer> and <section>. There are many more semantic HTML5 tags that can be used (for example <blockquote> and <em>), but in this article I am only looking at those semantic HTML tags that you will need to divide the page content into its basic parts.

The following HTML5 tags can be used in the place of <div> tags to break your page content into identified parts each of which fulfills a specific role. As you can imagine, machines like Google and Bing LOVE this.

### Document Structure

- **header: A container to be used for a web page header which typically contains the site logo, heading elements, and site navigation.**
- **footer: A container to be used for a web page footer which typically contains authorship, contact, and copyright information in addition to navigational links and a link back to the top of the web page.**
- **main: A high-level element used to contain all of the content that is unique to a single web page and not repeated across multiple web pages.**
- **nav: An element to contain blocks of site navigation links. This element is typically placed in the page header and footer, and may also be used in an aside (sidebar) element as well.**
- **section: The section element is used to mark off sections of a document, such as chapters or major sections of a long form post.And used to group together related elements. Each <section> typically includes one or more heading elements and additional elements presenting related content.**
- **aside: Use to identify content that is related to the main content on the page but not part of the primary flow of the document. For example, the aside element may contain a glossary definition of a term that appears in a blog post or it may contain advertisements related to the contents of the page.**
- **article: The article element is used to identify a block of content suitable for reuse and syndication in other settings, such as a blog post or technical article.**
- **figure: The figure element is used to group together a piece of content, such as an image, chart, graph, or text, and a caption marked off by figcaption tags. By nesting the caption and the content between figure tags a relationship between the nested elements is identified. Our images page contains more information about implementing this helpful tag.**
- **ul: Unordered lists are used to signal a relationship between the items on the list and to indicate that they do not need to be understood in a specific order. Read our Lists Tutorial to learn more about how to use both ordered and unordered lists.**
- **headlines align:The <h1>, <h2>, <h3>, <h4>, <h5>, and <h6> elements are used to create headings in descending order of importance where <h1> is the most important and <h6> the least.**

- **progress:The <progress> element is used to create a progress bar to serve as a visual demonstration of progress towards the completion of task or goal. The max and value attributes are used to define how much progress (value) has been made towards task completion (max).**
- **output:The <output> element is used to display the result of a calculation. The <output> element is typically used in conjunction with a parent <form> and sibling <input> elements to perform a calculation. The actual calculation is typically completed using JavaScript.**
- **menuitem:The <menuitem> element is used to add menu items and commands to contextual pop-up menus (the menus that appear when you right-click in a web browser).**
- **abbr:The <abbr> element is used along with a title attribute to associate a full-text explanation with an abbreviation or acronym. Website visitors do not see the text in the title attribute, but browsers, search engines, and assistive technologies do use this information.**
- **menu: The <menu> element defines an instance of a menu. This experimental HTML feature has very limited browser support, but may soon be an effective way to add menu items to context menus and to create interactive web application menus.**
- **strong: HTML Tag The <strong> element is used to identify text that is of greater importance than the surrounding text. By default, all browsers render <strong> text in a bold typeface.**
- **address: This attribute is used to associate contact information with the parent element that contains the address element. For example, when added to an article, the address element provides contact information for the article author, and when added to a web page footer the address identifies contact information for the web page owner.**

Read more: https://html.com/semantic-markup/#ixzz5sWxowywI

```HTML
<header>
<nav>
<main>
<article>
<section>
<aside>
<footer>

```

- **Reminder of Good Semantic HTML5 Markup for SEO**
  Structure, importance, roles, and hierarchy are things that humans often understand instinctively from the design/layout. Correctly using the correct semantic HTML tags in the place of <div> simply makes that same understanding easier for machines.

## Naming Conventions

Lower case hyphen - delimited strings, with BEM-like naming for more complex pieces of code.

### Variables, Placeholders, Mixins, Functions & SASS Maps

Use semantic variable names {block}-{element}-{property}-{state} Ex: betslip-icon-size-hover

```scss
/* bad */
$color: #fff;
$linkColor: #fff;
$color-link: #fff;

$active-color-link: #fff;

$nav-link-color-active: #fff;

$white: #fff; // This instance is only acceptable in the color palette

/* good */
$link-color: #fff;

$link-text-color-active: #fff;

$nav-link-text-color-active: #fff;

$primary-color: #fff;
```

- **Naming of Foreground and Background color variables**

````scss
/* bad */

// foreground
$nav-color-hover: #fff;
$nav-txt-color-hover: #fff;
// background
$nav-background-color-hover: #fff;
$nav-bk-color-hover: #fff;

/* good */
// foreground
$nav-text-color-hover: #fff;
// background
$nav-bg-color-hover: #fff;

```scss
/* bad */

%baseButton {
  padding: 10px;
  border-radius: 2px;
}

/* good */

%base-button {
  padding: 10px;
  border-radius: 2px;
}

```scss/* bad */
$buttonSettings: (backgroundColor: #fff, backgroundColorHover: #000);

/* good */
$button-settings: (
  bg-color: #fff,
  bg-color-hover: #000
);
````

### Classes

Use semantic variable names example: {block}-{element}-{modifier}. When styling directly the element is not possible.

````scss
```scss
/* bad */

.button-login
.loginButton
.login-button-2

/* good */
.login-button
.login-button-secondary

````

**[⬆ back to top](#table-of-contents)**

---

## Syntax & Formatting

### Numeric Values

Trailing zeros (0) should be omitted. However, leading zeros (0) help readability and should be added.

```scss
/* bad */
$size: 0.25rem;
$size: 0.25rem;
$padding: 0px;

/* good */
$size: 0.25rem;
$padding: 0;
```

### String Values

Should always be quoted using double quotes. URLs should also be quoted.

```scss
/* bad */
$direction: left;
background-image: url("example.png");
background-image: url(example.png);
/* good */
$direction: "left";
background-image: url("example.png");
```

### Colors

Colors should be expressed RGB, HSL or hexadecimal in a lowercase and shortened form. Color keywords are to be avoided.

````scss
/* bad */
$color: #ffffff;
$color: white;
$color: #fff;
/* good */
$color: #fff;
$color: rgba(255, 255, 255, 1);
$color: hsla(360, 100%, 100%, 1);

```scsscolorvariablesshouldonlybeusedwithinthecolorpaletteandvariablesfiles/* bad */
// \_color-palette.scss
$white: #fff;
$black: #000;
// \_buttons.scss
button {
  color: $white;
  bg: $black;
}
/* good */
// \_color-palette.scss
$white: #fff;
$black: #000;
// \_variables.scss
$button-color: $white;
$button-bg-color: $black;
// \_buttons.scss
button {
  color: $button-color;
  bg-color: $button-bg-color;
}
````

### Bangs

Bangs!default, !global, !optional, must always be preceded by a space

```scss
/* bad */
$example: #fff !global;
$example: #fff !default;
$example: #fff;
/* good */
$example: #fff !global;
$example: #fff !default;
$example: #fff;
```

### Shorthand

Use short hand properties when available. They help code readability and decrease the number of lines in a file.

```scss
/* bad */
padding-top: 10px;
padding-right: 5px;
padding-bottom: 10px;
padding-left: 5px;
/* good */
padding: 10px 5px;
```

### Group Shared Styles

Group selectors and classes that share the same code.

```scss
/* bad */
.example1 {
  background: #000;
  color: #f0f0;
  font-weight: bold;
}
.example2 {
  background: #000;
  color: #f0f0;
  font-weight: bold;
  font-size: 1.5em;
}
/* good */
.example1,
.example2 {
  background: #000;
  color: #f0f0;
  font-weight: bold;
}
.example2 {
  font-size: 1.5em;
}
```

### Pseudo Classes & Pseudo Elements

Notice the double colon notation - ::after versus :after
The double colon replaced the single-colon notation for pseudo-elements in CSS3. This was an attempt from W3C to distinguish between pseudo classes and pseudo elements.

```scss
/* bad */
a {
  &:hover {
    font-weight: bold;
  }
  &:after {
    content: ">";
    font-weight: bold;
  }
}
/* good */
a {
  &:hover {
    font-weight: bold;
  }
  &::after {
    content: ">";
    font-weight: bold;
  }
}
```

### Ampersand

The ampersand "&" is an extremely useful feature, It is one of most powerful features in SASS. It can be a nice time-saver when you know how to use it, or a bit of a time-waster when you're struggling and could have written the same code in regular CSS.

```scss
/* bad */
a:hover {
  color: #fff;
}
/* good */
a {
  &:hover {
    color: #fff;
  }
}

/* bad */
div {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  &:after {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
  }
}
/* good */
div {
  &,
  &:after {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
  }
}

/* bad */
.login {
  color: #000;
  .login-button {
    color: #fff;
  }
}
/* good */
.login {
  color: #000;
  &-button {
    color: #fff;
  }
}
```

### One Line & One Selector

One selector per line, One rule per line.

```scss
/* bad */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
/* good */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

/* bad */

.example1 li {
  margin: 0;
}
/* good */
.example1 {
  li {
    margin: 0;
  }
}
```

### Unnecessary Nesting & Selectors

Unnecessary nesting and selectors must be avoided as this will make it harder to override propeties and increase the file size of your CSS.

```scss
/* bad */
.example1 {
  ul {
    li {
      margin: 0;
    }
  }
}

/* good */
.example1 {
  li {
    margin: 0;
  }
}

/* bad */
ul.example1 {
  li {
    margin: 0;
  }
}
/* good */
.example1 {
  li {
    margin: 0;
  }
}

/* bad */
.example1 {
  ul {
    background: #000;
    li {
      margin: 0;
    }
  }
}
/* good */
.example1 {
  ul {
    background: #000;
  }
  li {
    margin: 0;
  }
}
```

### Imports

@Import is used to import partial files.This is a great way to modularise your SASS.
Always explicitly add imports of the required stuff such as Mixins, Variables and Color Palettes and not import them globally to improve code readability and intellisense. Leading underscore must be omitted.

```scss
/* bad */
@import "_variables";
/* good */
@import "variables";
```

### Interpolation

interpolation : #{}

```scss
/* bad */
$direction: "left";
@warn "Direction: " + $direction;
/* good */
$direction: "left";
@warn "Direction: #{$direction}";
```

### Statements & Expressions

```scss
/* bad */
@for $i
    from 1
    through 3 {
        .example-#{$i} {
            width: 2em * $i;
        }
    }
}
/* good */
@for $i from 1 through 3 {
        .example-#{$i} {
            width: 2em * $i;
        }
}
```

**[⬆ back to top](#table-of-contents)**

## Ordering-Grouping

Group properties by type following the pattern "Positioning" , "Display & Box Model" , "Decoration & Typography", "Others".

```scss
/* bad */
.example {
       max-width: 200px;
        border: 1px solid #fff;
        border-bottom-width: 2px;
        min-width: 50px;
}
}
/* good */
.example{
    border: 1px solid #fff;
    border-bottom-width: 2px;
    min-width: 50px;
    max-width: 200px;
}
}
```

### Ordering Extends & Imports & Selectors

Knowing that at the beginning that a class or selector inherits a set of rules from somewhere else good and also beneficial and these style can also be overridden. Follow this ordering pattern:

1. @extend
2. @include
3. Properties (Ex: color, width etc..)
4. Pseudo Classes and Pseudo Elements 5. Attributes Selectors
5. Nested Selectors
6. Nested Classes

```scss
/* bad */
.example {
  @import mixin-example;
  @extend placeholder-example;
  color: #fff;
  .example2 {
    background: #f0f0;
  }
  &::after {
    content: "";
  }
  &:hover {
    color: #000;
  }
  &[attr="example"] {
    padding: 10px;
  }
  h3 {
    margin: 0;
  }
}
/* good */
.example {
  @extend placeholder-example;
  @import mixin-example;
  color: #fff;

  &:hover {
    color: #000;
  }

  &::after {
    content: "";
  }

  &[attr="example"] {
    padding: 10px;
  }

  h3 {
    margin: 0;
  }

  .example2 {
    background: #f0f0;
  }
}
```

**[⬆ back to top](#table-of-contents)**

---

## Mixins,Placeholders & Functions

### Mixins

Mixins are a great way to include sections of code multiple times within a site. However, including a mixin is the same as copying and pasting the styles throughout the CSS file. It creates a mass of duplicate code and can bloat your CSS file. Thus, It should only be used if an argument is present, to quickly create modified styles.
Use SASS Maps as arguments when passing CSS related options to avoid having breaking changes and be more scale able.

### Placeholders

Unlike mixins, placeholders can be used multiple times without adding any duplicate code. This makes them a much friendlier option for outputting DRY CSS. Functions.

### Functions

A function does not output any CSS. Instead, it returns a value that can be used in the SASS. This is useful for calculations that will be made throughout the site.

```scss
/* bad */
@mixin base-variant(
        $variant-class,
        $text-color: #999,
        $padding: 10px,
        $margin: 5px 0,
        $text-align: center
){
    .#{$variant-class} {
                color: $text-color;
                padding: $padding;
                margin: $margin;
                text-align: $text-align;
    }
}

@include base-variant("example1", #fff, 20px,
5px 0, left);
@include base-variant("example2", #000, 10px);

/* good */

@mixin base-variant($settings, $variant-name) {
        $defaults: (
                text-color: #999,
                padding: 10px,
                margin: 5px 0,
                text-align: center
);
        $settings: map-merge($defaults,$settings);
        .#{$variant-name} {
                color: map-get($settings, text-color);
                padding);
                margin);
                text-align);
        }
}

@include base-variant(
        (
            text-color: #fff,
            padding: 20px;
            text-align: left;
        ),
        "example1"
);
@include base-variant(
        (
            text-color: #000
        ),
        "example2"
);

/* css */
.example1 {
  color: #fff;
  padding: 20px;
  margin: 5px 0;
  text-align: left;
}
.example2 {
  color: #000;
  padding: 10px;
  margin: 5px 0;
  text-align: center;
}
```

```scss
/* bad */
@mixin base-variant {
  padding: 10px;
  margin: 5px 0;
  text-align: center;
}
.example1 {
  @include base-variant;
  color: #fff;
}
.example2 {
  @include base-variant;
  color: #000;
}

/* good */

%base-variant {
  padding: 10px;
  margin: 5px 0;
  text-align: center;
}
.example1 {
  @extend %base-variant;
  color: #fff;
}
.example2 {
  @extend %base-variant;
  color: #000;
}

/* css */

// mixin output
.example1 {
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  color: #fff;
}
.example2 {
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  color: #000;
}
// placeholder output
.example1,
.example2 {
  padding: 10px;
  margin: 5px 0;
  text-align: center;
}
.example1 {
  color: #fff;
}
.example2 {
  color: #000;
}
```

**[⬆ back to top](#table-of-contents)**

---

## Styled Components

### Styled Component Tips

Styled Components make React, React Native learning experiences great because it doesn’t feel like another language (css, sass), it still feels like Javascript. New comers can still wrap their head around their Javascript knowledge while creating stylesheet. For them it’s not another language, it is just a styling text that reside in Javascript. They don’t have to learn the “css way” and “javascript way”.

- **Auto-Prefixing**

it automatically add prefixes to your css

```scss
display: flex;
flex-direction: row;

//automatically becomes

-ms-flex: 1;
flex: 1 1;
display: -ms-flexbox;
display: flex;
-ms-flex-direction: row;
flex-direction: row;
```

- **Attrs**

Don’t forget you still have the ‘attrs’, and it’s can be passed down from your props.

```js
const InputText = styled.input.attrs({
  type: "text",
  placeholder: props => props.placeholder || "Please fill"
})`
  padding: 6px 12px;
`;
```

- **Can be used styled component with any css frameworks**

With attrs, you can obviously use className attribute, thus converting existing css framework to styled component is a breeze.

```js
const Button = styled.button.attrs({
  className: "btn btn-primary"
})``;
// With some dynamic props
const Button = styled.button.attrs({
  className: `btn btn-primary btn-${props => props.size || "medium"}`
})``;
<Button size="small" />;
```

- **withComponent**

You can switch component around, let’s say button to a with “withComponent”. It’s handy for some situation.

```js
const PrimaryButton = styled.button`
  background-color: blue;
`;

const PrimaryLink = PrimaryButton.withComponent("a");
```

- **Built in theme context api**

```js
import styled, { ThemeProvider } from "styled-components";
const theme = {
  primaryColor: "salmon",
  fontFamily: "Bebas"
};

const Button = styled.button`
  background: ${props => props.theme.primaryColor}
  font-family: ${props => props.theme.fontFamily}
`;

<ThemeProvider theme={theme}>
  <Button />

  {/* Or you can override */}
  <Button theme={{ primaryColor: "green" }} />
</ThemeProvider>;
```

- **Compositions & Mixins pattern**

There are many ways to do a composition. It is fairly easy with existing css helper or polished package, or you can write your own function as well.
Psss. There is

```js
import { css } from "styled-components";

const boxShadowMixin = css`
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
`;

const boxShadowMixinFunc = (top, left, blur, color, inset = false) => {
  return `box-shadow: ${
    inset ? "inset" : ""
  } ${top}px ${left}px ${blur}px ${color};`;
};

const StyledComp = styled.div`
  ${boxShadowMixin}
  ${boxShadowMixinFunc(0, 0, 4, "rgba(0, 0, 0, 0.5)")}
`;
```

- **Override existing-inline style**

Just in case of occasion arise and you need to override some style. The repeated & will bump generated className for each &.

```js
const MyStyledBox = styled(AlreadyStyledComponent)`
  &&& {
    color: palevioletred;
    font-weight: bold;
  }
`;
// Became
.MyBox.MyBox.MyBox {
  color: palevioletred;
  font-weight: bold;
}
// Override Inline style
const MyStyledComponent = styled(InlineStyledComponent)`
  &[style] {
    font-size: 12px !important;
    color: blue !important;
  }
`;

```

### Best Practices

#### Extracting often used variables

One of the holy grails while developing a large application is to perform principle (DRY). Usually, in a stylesheet, we repeat colour values, font sizes, margins etc. Can you imagine the scenario when someone decided to redesign your application and you didn’t extract often used values? Hundreds of places to change. It would be a nightmare. In regular CSS we can create variables by using var() function. But if you have to support old browsers you cannot depend only on CSS. You will need preprocessors like SASS or LESS, PostCSS or different solution. Styled-components is a JavaScript library so you can just use normal JS variables to extract particular values. You can split these values into several files, like in the example below:

```js
|-- styles/
       |-- colors.js
       |-- breakpoints.js
       |-- spaces.js
       |-- fonts.js
       |-- mixins.js
```

Inside them, we can export variables in a standard way as we export a regular JSON object:

- colors.js file:

```js
export default {
  grey1: "#e5e6e6",
  grey2: "#fafafa",
  grey3: "#41464e",
  white: "#fff"
};
```

Later, you can import these values for styling buttons, paragraphs etc.

```js
import styled from "styled-components";
import colors from "../../colors";

const StyledButton = styled.button`
  color: ${colors.white};
  text-align: center;
`;
```

#### Reducing the size of styles

Minification of CSS can be a crucial thing in large codebases. Reducing the size of CSS files is absolutely important in these environments which have a limited Internet connection. In normal CSS we can realise compression of styles by using for example plugin for Webpack or for other module bundlers. In styled-components minification is enabled by default so you don’t have to worry about it. But if there is a need to change this default behaviour you can turn it off with the babel-plugin-styled-components package. This plugin has to be installed manually:

```s
yarn add --dev babel-plugin-styled-components
```

And included in the .babelrc file or package.json with the false value for “minify” property like in the example below:

```js
"babel": {
  "plugins": [
    ["babel-plugin-styled-components", { "minify": false }]
  ]
}
```

- **There is one thing that we have to remember. Styled-components can’t extract CSS styles into a separate file. So, the result of minification (or dead code elimination) will be visible in a proper <style> tag.**

#### Adding useful global styles

Styles which are scoped to concrete components are very desirable nowadays. We don’t want to break the rest of the page while working on a particular component. However, sometimes there is a need to add something globally like a declaration of font-faces or resetting box-sizing property for every component. This is pretty easy in a traditional approach because it is the true nature of CSS in being global. Like working with Normalize.css in styled-components, we can achieve that by using the createGlobalStyle function. You can set the box-sizing property for every element on the page like in the example below:

```js
import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

const App = () => (
  <Fragment>
    <GlobalStyles />
    <header>Test app</header>
  </Fragment>
);

export default App;
```
