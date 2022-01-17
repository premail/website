---
# Docusaurus settings
title: Setting up Premail
sidebar_label: Setup
slug: setting-up-premail
---

## Requirements

Premail runs on Node. You'll need to have at
[Node](https://nodejs.org/en/download/) 12.x or 14.x installed.

:::info Node versions

Premail works with Node 12.x or 14.x.
**If you want to be able to use the `watch` function you need to stay at
[Node 12.x](https://github.com/nodejs/Release#release-schedule)** because of a
[limitation in gulp](https://github.com/gulpjs/glob-watcher/issues/55). (This
means you'll see an unfortunate number of depreciation warnings upon
installation.)

If you don't need to use `watch`, you can run Node 14.x. At this time, Premail will not run on Node 15.x or above.

We recommend using [n](https://github.com/tj/n) or
[nvm](https://github.com/nvm-sh/nvm) if you're managing multiple versions of
Node.

:::

## Installation

```bash
npm install -g premail
```

That's it!

### Add to an existing Node project

If you already have a Node-based build process and want to integrate Premail
into it, you can install it locally with:

```bash
npm install premail --save-dev
```

You are also free to fork this repo and alter it to fit your needs.

:::tip Editor plugins

MJML has [plugins](https://documentation.mjml.io/#applications-and-plugins) for
Visual Studio Code, Atom, and Sublime Text 3 and 4 that will help with things
like syntax highlighting.

:::
