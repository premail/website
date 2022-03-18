---
# Docusaurus settings
title: Premail code style and syntax
sidebar_label: Code style and syntax
slug: code-style-syntax
---

Premail uses [Husky](https://typicode.github.io/husky), internally to format and
lint code using [Prettier](https://prettier.io/) on every git commit. (Prettier
is also used on the end-user side, without Husky.)

The following config options are set:

- JavaScript uses [Standard Style](https://standardjs.com/). We are
  [in the process](https://github.com/premail/premail/issues/60) of upgrading to
  ES Module syntax.
- For Gulp tasks, we use
  [version 4](https://gulpjs.com/docs/en/getting-started/creating-tasks) syntax
  with
  **[`pipeline()`, not `.pipe`](https://github.com/gulpjs/gulp/discussions/2586)**.
  Instead of using one-off gulp wrappers, we use
  [`gulp-tap`](https://www.npmjs.com/package/gulp-tap) to pass streams as files.
- Handlebars processing happens _first_ in the build process, thus all templates
  are named as Handlebars files. Within these templates, you will also see MJML,
  which will be processed second.
- MJML should always be valid under
  [version 4](https://github.com/mjmlio/mjml/releases). Use the
  [MJML Try It Live](https://mjml.io/try-it-live/) website to test if necessary.
- Sass files use the SCSS syntax to make it easiest on end-users. It is compiled
  with [Dart Sass](https://sass-lang.com/dart-sass) and uses
  [node-sass-json-importer](https://github.com/pmowrer/node-sass-json-importer)
  (which does, in fact, work with Dart Sass) to import variables from
  configuration files into the Sass files. Because of how Sass maps work, YAML
  objects need to defined and passed separately. See
  [`src/config/sassImport.js`](https://github.com/premail/premail/tree/main/src/config/sassImport.js)
  and the
  [`sass()` function in `src/tasks/build.js`](https://github.com/premail/premail/blob/main/src/tasks/build.js#L57-L68)
  for the implementation.
- YAML and Markdown files are wrapped when possible at 80 characters. This is
  enforced with Prettier.
- Indents are 2 spaces, enforced with
  [`.editorconfig`](https://github.com/premail/premail/tree/main/.editorconfig).
