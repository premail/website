---
# Docusaurus settings
title: Building your email
sidebar_label: Building your email
slug: building-your-email
---

## Watch your email

As you work on your email content, you'll want to see how it renders.

Run `premail watch` using the `-e` (or `--email`) option to build your email
using the
[default design in your settings](/docs/overview/usage/explore-email-structure#an-emails-design):

```sh
premail watch -e welcome
```

To specify a design, use the `-d` (or `--design`) option:

```sh
premail watch -e welcome -d postmodern
```

You can quickly test out what the same email looks like using a different
design:

```sh
premail watch -e welcome -d premodern
```

The `premail watch` command will watch for any changes in any configuration
files, template files, or Sass files, and re-render the `dist` subdirectory of
your design, then open it in your default web browser. (If you'd rather not have
it open in your web browser, you can append `-s` or `--noserve`.)

## Build your email

If you don't want to continuously watch your files, use `premail build`. Again,
using the "postmodern" example, that would be:

```sh
premail build -e welcome -d postmodern
```

This will render the design, open it in a browser and then stop.

:::info Inspecting the compiled MJML

Because Premail assembles several files together, it can sometimes be helpful to
see what the final compiled MJML template is -- before it's passed to MJML to
render in email-friendly HTML.

To see this file, append `--temp` to any `watch` or `build` command and the
compiled `index.mjml` file will be included in `dist`.

:::

### Images in your email

Images can be included locally while you're drafting the email, but MJML doesn't
do anything magical in terms of hosting these images -- you'll still have to
upload them somewhere and use the full URLs for the hosted images.
