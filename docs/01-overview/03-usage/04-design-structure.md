---
# Docusaurus settings
title: Explore the structure of a design
sidebar_label: Design structure
slug: explore-design-structure
---

Look in the `designs` subdirectory. This will hold each of the designs
(structure and styling) for your emails. For instance, you might have a
newsletter design, a welcome message design, and a holiday design.

The `_default` directory holds an example design. You can choose to use this
design and modify it, or write your own.

Within each design directory, you'll find that an individual design is made up
of both markup and theme settings.

### Markup

Markup files are primarily
[MJML code](https://documentation.mjml.io/#components), with Handlebars used for
templating. When your project is compiled, the Handlebars processing comes
first, and so these files have the `.hbs` Handlebars extension. In most cases,
though, all you'll need to know is MJML.

- `index.hbs`: This is the primary file that loads each of the components
  (`content` and `structure`) for your email. Usually, you won't need to edit
  this file unless you want to re-order the components themselves.
- `designConfig.yaml` controls settings for your design. In order to render
  bulletproof email code, MJML sets some styles directly on elements, and uses
  inlined CSS on others. To make it easier to quickly create a new design, or
  slightly alter an existing one, this file lists the most common styles for a
  design, which are then mapped automatically to the appropriate locations in
  MJML and CSS. If there are styles you want to add or change that aren't listed
  here, your next step should be the Sass files in `theme`. All settings here
  can be overridden in individual structure or content files using valid MJML
  syntax. For instance, the font size of navigation items is set in this file at
  `text: navigation: size`, and in the default design's `bottomNav.hbs` file it
  is overridden with the MJML `font-size` attribute.
- `content`: This directory holds files that will _usually_ change in each email
  -- the title, preview text, header/hero area and main body. If these templates
  exist in an email you're building, they'll override the templates in the
  design. So why have these templates in a design at all? So you can preview
  what a design will look like -- in other words, when designing the design.
- `structure`: This directory holds files that may _sometimes_ change -- top and
  bottom navigation menus, social media links, and the footer area. Depending on
  how you prefer to create your designs, you might opt to never change these
  components in a given design. If and when these same files exist in an email,
  they will be overridden by that email.
- `dist`: This directory holds the built version of the design.

### Theme

The `theme` subdirectory contains `*.scss`
[Sass files](https://sass-lang.com/guide) that make individual changes to CSS.
If you're not familiar with Sass, the `scss` syntax used here is
[a superset of CSS](https://sass-lang.com/documentation/syntax#scss) -- so any
valid CSS can be placed in these files. If you read through them, you'll see
that they use Sass to import variables from your design configuration, but you
can ignore or overwrite these styles if you wish. The Sass files are heavily
commented to make it clear which styles they control.

Finally, note that some attributes must be set on `<mj-wrapper>` and other
elements directly in the `index.hbs` file. In every case, these load settings
from `designConfig.yaml`, so it should be easiest to change styles there -- but
if you need to alter or add something like a CSS class, take a look at what's
being defined in `index.hbs`.
