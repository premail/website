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
- [`.mjmlconfig`](https://github.com/premail/premail/blob/main/.mjmlconfig)
  defines the [custom MJML components](/docs/components/summary/) we use.
- Other root-level dot-files should be self-explanatory.
- [`src`](https://github.com/premail/premail/blob/main/src) contains the program
  itself.
  - [`config`](https://github.com/premail/premail/blob/main/src/config)
    functions load and process configuration from command-line, internal, and
    user-facing file sources.
  - [`example`](https://github.com/premail/premail/blob/main/src/example)
    contains the scaffolding of a Premail project that is created with
    `premail init`. For more information about how this structure operates, see
    Premail's end-user
    [design structure](/docs/overview/usage/explore-design-structure/).
  - [`helpers`](https://github.com/premail/premail/blob/main/src/helpers) are
    small utility functions, usually from other sources, that don't rely on
    anything specific to Premail to run.
  - [`ops`](https://github.com/premail/premail/blob/main/src/ops) are a kind of
    catch-all internal function category: error handling, command-line flags,
    console notification and variable validation.
  - [`settings`](https://github.com/premail/premail/blob/main/src/settings) are
    internal default settings for Premail, stored in YAML format.
  - [`tasks`](https://github.com/premail/premail/blob/main/src/tasks) correspond
    to `premail` commands. Some of these are gulp tasks, and some are just Node
    JS files.
- [`README.md`](https://github.com/premail/premail/blob/main/README.md) contains
  basic project documentation. The repo for this site (https://premail.dev),
  which is built with [Docusaurus](https://docusaurus.io/), is a separate repo:
  [premail/website](https://github.com/premail/website/).
