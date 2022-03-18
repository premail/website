---
# Docusaurus settings
title: Premail internal structure
sidebar_label: Internal structure
slug: internal-structure
---

<https://github.com/premail/premail/tree/main>

- [`index.js`](https://github.com/premail/premail/blob/main/index.js) uses
  [yargs](https://yargs.js.org) to pass tasks and other functions to the
  `premail` command.
- [`gulpfile.js`](https://github.com/premail/premail/blob/main/gulpfile.js)
  defines tasks for [gulp](https://gulpjs.com/). Not all Premail functions are
  gulp tasks, for instance `premail init` and `premail destroy` are referenced
  directly from `index.js` and don't run through gulp.
- Dotfiles should be self-explanatory.
- [`docs`](https://github.com/premail/premail/tree/main/docs) contains
  (mirrored) project docs from this documentation site. They are included at
  this path in order to be accessible to GitHub.
- [`src`](https://github.com/premail/premail/blob/main/src) contains the program
  itself.
  - [`config`](https://github.com/premail/premail/blob/main/src/config)
    functions load and process configuration from command-line, internal, and
    user-facing file sources.
  - [`scaffolding`](https://github.com/premail/premail/blob/main/src/scaffolding)
    contains:
    - the initial
      [`project`](https://github.com/premail/premail/tree/main/src/scaffolding/project)
      created with `premail init` (see
      [design structure](/docs/overview/usage/explore-design-structure/)).
    - the stub
      [`email`](https://github.com/premail/premail/tree/main/src/scaffolding/email)
      created when no options are passed to `premail new email` (see
      [email structure](http://localhost:3000/docs/overview/usage/explore-email-structure)).
  - [`helpers`](https://github.com/premail/premail/blob/main/src/helpers) are
    small utility functions, usually from other sources, that don't rely on
    anything specific to Premail to run.
  - [`ops`](https://github.com/premail/premail/blob/main/src/ops) are a kind of
    catch-all internal function category: error handling, file copying, console
    notification and variable validation.
  - [`settings`](https://github.com/premail/premail/blob/main/src/settings) are
    internal default settings for Premail, stored in YAML format.
  - [`tasks`](https://github.com/premail/premail/blob/main/src/tasks) correspond
    to `premail` commands. Some of these are gulp tasks, and some are just Node
    JS files.
- [`README.md`](https://github.com/premail/premail/blob/main/README.md) contains
  basic project documentation.

:::info Premail documentation repository

The repo for this site (https://premail.dev), which is built with
[Docusaurus](https://docusaurus.io/), is in its own GitHub repo:
**[premail/website](https://github.com/premail/website/)**.

:::
