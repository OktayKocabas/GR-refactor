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
   - [Variables, Placeholders, Mixins, Functions & SASS Maps Naming of Foreground and Background color variables]()
   - [Classes](#Classes)
1. [Syntax & Formatting](#Syntax-Formatting)

   - [Numeric-Values](#Numeric-Values)
   - [String-Values](#String-Values)
   - [Colors](#Colors)
   - [Bangs](#Bangs)
   - [Group-Shared-Styles](#Group-Shared-Styles)
   - [Pseudo-Classes,Pseudo-Elements-Ampersand:&](#Pseudo-Classes-Pseudo-Elements-Ampersand)
   - [One-Line,One-Selector](#One-Line-One-Selector)
   - [Unnecessary-Nesting,Selectors](#Unnecessary-Nesting-Selectors)
   - [Mixin-Parameters,SASS-Maps](#Mixin-Parameters,SASS-Maps)
   - [Imports](#Imports)
   - [Interpolation](#Interpolation)
   - [Statements,Expressions](#Statements,Expressions)

1. [Ordering-Grouping](#Ordering-Grouping)
   - [Ordering,Extends,Imports,Selectors,etc...](#Ordering,Extends,Imports,Selectors)
1. [Mixins,Placeholders,Functions](#Mixins,Placeholders,Functions)
   - [Mixins](#Mixins)
   - [Placeholders](#Placeholders)
   - [Functions](#Functions)

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

### Ampersand: &

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

### One Line,One Selector

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

### Imports: @import

@Import is used to import partial files.This is a great way to modularise your SASS.
Always explicitly add imports of the required stuff such as Mixins, Variables and Color Palettes and not import them globally to improve code readability and intellisense. Leading underscore must be omitted.

```scss
/* bad */
@import "_variables";
/* good */
@import "variables";
```

### Interpolation: #{}

```scss
/* bad */
$direction: "left";
@warn "Direction: " + $direction;
/* good */
$direction: "left";
@warn "Direction: #{$direction}";
```

### Statements & Expressions: @ if, @each, @for...

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

### Ordering Extends,Imports,Selectors etc...

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
