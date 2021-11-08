---
title: Premail internal structure
sidebar_label: Internal structure
slug: internal-structure
---

<https://github.com/premail/premail/tree/v2.0.0>

- [`index.js`](https://github.com/premail/premail/blob/v2.0.0/index.js) uses
  [yargs](https://yargs.js.org) to pass tasks and other functions to the
  `premail` command.
- [`gulpfile.js`](https://github.com/premail/premail/blob/v2.0.0/gulpfile.js)
  defines tasks for [gulp](https://gulpjs.com/). Some functions run outside of
  gulp.
- [`.mjmlconfig`](https://github.com/premail/premail/blob/v2.0.0/.mjmlconfig)
  defines the [custom MJML components](/docs/components/summary/) we use.
- Other root-level dot-files should be self-explanatory.
- [`src`](https://github.com/premail/premail/blob/v2.0.0/src) contains the
  program itself.
  - [`config`](https://github.com/premail/premail/blob/v2.0.0/src/config)
    functions load and process configuration from command-line, internal, and
    user-facing file sources.
  - [`example`](https://github.com/premail/premail/blob/v2.0.0/src/example)
    contains the scaffolding of a Premail project that is created with
    `premail init`. For more information about how this structure operates, see
    Premail's end-user
    [design structure](/docs/overview/usage/explore-design-structure/).
  - [`helpers`](https://github.com/premail/premail/blob/v2.0.0/src/helpers) are
    small utility functions, usually from other sources.
  - [`ops`](https://github.com/premail/premail/blob/v2.0.0/src/ops) are a kind
    of catch-all internal function category: error handling, command-line flags,
    console notification and variable validation.
  - [`settings`](https://github.com/premail/premail/blob/v2.0.0/src/settings)
    are internal default settings for Premail, stored in YAML format.
  - [`tasks`](https://github.com/premail/premail/blob/v2.0.0/src/tasks)
    correspond to `premail` commands. Some of these are gulp tasks, and some are
    pure Node functions.
- [`README.md`](https://github.com/premail/premail/blob/v2.0.0/README.md)
  contains basic project documentation. The repo for this site
  (https://premail.dev), which is built with
  [Docusaurus](https://docusaurus.io/), is located on
  [the docs branch](https://github.com/premail/premail/tree/docs), and a GitHub
  Action automatically deploys it to
  [the gh-pages branch](https://github.com/premail/premail/tree/gh-pages) on
  every new commit.
