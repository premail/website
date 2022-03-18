---
# Docusaurus settings
title: Create a new email with an existing design
sidebar_label: Create a new email
slug: create-a-new-email
---

Once you have a design you want to use, you can create a new email based on it:

```sh
premail new email welcome
```

This will create a new subdirectory of `emails` (or the email directory
[specified in your `premail.yaml` file](/docs/overview/usage/project-settings)).
With no source email specified, it will create a
[stub email](https://github.com/premail/premail/tree/main/src/scaffolding/email)
with blank components.

Want to create an email based on an existing one? Just add the `-e` or `--email`
flag:

```sh
premail new email welcome -e _example
```

This creates a new email named `welcome` with the content of the
[example email](https://github.com/premail/premail/tree/main/src/scaffolding/project/emails/_example)
included with Premail. Using this option, you can quickly create a new email
based on the content of a previous email, then change what you need.
