---
title: Create a new project
slug: create-new-premail-project
---

In your project folder, run the following:

```sh
premail init
```

This will create the starting configuration for your project, an initial design
to build from, and a sample email. Specifically, it will create everything from premail's [`example` directory](https://github.com/premail/premail/tree/v2.0.0/src/example)

If data already exists in the current directory, `premail init` will ask for confirmation; any existing files with the same filenames will be overwritten. If you want to skip this check, use `premail init --yes`.

To reverse project initialization, you can [destroy the project](/docs/overview/usage/destroy-project/).
