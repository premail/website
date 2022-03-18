---
# Docusaurus settings
title: Create a new project
slug: create-new-premail-project
---

In your project folder, run the following:

```sh
premail init
```

This will create the starting configuration for your project, an initial design
to build from, and an example email. Specifically, it will create everything
from Premail's
[project scaffolding](https://github.com/premail/premail/tree/main/src/scaffolding/project/).

If data already exists in the current directory, `premail init` will ask for
confirmation; any existing files with the same filenames will be overwritten. If
you want to skip this check, use `premail init --yes`.

We intentionally keep the project scaffolding small. If you want to add things
like [`.gitignore`](https://git-scm.com/docs/gitignore),
[`.editorconfig`](https://editorconfig.org/), linting rules, documentation, or
other files, that's up to you.

To reverse project initialization, you can
[destroy the project](/docs/overview/usage/destroy-project/).
