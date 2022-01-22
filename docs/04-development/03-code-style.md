---
# Docusaurus settings
title: Premail code style and syntax
sidebar_label: Code style and syntax
slug: code-style-syntax
---

Premail includes [sheerun/modern-node](https://github.com/sheerun/modern-node),
which formats and lints code using [Prettier](https://prettier.io/). This is
used both in the user-facing project side and internally, so in general it
should clean up and format various language files appropriately:

- JavaScript uses [Standard Style](https://standardjs.com/). Most files are
  written in ES6, but support exists to use Babel for newer syntaxes.
- Gulp tasks are written in
  [version 4](https://gulpjs.com/docs/en/getting-started/creating-tasks) syntax
  and
  **[use `pipeline()`, not `.pipe`](https://github.com/gulpjs/gulp/discussions/2586)**.
- Handlebars processing happens _first_ in the build process, thus all templates
  are named as Handlebars files. Within these templates, you will also see MJML,
  which will be processed second.
- MJML should be valid under
  [version 4](https://github.com/mjmlio/mjml/releases): Use the
  [MJML Try It Live](https://mjml.io/try-it-live/) website to test if necessary.
- Sass files use the SCSS syntax to make it easiest on end-users. It is compiled
  with [Dart Sass](https://sass-lang.com/dart-sass) and uses
  [node-sass-json-importer](https://github.com/pmowrer/node-sass-json-importer)
  (which does, in fact, work with Dart Sass) to import variables from
  configuration files into the Sass files. See
  [`src/config/sassImport.js`](https://github.com/premail/premail/tree/main/src/config/sassImport.js)
  and the
  [`sass()` function in `src/tasks/build.js`](https://github.com/premail/premail/blob/main/src/tasks/build.js#L57-L67)
  for the implementation.
- YAML and Markdown files are wrapped when possible at 80 characters. This is
  enforced with Prettier.
- Indents are 2 spaces, enforced with
  [`.editorconfig`](https://github.com/premail/premail/tree/main/.editorconfig).
