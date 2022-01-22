---
# Docusaurus settings
title: Create a new email with an existing design
sidebar_label: Create a new email
slug: create-a-new-email
---

:::caution Still in development

**The functionality described below is still in development.** For the moment,
the easiest way to create a new email is to copy the `_example` subdirectory of
`emails` and give it a new name.

:::

Once you have a design you want to use, you can create a new email based on it:

```sh
premail new email special_offer -d postmodern
```

This creates an email using the `postmodern` design. If you don't specify the
`-d` (or `--design`) flag, premail will build an email using the default design
specified in your `premail.yaml` file.
