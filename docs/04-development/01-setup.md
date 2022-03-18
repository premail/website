---
# Docusaurus settings
title: Development setup
sidebar_label: Preparing a development setup
slug: setup
---

If you want to help contribute to Premail's development, great! (If you just
want to learn how to install and use Premail,
[head over here](/docs/overview/setting-up-premail).)

Clone Premail's GitHub repo:

```sh
git clone https://github.com/premail/premail
```

Run `node --version` to determine your release of Node and install if necessary.

:::info Node versions

Premail requires Node version 12.x or 14.x. See
[Premail setup](/docs/overview/setting-up-premail/) for more.

:::

In your local copy of the Premail repo, run:

```bash
npm install
```

:::tip Editor plugins

MJML has [plugins](https://documentation.mjml.io/#applications-and-plugins) for
Visual Studio Code, Atom, and Sublime Text 3 and 4 that will help with things
like syntax highlighting.

:::

## Testing your work

As you develop, you'll want to test that the `premail` command is still working.
To do this, set up a separate directory outside of your local copy of the
Premail repo, for instance called `test`. Then use
[`npm link`](https://docs.npmjs.com/cli/v6/commands/npm-link) to
[reference your _local version_ of Premail](https://dev.to/erinbush/npm-linking-and-unlinking-2h1g),
rather than the current npm version.

Alternatively, use `npm install -g .` within your local Premail repo (you'll
need to uninstall Premail globally first). This is actually
[what Premail does in a GitHub Action](https://github.com/premail/premail/blob/main/.github/workflows/node.yml#L37)
to make sure each commit doesn't break basic functionality.

The commands `premail init` and `premail destroy --yes --readme` are helpful in
quickly setting up and tearing down test projects. If you change anything in the
`src/scaffolding/project` directory, for instance, you'll need to destroy and
recreate a project in order to pick up those changes.
