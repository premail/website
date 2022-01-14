---
title: Automatic code formatting and linting
sidebar_label: Code formatting and linting
slug: code-formatting-linting
---

Premail includes [sheerun/modern-node](https://github.com/sheerun/modern-node),
which formats and lints code using [Prettier](https://prettier.io/). This will
warn you about errors in the HTML or CSS syntax of your designs or emails, and
auto-format your files on every build and git commit.

It will not attempt to lint or format files in `dist` directories.

If you want to format your template files separately (for instance while you're
working on them), run `premail format`. This is run automatically during builds.
