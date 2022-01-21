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
- `content/`: This directory holds files that will _always_ change in each email
  -- the title, preview text, header/hero area and main body.
- `structure/`: This directory holds files that may _sometimes_ change in each
  email -- top and bottom navigation menus, social media links, and the footer
  area. Depending on how you prefer to create your designs, you might opt to
  never change these components in a given design.
- `designConfig.yaml` controls settings for your design. In order
  to render bulletproof email code, MJML sets some styles directly on elements,
  and uses inlined CSS on others. To make it easier to quickly create a new
  design, or slightly alter an existing one, this file lists the most common
  styles for a design, which are then mapped automatically to the appropriate
  locations in MJML and CSS. If there are styles you want to add or change that
  aren't listed here, your next step should be the Sass files inside `theme`.

### Theme

The `theme` subdirectory contains two sets of files: styles and configuration.

- `theme/*.scss` files are [Sass files](https://sass-lang.com/guide) that make
  individual changes to CSS. If you're not familiar with Sass, the `scss` syntax
  used here is
  [a superset of CSS](https://sass-lang.com/documentation/syntax#scss) -- so any
  valid CSS can be placed in these files. If you read through them, you'll see that
  they use Sass to import variables from your theme configuration, but you can
  ignore or overwrite these styles if you wish. The Sass files are heavily
  commented to make it clear which styles they control. Most styles you'll want to control are in the `inline.scss` file, because these are the styles MJML will inline to maximize email client compatibility.
- `theme/*.hbs` files are Handlebars files with MJML markup that load settings
  from `designConfig.yaml` into MJML itself. If you have a style that you can't
  seem to change, check these files. They are included in the `index.hbs` file
  automatically.

Finally, note that some attributes must be set on `<mj-wrapper>` elements for
each component directly in the `index.hbs` file. In every case, these are
loading settings from `designConfig.yaml`, so it should be easiest to change
styles there -- but if you need to alter or add something like a CSS class, take
a look at what's being defined in `index.hbs`.
