---
# Docusaurus settings
title: Automatic code formatting and linting
sidebar_label: Code formatting and linting
slug: code-formatting-linting
---

Premail formats and lints templates and style sheets using
[Prettier](https://prettier.io/). This will warn you about errors in the HTML or
CSS syntax of your designs or emails, and it auto-formats your files on every
build to make file-diffing easier.

It will not attempt to format or lint files in `dist` directories.

You can run `premail format` at any time to apply Prettier to your templates.
This is run automatically during builds on the current design and/or email.
