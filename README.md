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
1. [Naming conventions](#naming-conventions)
1. [Rulesets](#rulesets)
   - [Sass format rules](#sass-format-rules)
   - [Exceptions](#exceptions)
1. [Properties](#properties)
   - [Properties order](#properties-order)
   - [Vendor prefixes](#vendor-prefixes)
1. [Values](#values)
   - [Values units and dimensions](#values-units-and-dimensions)
1. [Media Queries](#media-queries)
1. [Comments](#comments)
1. [Resources](#resources)
1. [Contributors](#contributors)
1. [License](#license)

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

## Naming Conventions

Lower case hyphen - delimited strings, with BEM-like naming for more complex pieces of code.

- **Variables, Placeholders, Mixins, Functions & SASS Maps**

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

**[⬆ back to top](#table-of-contents)**

---

## Whitespace

- **Never, never, ever mix spaces and tabs!**
- In Gamesys Client we use **tabs** and there is no exception from that rule. _[You may encounter legacy code that uses tabs or even worse mixed whitespace. That should be a warning for you. Don't fail as others did.]_
- In your editor turn on the `show invisibles` and `trim trailing whitespace` options. Benefits are:
  - Enforced consistency.
  - Eliminating end of line whitespace.
  - Eliminating blank line whitespace.
  - Commits and diffs are **much** easier to read.
- In your editor of choice enable `word wrap column` at 120 characters. Try to break longer lines into smaller if you approach the limit. **Keep things simple, readable and maintainable**.
- If you have a coding preference, set up your IDE to render tabs as long as you want.

  > Tip: use an [EditorConfig](http://editorconfig.org/) file (or equivalent) to help maintain the basic whitespace conventions that have been agreed for your code-base.

  ```css
  // bad
  body {
    ··background-color: #fefefe;
  }

  // bad
  body {
    ····background-color: #fefefe;
  }

  // good
  body {
    ————background-color: #fefefe;
  }
  ```

**[⬆ back to top](#table-of-contents)**

---

## Naming conventions

- Use lowercase when declaring html elements

  ```css
  // bad
  html,
  body {
    font-size: 100%;
  }

  // good
  html,
  body {
    font-size: 100%;
  }
  ```

- Use lowercase words separated by hyphens (dashes) when naming your selectors.

  ```css
  // bad
  .alertSuccess {
    color: lawngreen;
  }

  // bad
  .alert_success {
    color: lawngreen;
  }

  // good
  .alert-success {
    color: lawngreen;
  }
  ```

- Avoid abbrevations. Be descriptive with your naming.

  ```css
  // bad
  .alrtscs {
    color: limegreen;
  }

  // good
  .alert-success {
    color: limegreen;
  }
  ```

**[⬆ back to top](#table-of-contents)**

---

## Rulesets

- Include a single space before the opening brace of a ruleset.
- Include a single space after the colon of a declaration.

  ```css
  // bad
  .alert {
    display: block;
  }

  // bad
  .alert {
    display: block;
  }

  // good
  .alert {
    display: block;
  }
  ```

- Place the opening brace of a ruleset in the same line as the name of the ruleset
- Place the closing brace of a ruleset in the same column as the first character of the ruleset.

  ```css
  // bad
  .alert {
    display: block;
    height: 40px;
  }

  // bad
  .alert {
    display: block;
    height: 40px;
  }

  // good
  .alert {
    display: block;
    height: 40px;
  }
  ```

- Include one declaration per line in a declaration block.

  ```css
  // bad
  .alert {
    display: block;
    height: 40px;
  }

  // good
  .alert {
    display: block;
    height: 40px;
  }
  ```

- Use one level of indentation for each declaration.

  ```css
  // bad
  .alert {
    display: block;
  }

  // good
  .alert {
    display: block;
  }
  ```

- Use one discrete selector per line in multi-selector rulesets.

  ```css
  // bad
  .alert,
  .alert-info,
  .alert-success {
    display: block;
  }

  // good
  .alert,
  .alert-info,
  .alert-success {
    display: block;
  }
  ```

- Separate each ruleset by a blank line.

  ```css
  // bad
  .alert {
    display: block;
  }
  .alert-info {
    color: powderblue;
  }

  // good
  .alert {
    display: block;
  }

  .alert-info {
    color: powderblue;
  }
  ```

**[⬆ back to top](#table-of-contents)**

---

### Sass format rules

- Limit nesting rules and reassess if you find yourself more than 2 levels deep. This prevents overly-specific CSS selectors. Use @extend to cascade styles.

  ```scss
  // bad
  .alert {
    font-weight: normal;

    &.alert-info {
      font-weight: normal;

      &.alert-info-bold {
        font-weight: bold;
      }
    }
  }

  // good
  .alert {
    color: lightgray;
    font-weight: normal;
  }

  .alert-info {
    @extend .alert;
    color: powderblue;
  }

  .alert-info-bold {
    @extend .alert;
  }
  ```

- Always place `@extend` statements on the first lines of a declaration block.
- Where possible, group `@include` statements at the top of a declaration block, after any `@extend` statements.
- Put one line after `@extend` or `@include` to clearly identify them from other properties

  ```scss
  // bad
  .alert {
    display: block;
    @extend %alert;
  }

  // bad
  .alert {
    display: block;
    @extend %alert;

    // other properties
    @include highlight-text;
  }

  // bad
  .alert {
    @extend %alert;
    @include highlight-text;
    display: block;
  }

  // good
  .alert {
    @extend %alert;
    @include highlight-text;

    display: block;
  }
  ```

- Avoid large numbers of nested rules. Break them up when readability starts to be affected.

- Consider prefixing custom functions with `gs-` (gamesys) namespace. This helps to avoid any potential to confuse your function with a native CSS function, or to clash with functions from libraries.

  ```scss
  .alert {
    @extend %alert;
    @include clearfix();
    @include box-sizing(border-box);
    width: gs-grid-unit(1);
  }
  ```

- Use partials correctly. Partials are external files that are required by the main Sass/SCSS file, and these should be named using the `_partial.scss` convention.

So it can be imported without referencing the filename (or even the underscore), like so:

```scss
@import "partial";
```

**[⬆ back to top](#table-of-contents)**

---

### Exceptions

Large blocks of single declarations can use a slightly different, single-line
format. In this case, a space should be included after the opening brace and
before the closing brace.

```css
.col-xs-1 {
  width: 10%;
}
.col-xs-2 {
  width: 20%;
}
.col-xs-3 {
  width: 30%;
}
```

**[⬆ back to top](#table-of-contents)**

---

## Properties

- Use one level of indentation for each declaration.

  ```css
  // bad
  .alert {
    display: block;
  }

  // good
  .alert {
    display: block;
  }
  ```

- Use shorthand notations when declaring properties when possible.

  ```css
  // bad
  .alert {
    margin: 0 0 0 0;
  }

  // good
  .alert {
    margin: 0;
  }

  // bad
  .alert {
    margin: 10px auto 5px auto;
  }

  // good
  .alert {
    margin: 10px auto 5px;
  }

  // bad
  .alert {
    margin-top: 10px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
  }
  ```

**[⬆ back to top](#table-of-contents)**

---

### Properties order

We believe in simplicity and ease-of-maintenance and therefore we have decided that we're writing our rules in an alphabetical order.

> TIP: In _Sublime Text_ you can easily format rules by selecting them and pressing `F5` key.

```css
.selector {
  background: #000;
  border: 10px solid #333;
  bottom: 0;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-family: sans-serif;
  font-size: 16px;
  height: 100px;
  left: 0;
  margin: 10px;
  overflow: hidden;
  padding: 10px;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
  width: 100px;
  z-index: 10;
}
```

**[⬆ back to top](#table-of-contents)**

---

### Vendor prefixes

We use autoprefixer for [grunt](https://github.com/nDmitry/grunt-autoprefixer) or [gulp](https://github.com/Metrime/gulp-autoprefixer) which deals with vendor prefixes. No need to worry about those, phew!

```css
// you write
.alert {
  box-shadow: inset 0 0 1px 1px #eee;
}

// is compiled to
.alert {
  -webkit-box-shadow: inset 0 0 1px 1px #eee;
  -moz-box-shadow: inset 0 0 1px 1px #eee;
  box-shadow: inset 0 0 1px 1px #eee;
}
```

**[⬆ back to top](#table-of-contents)**

---

## Values

- Include a single space after the colon and before the value.

  ```css
  // bad
  .alert {
    display: block;
  }

  // good
  .alert {
    display: block;
  }
  ```

- Use **double quotes** `""`.

  ```css
  // bad
  .alert:before {
    content: "";
  }

  // good
  .alert:before {
    content: "";
  }
  ```

- **Always** end declarations wit a semi-colon!

  ```css
  // bad
  .alert {
    display: block;
    height: 40px;
  }

  // good
  .alert {
    display: block;
    height: 40px;
  }
  ```

- Quote attribute values in selectors;

  ```css
  // bad
  input[type="text"] {
    line-height: 1;
  }

  // good
  input[type="text"] {
    line-height: 1;
  }
  ```

- Use HEX code for colors, or `rgba()` if opacity is needed. The use of `rgb()` is discouraged due to some minor
  incompatibility issues with IE for fallback background colors.

- Shorten values and lowercase when possible: #fff instead of #FFFFFF.

  ```css
  // bad
  .alert {
    color: black;
  }

  .alert {
    color: #000000;
  }

  .alert {
    color: rgb(0, 0, 0);
  }

  // good
  .alert {
    color: #000;
  }

  // good
  .alert {
    color: rgba(0, 0, 0, 0.5);
  }
  ```

- Include a space after each comma in comma-separated property or function values.

  ```css
  // bad
  .alert {
    font-family: helvetica, arial, sans-serif;
  }

  // good
  .alert {
    font-family: helvetica, arial, sans-serif;
  }
  ```

- Surround names with space inside with double quotes `""` e.g. font name has a space

  ```css
  // bad
  .alert {
    font-family: "Helvetica Neue", sans-serif;
  }

  // good
  .alert {
    font-family: "Helvetica Neue", sans-serif;
  }
  ```

- Long, comma-separated property values - such as collections of gradients or shadows - can be arranged across multiple lines in an effort to improve readability and produce more useful diffs. Break line after the colon (no space is needed) and indent the values with four spaces. If there are more than one value break lines after each comma-separated value.

  ```css
  // bad
  .alert {
    background-image: linear-gradient(#fff, #ccc), linear-gradient(#f3c, #4ec);
    box-shadow: 1px 1px 1px #000, 2px 2px 1px 1px #ccc inset;
  }

  // good
  .alert {
    background-image: linear-gradient(#fff, #ccc), linear-gradient(#f3c, #4ec);
    box-shadow: 1px 1px 1px #000, 2px 2px 1px 1px #ccc inset;
  }
  ```

**[⬆ back to top](#table-of-contents)**

---

### Values units and dimensions

- When denoting the dimensions — that is, the width or height — of an element or its margins, borders, or padding, specify the units in either `em`, `px`, `rem` or `%`.
- 0 values should not have units unless necessary.
- Line-heights should also be unit-less (unless required) [Unitless line-heights](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/)

  ```css
  // bad
  width: 12;
  width: 0px;
  line-height: 14px;

  // good
  width: 12px;
  width: 12%;
  width: 12em;
  width: 12rem;
  width: 0;
  line-height: 1.4;
  ```

- Use a leading zero for decimal values, including in rgba().

  ```css
  // bad
  .alert {
    font-size: 0.85rem;
  }

  // good
  .alert {
    font-size: 0.85rem;
  }

  // bad
  .alert {
    color: rgba(0, 0, 0, 0.45);
  }

  // good
  .alert {
    color: rgba(0, 0, 0, 0.45);
  }
  ```

**[⬆ back to top](#table-of-contents)**

---

## Media Queries

- Keep media queries grouped by media at the bottom of the stylesheet.

  ```css
  // single line media queries
  @media all and (max-width: 699px) and (min-width: 520px) {
    .lobby-loader {
      width: 640px;
    }
  }
  ```

- Use media queries for generic device, or (preferably) content sizes, don't make specific patches

  ```scss
  /*
      Extra small devices (phones, less than 768px)
      Default values -> mobile first
  */

  /* Small devices (tablets, 768px and up) */
  @media (min-width: $screen-sm-min) { ... }

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: $screen-md-min) { ... }

  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: $screen-lg-min) { ... }
  ```

- If the are more than 2 rules for media query it is allowed to break them into new lines. **Do not** indent @media values.

  ```css
  @media print only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    .lobby-loader {
      /* properties */
    }
  }
  ```

````

**[⬆ back to top](#table-of-contents)**

---

## Comments

Well commented code in CSS is extremely important. Take time to describe sections/areas of your work, their limitations and the way they are constructed. Don't leave others guessing as to the purpose of uncommon or non-obvious code.

In Sass both single-line `// comment` and multi-line `/* comment */` comments are considered valid. Both have their uses. Single-line comments are preferred if you want to put a short comment or disable a piece of code. Multi-line comments are prefered when you describe a large block of code and when you want to make sure that after compiling the css file retains the comments.

Concerned about performance? Don’t worry, comments can be removed by CSS minification utilities for use on production servers.

> Comment style should be short and simple. Place comments on a newline above their subject. Keep line-length to a maximum of 120 columns. (Set `show ruler` and `wrap paragraph at ruler` to show the maximum line-length)

```css
// bad
.alert {
    display: block; // it might be a span
}

// good
.alert {
    // because the element might have inline style
    display: block;
}
````

- Make liberal use of comments to break CSS code into discrete sections. Use "sentence case" comments and consistent text indentation.

```scss
// =================================================================================================
// Plugin Lobby-loader
// =================================================================================================
.lobby-loader {
  overflow: hidden;
}

// Lobby-loader > Promotions
// =================================================================================================
.lobby-loader .promotions {
  width: 66.6%;
}

// Lobby-loader > Offer
// =================================================================================================
.lobby-loader .offer {
  // content
}
```

- Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: need to figure this out...` or `TODO: need to implement...`.

- Use `// FIXME:` to annotate problems

  ```scss
  {
  .
  ;
  }
  ```

- Use `// TODO:` to annotate solutions to problems

  ```scss
  {
  ;

  {
  ;
  ;
  }
  ```

;
}
}

{
?
;
}

```

**[⬆ back to top](#table-of-contents)**

---

## Resources

- [devdocs.io/css/](http://devdocs.io/css/)
- [css-tricks](http://css-tricks.com/)
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Unitless line-heights](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/)
- [CSS Shorthand guide](http://www.dustindiaz.com/css-shorthand/)
- [CSS Shorthand - codex](http://codex.wordpress.org/CSS_Shorthand)
- [Sass](http://sass-lang.com/)
- [Compass](http://compass-style.org/)
- [Smacss](http://smacss.com/)

**[⬆ back to top](#table-of-contents)**

---

## Contributors

- [View Contributors](https://github.gamesys.co.uk/marcin-kumorek/js-styleguide/graphs/contributors)

---

## License

(The MIT License)

Copyright (c) 2014 Gamesys

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**
```
